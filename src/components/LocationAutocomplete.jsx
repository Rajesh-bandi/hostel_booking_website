import { useState, useEffect } from 'react';
import { locationAPI } from '../services/api';

export default function LocationAutocomplete({ onSelect, placeholder = 'Enter city or location' }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        setShowDropdown(false);
        return;
      }

      setIsLoading(true);
      const result = await locationAPI.autocomplete(query);
      setIsLoading(false);

      if (result.success) {
        setSuggestions(result.suggestions);
        setShowDropdown(result.suggestions.length > 0);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (location) => {
    setQuery(location.displayName || location.city);
    setShowDropdown(false);
    onSelect(location);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <style>{`
        .autocomplete-wrapper {
          position: relative;
          width: 100%;
        }

        .autocomplete-input {
          width: 100%;
          padding: 1rem 1.375rem;
          border: 1.5px solid var(--border, #e5e5e5);
          border-radius: 0.875rem;
          font-size: 0.9375rem;
          background: var(--bg-secondary, #fafafa);
          color: var(--text, #0a0a0a);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box;
          letter-spacing: -0.01em;
        }

        .autocomplete-input:focus {
          outline: none;
          border-color: #4f46e5;
          background: var(--bg, #fff);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .suggestions-dropdown {
          position: absolute;
          top: calc(100% + 0.625rem);
          left: 0;
          right: 0;
          background: var(--bg, #fff);
          border: 1.5px solid var(--border, #e5e5e5);
          border-radius: 0.875rem;
          max-height: 300px;
          overflow-y: auto;
          z-index: 100;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          animation: slideDown 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .suggestion-item {
          padding: 1rem 1.375rem;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1.5px solid var(--border, #e5e5e5);
          display: flex;
          align-items: center;
          gap: 0.875rem;
          color: var(--text, #0a0a0a);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .suggestion-item:last-child {
          border-bottom: none;
        }

        .suggestion-item:hover {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.06), rgba(6, 182, 212, 0.06));
        }

        .suggestion-icon {
          font-size: 1.125rem;
          opacity: 0.65;
        }

        .loading-spinner {
          padding: 1.125rem;
          text-align: center;
          color: var(--text-secondary, #525252);
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .suggestions-dropdown::-webkit-scrollbar {
          width: 8px;
        }

        .suggestions-dropdown::-webkit-scrollbar-track {
          background: var(--bg-secondary, #fafafa);
          border-radius: 0 0.875rem 0.875rem 0;
        }

        .suggestions-dropdown::-webkit-scrollbar-thumb {
          background: var(--border, #e5e5e5);
          border-radius: 4px;
          transition: background 0.3s;
        }

        .suggestions-dropdown::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }
      `}</style>

      <input
        type="text"
        className="autocomplete-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        onFocus={() => {
          if (suggestions.length > 0 && query.length >= 2) {
            setShowDropdown(true);
          }
        }}
      />

      {showDropdown && (
        <div className="suggestions-dropdown">
          {isLoading ? (
            <div className="loading-spinner">Searching...</div>
          ) : (
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSelect(suggestion)}
              >
                <span className="suggestion-icon">📍</span>
                <span>{suggestion.displayName || `${suggestion.city}, ${suggestion.state}`}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
