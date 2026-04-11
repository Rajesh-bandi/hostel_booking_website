import { useState, useRef, useEffect } from 'react';

// Enhanced FAQ Database with categories and intents
const faqDatabase = {
  // Payment Related
  payment: [
    {
      keywords: ['payment', 'pay', 'money', 'fee', 'fees', 'cost', 'price', 'rent', 'amount', 'how much'],
      question: 'How do I pay for my hostel?',
      answer: 'Payment is handled directly with the hostel owner. Once your booking is approved, coordinate with the owner for payment methods. Most hostels accept UPI, bank transfer, or cash payments.',
      intent: null
    },
    {
      keywords: ['refund', 'cancel', 'cancellation', 'money back', 'return money'],
      question: 'Can I get a refund if I cancel?',
      answer: 'Refund policies vary by hostel. Generally:\n• 7+ days before check-in: Full refund\n• 3-7 days: 50% refund\n• Less than 3 days: No refund\n\nContact the hostel owner for their specific policy.',
      intent: null
    },
    {
      keywords: ['deposit', 'security', 'advance', 'caution'],
      question: 'Is there a security deposit?',
      answer: 'Yes, most hostels require a security deposit (typically 1-2 months rent). This is refundable when you check out, minus any damages. The deposit is paid directly to the hostel owner.',
      intent: null
    },
    {
      keywords: ['due', 'deadline', 'when pay', 'payment date', 'rent due'],
      question: 'When is rent due?',
      answer: 'Rent is typically due at the beginning of each month (1st-5th). The exact date depends on your check-in date. Late payment may incur penalties. Check with your hostel owner for specifics.',
      intent: null
    },
    {
      keywords: ['receipt', 'invoice', 'bill', 'proof'],
      question: 'How do I get a payment receipt?',
      answer: 'Request payment receipts directly from your hostel owner. They should provide receipts for all payments including rent, deposits, and any additional charges.',
      intent: null
    },
    {
      keywords: ['my dues', 'my payment', 'pending payment', 'what i owe', 'my rent'],
      question: 'What are my current dues?',
      answer: 'Let me check your payment status...',
      intent: 'my_dues'
    },
    {
      keywords: ['payment method', 'upi', 'bank transfer', 'cash', 'online payment', 'gpay', 'paytm', 'phonepe'],
      question: 'What payment methods are accepted?',
      answer: 'Most hostels accept:\n• UPI (GPay, PhonePe, Paytm)\n• Bank Transfer (NEFT/IMPS)\n• Cash\n• Cheque (some hostels)\n\nConfirm accepted methods with your specific hostel owner.',
      intent: null
    },
    {
      keywords: ['late fee', 'penalty', 'late payment'],
      question: 'What if I pay late?',
      answer: 'Late payment policies vary by hostel but typically:\n• 1-7 days late: ₹100-500 fine\n• 7+ days: Higher penalty + warning\n• Repeated delays: Risk of eviction\n\nAlways pay on time or inform the owner in advance if you\'ll be late.',
      intent: null
    }
  ],
  
  // Booking Related
  booking: [
    {
      keywords: ['book', 'booking', 'reserve', 'reservation', 'how to book', 'make booking'],
      question: 'How do I book a hostel?',
      answer: 'To book a hostel:\n1️⃣ Search for hostels in your area\n2️⃣ View hostel details and rooms\n3️⃣ Click "Book Now" on your preferred room\n4️⃣ Fill booking details\n5️⃣ Wait for owner approval\n\nYou\'ll get notified once approved!',
      intent: null
    },
    {
      keywords: ['my booking', 'my bookings', 'booking history', 'past booking', 'show booking'],
      question: 'Show my bookings',
      answer: 'Let me fetch your bookings...',
      intent: 'my_bookings'
    },
    {
      keywords: ['status', 'pending', 'approved', 'rejected', 'booking status', 'check status'],
      question: 'What is my booking status?',
      answer: 'Checking your booking status...',
      intent: 'my_booking_status'
    },
    {
      keywords: ['cancel booking', 'cancel reservation', 'cancel my'],
      question: 'How do I cancel a booking?',
      answer: 'To cancel a booking:\n1. Go to Dashboard → My Bookings\n2. Find the booking you want to cancel\n3. Click "Cancel Booking"\n4. Confirm cancellation\n\n⚠️ Note: Refund depends on the hostel\'s cancellation policy.',
      intent: null
    },
    {
      keywords: ['check in', 'checkin', 'check-in', 'move in', 'when move'],
      question: 'What is the check-in process?',
      answer: 'Check-in process:\n1. Get booking approved\n2. Contact hostel owner for date/time\n3. Bring ID proof (Aadhar/College ID)\n4. Pay security deposit\n5. Collect room keys\n6. Owner marks you as checked in\n\nTypical check-in time: 10 AM - 6 PM',
      intent: null
    },
    {
      keywords: ['check out', 'checkout', 'check-out', 'move out', 'leave', 'vacate'],
      question: 'How do I check out?',
      answer: 'Check-out process:\n1. Inform owner 15-30 days in advance\n2. Clear all pending dues\n3. Clean and vacate room\n4. Return keys\n5. Room inspection by owner\n6. Get security deposit refund\n\nTypical check-out time: By 12 PM',
      intent: null
    },
    {
      keywords: ['waiting', 'how long', 'approval time', 'when approve'],
      question: 'How long for booking approval?',
      answer: 'Booking approval typically takes 24-48 hours. If you don\'t hear back within 2 days, try contacting the hostel owner directly through their contact details on the hostel page.',
      intent: null
    },
    {
      keywords: ['multiple booking', 'book more', 'another booking'],
      question: 'Can I have multiple bookings?',
      answer: 'You can only have one active booking at a time. If you want to switch hostels, you\'ll need to cancel or check out from your current booking first.',
      intent: null
    }
  ],
  
  // Room Related
  room: [
    {
      keywords: ['room type', 'sharing', 'types of room', 'room options'],
      question: 'What room types are available?',
      answer: 'Available room types:\n\n🛏️ **Single** - Private room (₹8,000-15,000/mo)\n👥 **Double Sharing** - 2 people (₹5,000-8,000/mo)\n👥👥 **Triple Sharing** - 3 people (₹4,000-6,000/mo)\n👥👥👥 **Four+ Sharing** - 4+ people (₹3,000-5,000/mo)\n\nPrices vary by city and amenities.',
      intent: 'room_types'
    },
    {
      keywords: ['amenities', 'facilities', 'wifi', 'ac', 'food', 'mess', 'what included'],
      question: 'What amenities are provided?',
      answer: 'Common hostel amenities:\n✅ WiFi\n✅ Study table & chair\n✅ Cupboard/storage\n✅ Attached/Common bathroom\n✅ 24/7 water & electricity\n\nPremium amenities (some hostels):\n⭐ AC rooms\n⭐ Mess/food\n⭐ Laundry\n⭐ Gym\n⭐ TV room\n\nCheck individual hostel pages for details.',
      intent: null
    },
    {
      keywords: ['change room', 'switch room', 'different room', 'upgrade'],
      question: 'Can I change my room?',
      answer: 'Room changes depend on availability and hostel policy. To request a change:\n1. Contact your hostel owner\n2. Explain the reason\n3. Check available options\n4. Pay price difference (if upgrading)\n\nChanges may not be possible during peak seasons.',
      intent: null
    },
    {
      keywords: ['roommate', 'room mate', 'sharing with', 'who roommate'],
      question: 'How are roommates assigned?',
      answer: 'Roommates are typically assigned based on:\n• Availability at time of booking\n• Gender (separate floors/wings)\n• Course/college (when possible)\n\nYou can request specific arrangements with the owner, but it\'s not guaranteed.',
      intent: null
    },
    {
      keywords: ['available room', 'vacancy', 'room available', 'any room'],
      question: 'What rooms are available?',
      answer: 'Let me check current availability...',
      intent: 'available_rooms'
    },
    {
      keywords: ['furniture', 'bed', 'mattress', 'fan'],
      question: 'What furniture is provided?',
      answer: 'Standard room furniture includes:\n🛏️ Bed with mattress\n📚 Study table\n🪑 Chair\n🚪 Cupboard/wardrobe\n💡 Lights & fan\n🔌 Power outlets\n\nSome rooms may have AC, attached bathroom, or balcony.',
      intent: null
    },
    {
      keywords: ['guest', 'visitor', 'friend visit', 'parents visit'],
      question: 'Can I have visitors?',
      answer: 'Visitor policies vary by hostel:\n• Day visitors: Usually allowed (10 AM - 8 PM)\n• Overnight guests: Mostly not allowed\n• Parents: Usually allowed with prior notice\n\nCheck with your hostel for specific visitor rules.',
      intent: null
    }
  ],
  
  // Hostel Search
  hostel: [
    {
      keywords: ['how many hostel', 'total hostel', 'hostel count'],
      question: 'How many hostels are listed?',
      answer: 'Checking our hostel database...',
      intent: 'hostel_count'
    },
    {
      keywords: ['hostel in', 'hostel near', 'find hostel', 'search hostel', 'looking for hostel'],
      question: 'Find hostels in a city',
      answer: 'Let me search for hostels...',
      intent: 'hostels_in_city'
    },
    {
      keywords: ['cheap', 'affordable', 'budget', 'low price', 'cheapest'],
      question: 'What are the cheapest hostels?',
      answer: 'Finding affordable options...',
      intent: 'cheapest_hostels'
    },
    {
      keywords: ['best', 'top rated', 'highest rated', 'good hostel', 'recommended'],
      question: 'What are the best hostels?',
      answer: 'Finding top-rated hostels...',
      intent: 'top_rated_hostels'
    },
    {
      keywords: ['boys hostel', 'girls hostel', 'male', 'female', 'men', 'women', 'ladies'],
      question: 'Are there gender-specific hostels?',
      answer: 'Yes! We have:\n👨 Boys/Men\'s hostels\n👩 Girls/Women\'s hostels\n👥 Co-ed hostels (separate floors)\n\nUse the filter on search page to find hostels for your gender.',
      intent: null
    },
    {
      keywords: ['near college', 'near university', 'student hostel'],
      question: 'Hostels near colleges?',
      answer: 'Many hostels are located near popular colleges and universities. When searching:\n1. Enter your college area in search\n2. Use the distance feature to see how far each hostel is\n3. Filter by price and amenities\n\nThe search results show distance from your location!',
      intent: null
    }
  ],
  
  // Account Related
  account: [
    {
      keywords: ['register', 'sign up', 'create account', 'new account', 'join'],
      question: 'How do I create an account?',
      answer: 'To create an account:\n1. Click "Register" on homepage\n2. Select "Student"\n3. Enter your details:\n   • Full name\n   • Email\n   • Phone number\n   • Password\n4. Click Register\n\nYou can then search and book hostels!',
      intent: null
    },
    {
      keywords: ['password', 'forgot password', 'reset password', 'change password', 'lost password'],
      question: 'I forgot my password',
      answer: 'To reset your password:\n1. Go to Login page\n2. Click "Forgot Password"\n3. Enter your registered email\n4. Check your email for reset link\n5. Create a new password\n\nIf you don\'t receive the email, contact support.',
      intent: null
    },
    {
      keywords: ['profile', 'update profile', 'edit profile', 'change details', 'my profile'],
      question: 'How do I update my profile?',
      answer: 'To update your profile:\n1. Login to your account\n2. Go to Dashboard\n3. Click on Profile icon → "Profile"\n4. Edit your details\n5. Click "Save Changes"\n\nYou can update name, phone, and profile picture.',
      intent: null
    },
    {
      keywords: ['delete account', 'remove account', 'close account', 'deactivate'],
      question: 'How do I delete my account?',
      answer: 'To delete your account:\n1. Ensure you have no active bookings\n2. Clear all pending dues\n3. Contact support to request deletion\n\n⚠️ This action is permanent and all your data will be removed.',
      intent: null
    },
    {
      keywords: ['login', 'log in', 'sign in', 'cant login', 'login problem'],
      question: 'I can\'t login',
      answer: 'If you\'re having login issues:\n1. Check if email/username is correct\n2. Verify password (case-sensitive)\n3. Clear browser cache\n4. Try "Forgot Password" if needed\n5. Contact support if problem persists\n\nMake sure you\'re using the correct account type (Student/Owner).',
      intent: null
    }
  ],
  
  // Safety & Rules
  safety: [
    {
      keywords: ['safe', 'safety', 'secure', 'security', 'cctv', 'guard'],
      question: 'Are the hostels safe?',
      answer: 'Safety measures at most hostels:\n🔒 24/7 security guard\n📹 CCTV surveillance\n🚪 Secure entry gates\n🆘 Emergency contacts\n🔥 Fire safety equipment\n\n⚠️ Always visit in person before booking and check reviews!',
      intent: null
    },
    {
      keywords: ['rules', 'hostel rules', 'regulations', 'guidelines', 'policy'],
      question: 'What are the hostel rules?',
      answer: 'Common hostel rules:\n🚭 No smoking/alcohol\n🔇 Quiet hours (10 PM - 7 AM)\n🚪 Entry timing restrictions\n🧹 Keep room & common areas clean\n🎫 Carry ID always\n👥 Visitor restrictions\n⚡ No high-power appliances\n\nSpecific rules vary by hostel.',
      intent: null
    },
    {
      keywords: ['complaint', 'issue', 'problem', 'report', 'harassment'],
      question: 'How do I report an issue?',
      answer: 'To report an issue:\n1. Contact hostel owner directly first\n2. If unresolved, use our complaint system\n3. For emergencies, call local authorities\n\nWe take safety seriously and will investigate all reports.',
      intent: null
    },
    {
      keywords: ['emergency', 'urgent', 'help', 'danger'],
      question: 'What to do in emergency?',
      answer: '🚨 In case of emergency:\n1. Call emergency services: 112\n2. Contact hostel security\n3. Inform hostel owner\n4. Report to platform\n\nImportant numbers:\n• Police: 100\n• Fire: 101\n• Ambulance: 102\n• Women helpline: 1091',
      intent: null
    }
  ],
  
  // General
  general: [
    {
      keywords: ['contact', 'support', 'help', 'customer service', 'phone', 'email support'],
      question: 'How do I contact support?',
      answer: 'Contact options:\n💬 Use this chatbot for quick answers\n📧 Email: support@hostelmanager.com\n📞 For hostel-specific issues, contact the owner directly\n\nWe typically respond within 24 hours.',
      intent: null
    },
    {
      keywords: ['owner', 'hostel owner', 'contact owner', 'talk to owner', 'owner number'],
      question: 'How do I contact the hostel owner?',
      answer: 'To contact the owner:\n1. Go to the hostel page\n2. Find "Contact Owner" section\n3. You\'ll see their phone/email\n\nYou can also communicate through the booking system after making a reservation.',
      intent: null
    },
    {
      keywords: ['review', 'rating', 'feedback', 'rate hostel'],
      question: 'How do I leave a review?',
      answer: 'To leave a review:\n1. You must have stayed at the hostel\n2. Go to the hostel page\n3. Scroll to Reviews section\n4. Click "Write Review"\n5. Rate (1-5 stars) and add comments\n\nHonest reviews help other students!',
      intent: null
    },
    {
      keywords: ['app', 'mobile app', 'download app', 'android', 'ios'],
      question: 'Is there a mobile app?',
      answer: 'Currently, we\'re a web-based platform that works great on mobile browsers. A dedicated mobile app is coming soon! 📱\n\nTip: Add our website to your home screen for app-like experience.',
      intent: null
    },
    {
      keywords: ['stats', 'statistics', 'platform info', 'about platform'],
      question: 'Tell me about this platform',
      answer: 'Let me get the latest statistics...',
      intent: 'platform_stats'
    },
    {
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon'],
      question: 'Greeting',
      answer: 'Hello! 👋 I\'m your Hostel Assistant. I can help you with:\n• 🏠 Finding hostels\n• 📋 Booking questions\n• 💰 Payment info\n• 📊 Your booking status\n\nWhat would you like to know?',
      intent: null
    },
    {
      keywords: ['thank', 'thanks', 'thank you', 'thx', 'ty'],
      question: 'Thanks',
      answer: 'You\'re welcome! 😊 Is there anything else I can help you with?',
      intent: null
    },
    {
      keywords: ['bye', 'goodbye', 'see you', 'exit', 'close'],
      question: 'Goodbye',
      answer: 'Goodbye! 👋 Have a great day! Feel free to chat anytime you have questions about hostels, bookings, or payments.',
      intent: null
    },
    {
      keywords: ['who are you', 'what are you', 'your name', 'chatbot'],
      question: 'Who are you?',
      answer: 'I\'m the Hostel Assistant chatbot! 🤖 I can help you with:\n• Finding and comparing hostels\n• Booking information\n• Payment queries\n• Checking your booking status\n• General hostel rules and safety\n\nAsk me anything!',
      intent: null
    }
  ]
};

