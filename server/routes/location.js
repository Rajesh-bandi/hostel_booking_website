import express from 'express';
import axios from 'axios';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiter for location API (Nominatim asks for 1 req/sec max)
const locationLimiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // 1 request per second
  message: { success: false, message: 'Too many requests, please try again later' }
});

// In-memory cache for common searches
const searchCache = new Map();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

// @route   GET /api/location/autocomplete
// @desc    Get city suggestions using Nominatim OpenStreetMap
// @access  Public
router.get('/autocomplete', locationLimiter, async (req, res) => {
  try {
    const { q } = req.query;

    // Validate query
    if (!q || q.length < 2) {
      return res.json({
        success: true,
        suggestions: []
      });
    }

    const searchKey = q.toLowerCase().trim();

    // Check cache first
    const cached = searchCache.get(searchKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return res.json({
        success: true,
        suggestions: cached.data
      });
    }

    // Call Nominatim API
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: q,
        format: 'json',
        addressdetails: 1,
        limit: 5,
        countrycodes: 'in' // Restrict to India
      },
      headers: {
        'User-Agent': 'HostelHub/1.0' // Required by Nominatim
      },
      timeout: 5000 // 5 second timeout
    });

    // Process results
    const suggestions = response.data
      .map(place => {
        const city = place.address?.city ||
                     place.address?.town ||
                     place.address?.village ||
                     place.address?.municipality ||
                     place.name;

        const state = place.address?.state;

        if (!city) return null;

        return {
          name: place.display_name,
          city: city,
          state: state || '',
          lat: parseFloat(place.lat),
          lng: parseFloat(place.lon),
          displayName: state ? `${city}, ${state}` : city
        };
      })
      .filter(item => item !== null)
      // Remove duplicates based on city name
      .reduce((unique, item) => {
        if (!unique.find(u => u.city === item.city && u.state === item.state)) {
          unique.push(item);
        }
        return unique;
      }, []);

    // Cache the results
    searchCache.set(searchKey, {
      data: suggestions,
      timestamp: Date.now()
    });

    // Clear old cache entries periodically
    if (searchCache.size > 1000) {
      const now = Date.now();
      for (const [key, value] of searchCache.entries()) {
        if (now - value.timestamp > CACHE_DURATION) {
          searchCache.delete(key);
        }
      }
    }

    res.json({
      success: true,
      suggestions
    });

  } catch (error) {
    console.error('Location API error:', error.message);

    // Return cached popular cities as fallback
    const fallbackCities = [
      { city: 'Bhimavaram', state: 'Andhra Pradesh', lat: 16.5449, lng: 81.5212, displayName: 'Bhimavaram, Andhra Pradesh' },
      { city: 'Hyderabad', state: 'Telangana', lat: 17.3850, lng: 78.4867, displayName: 'Hyderabad, Telangana' },
      { city: 'Bangalore', state: 'Karnataka', lat: 12.9716, lng: 77.5946, displayName: 'Bangalore, Karnataka' },
      { city: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lng: 72.8777, displayName: 'Mumbai, Maharashtra' },
      { city: 'Delhi', state: 'Delhi', lat: 28.7041, lng: 77.1025, displayName: 'Delhi, Delhi' }
    ];

    res.json({
      success: true,
      suggestions: fallbackCities,
      cached: true
    });
  }
});

export default router;