// Quick suggestion buttons
const quickSuggestions = [
  { label: '📋 My Bookings', query: 'Show my bookings' },
  { label: '🔍 Find Hostels', query: 'How many hostels are there?' },
  { label: '💰 Payment Info', query: 'How do I pay?' },
  { label: '⭐ Top Rated', query: 'Best hostels' },
  { label: '🛏️ Room Types', query: 'What room types are available?' },
  { label: '❓ Help', query: 'What can you help with?' }
];

function findBestMatch(userInput) {
  const input = userInput.toLowerCase().trim();
  let bestMatch = null;
  let maxScore = 0;

  for (const category of Object.values(faqDatabase)) {
    for (const faq of category) {
      let score = 0;
      for (const keyword of faq.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          score += keyword.length;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = faq;
      }
    }
  }

  return bestMatch;
}

// Extract city from query
function extractCity(query) {
  const cityPatterns = [
    /hostel(?:s)? (?:in|near|at|around) ([a-zA-Z\s]+)/i,
    /(?:in|near|at|around) ([a-zA-Z\s]+) (?:hostel|area|city)/i,
    /find (?:hostel|hostels) ([a-zA-Z\s]+)/i
  ];
  
  for (const pattern of cityPatterns) {
    const match = query.match(pattern);
    if (match) return match[1].trim();
  }
  return null;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi there! 👋 I\'m your Hostel Assistant. I can help you with hostel search, bookings, payments, and more. What would you like to know?',
      time: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const queryDatabase = async (intent, query = {}) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/chatbot/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` })
        },
        body: JSON.stringify({ intent, query })
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: 'Sorry, I couldn\'t fetch that information. Please try again.' };
    }
  };

  const formatDatabaseResponse = (result, intent) => {
    if (!result.success && !result.message) {
      return 'Sorry, I encountered an error. Please try again.';
    }

    let response = result.message;

    if (result.data) {
      switch (intent) {
        case 'my_bookings':
          if (Array.isArray(result.data)) {
            response += '\n\n';
            result.data.forEach((b, i) => {
              response += `${i + 1}. **${b.hostel}** - Room ${b.room}\n   Status: ${b.status} | ₹${b.price}/month\n\n`;
            });
          }
          break;

        case 'hostels_in_city':
        case 'cheapest_hostels':
        case 'top_rated_hostels':
          if (Array.isArray(result.data)) {
            response += '\n\n';
            result.data.forEach((h, i) => {
              response += `${i + 1}. **${h.name}** (${h.city})\n`;
              if (h.startingFrom) response += `   Starting ₹${h.startingFrom}/month\n`;
              if (h.rating) response += `   ⭐ ${h.rating}`;
              if (h.reviews) response += ` (${h.reviews} reviews)`;
              response += '\n\n';
            });
          }
          break;

        case 'available_rooms':
          if (Array.isArray(result.data)) {
            response += '\n\n';
            result.data.forEach(r => {
              response += `• **${r.type}**: ${r.availableRooms} rooms (avg ₹${r.avgPrice}/month)\n`;
            });
          }
          break;

        case 'hostel_info':
          const h = result.data;
          response += `\n\n📍 ${h.address}\n💰 ${h.priceRange}\n⭐ Rating: ${h.rating}\n🏷️ Type: ${h.type}\n✅ Amenities: ${h.amenities.join(', ')}`;
          break;
      }
    }

    return response;
  };

  const handleSend = async (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text.trim(),
      time: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Find matching FAQ
    const match = findBestMatch(text);
    let botResponse;

    if (match && match.intent) {
      // Query database for dynamic data
      const query = {};
      if (match.intent === 'hostels_in_city') {
        query.city = extractCity(text);
      }
      
      const result = await queryDatabase(match.intent, query);
      botResponse = {
        type: 'bot',
        text: formatDatabaseResponse(result, match.intent),
        time: new Date()
      };
    } else if (match) {
      // Static FAQ answer
      botResponse = {
        type: 'bot',
        text: match.answer,
        time: new Date()
      };
    } else {
      botResponse = {
        type: 'bot',
        text: "I'm not sure about that. I can help you with:\n\n• 🏠 Finding hostels\n• 📋 Booking information\n• 💰 Payment queries\n• 🛏️ Room details\n• 🔒 Safety & rules\n\nTry asking something specific or use the quick buttons below!",
        time: new Date()
      };
    }

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 500 + Math.random() * 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Format message text with markdown-like formatting
  const formatMessageText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <>
      <style>{`
        .chatbot-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: var(--font-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
        }

        .chatbot-toggle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          transition: all 0.3s ease;
          position: relative;
        }

        .chatbot-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(99, 102, 241, 0.5);
        }

        .chatbot-toggle-icon {
          font-size: 28px;
        }

        .chatbot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .chatbot-window {
          position: absolute;
          bottom: 76px;
          right: 0;
          width: 400px;
          height: 560px;
          background: var(--bg-primary, #ffffff);
          border-radius: 20px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease;
          border: 1px solid var(--border-default, #e5e7eb);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chatbot-header {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chatbot-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chatbot-avatar {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .chatbot-name {
          font-weight: 600;
          font-size: 16px;
        }

        .chatbot-status {
          font-size: 12px;
          opacity: 0.9;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          50% { opacity: 0.5; }
        }

        .chatbot-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: background 0.2s;
        }

        .chatbot-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: var(--bg-secondary, #f9fafb);
        }

        .message {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.6;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .message.bot {
          background: var(--bg-primary, #ffffff);
          color: var(--text-primary, #1f2937);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .message.user {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .message-time {
          font-size: 10px;
          opacity: 0.6;
          margin-top: 6px;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
          background: var(--bg-primary, #ffffff);
          border-radius: 18px;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          background: #9ca3af;
          border-radius: 50%;
          animation: bounce 1.4s infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
        }

        .quick-suggestions {
          padding: 12px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          background: var(--bg-primary, #ffffff);
          border-top: 1px solid var(--border-default, #e5e7eb);
        }

        .quick-btn {
          padding: 8px 14px;
          background: var(--bg-secondary, #f3f4f6);
          border: 1px solid var(--border-default, #e5e7eb);
          border-radius: 20px;
          font-size: 13px;
          color: var(--text-secondary, #6b7280);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .quick-btn:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-color: transparent;
          transform: translateY(-1px);
        }

        .chatbot-input-area {
          padding: 12px 16px;
          background: var(--bg-primary, #ffffff);
          border-top: 1px solid var(--border-default, #e5e7eb);
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .chatbot-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border-default, #e5e7eb);
          border-radius: 24px;
          font-size: 14px;
          background: var(--bg-secondary, #f9fafb);
          color: var(--text-primary, #1f2937);
          outline: none;
          transition: border-color 0.2s;
        }

        .chatbot-input:focus {
          border-color: #6366f1;
        }

        .chatbot-input::placeholder {
          color: var(--text-muted, #9ca3af);
        }

        .chatbot-send {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
        }

        .chatbot-send:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .chatbot-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .chatbot-container {
            bottom: 16px;
            right: 16px;
          }

          .chatbot-window {
            width: calc(100vw - 32px);
            height: 75vh;
            bottom: 70px;
            right: 0;
          }

          .chatbot-toggle {
            width: 56px;
            height: 56px;
          }

          .quick-suggestions {
            padding: 10px;
          }

          .quick-btn {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
      `}</style>

      <div className="chatbot-container">
        {isOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">🤖</div>
                <div>
                  <div className="chatbot-name">Hostel Assistant</div>
                  <div className="chatbot-status">
                    <span className="status-dot"></span>
                    Online • Ask me anything
                  </div>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.type}`}>
                  <div dangerouslySetInnerHTML={{ __html: formatMessageText(msg.text) }} />
                  <div className="message-time">{formatTime(msg.time)}</div>
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="quick-suggestions">
              {quickSuggestions.map((suggestion, idx) => (
                <button 
                  key={idx} 
                  className="quick-btn"
                  onClick={() => handleSend(suggestion.query)}
                >
                  {suggestion.label}
                </button>
              ))}
            </div>

            <div className="chatbot-input-area">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="chatbot-send" 
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
              >
                ➤
              </button>
            </div>
          </div>
        )}

        <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <span className="chatbot-pulse"></span>}
          <span className="chatbot-toggle-icon">{isOpen ? '✕' : '💬'}</span>
        </button>
      </div>
    </>
  );
}

