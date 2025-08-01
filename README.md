# 🌍 Travel Agent Bot

A revolutionary AI-powered travel assistant with Ollama integration, supports multiple languages, and provides a seamless travel planning experience.

![Travel Agent Bot Demo](https://img.shields.io/badge/Status-Live%20Demo-brightgreen)

![Multi-Language](https://img.shields.io/badge/Languages-4%20Supported-orange)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green)

## 🚀 Features

### 🌟 Core Features
- **🎤 Advanced Voice Commands** - Natural language processing with context awareness
- **🌍 Multi-language Support** - English, Hindi, Russian, Japanese with native voice synthesis
- **📱 Progressive Web App** - Installable on any device
- **♿ Complete Accessibility** - Full keyboard navigation and screen reader support
- **📋 Interactive Travel Checklist** - Smart planning tools with progress tracking
- **📊 Real-time Data Display** - Weather, currency, and flight deals

### 🔧 Technical Features

- **🎯 Voice Command Processing** - Intelligent response system with keyword detection
- **📱 Responsive Design** - Works perfectly on all devices and screen sizes
- **🔒 Security** - Input validation, rate limiting, and secure AI integration
- **⚡ Performance** - Optimized for speed and efficiency

## 🎯 Live Demo

**Try the Travel Agent Bot now:** [Live Demo](https://your-demo-link.com)

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Offline Testing](#-offline-testing)
- [Voice Commands](#-voice-commands)
- [Technical Details](#-technical-details)
- [Contributing](#-contributing)
- [License](#-license)

## 🛠️ Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- HTTPS connection (required for AI features)
- Microphone access (for voice features)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travel-agent-bot.git
   cd travel-agent-bot
   ```

2. **Serve the files**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000/chat.html
   ```

### Production Deployment

For production deployment, ensure:
- HTTPS is enabled (required for AI features)
- All files are served from the same domain
- Proper caching headers are set

## 🎮 Usage

### Voice Interaction
1. **Select your language** from the dropdown
2. **Click the microphone button** or press Space
3. **Speak your travel question** naturally
4. **Listen to the response** or read the conversation

### Quick Actions
Use the quick action buttons for common queries:
- 🌍 **Destinations** - Popular travel spots
- ✈️ **Flights** - Booking assistance
- 🏨 **Hotels** - Accommodation help
- 💰 **Budget** - Cost planning
- 🌤️ **Weather** - Climate information
- 📋 **Visa** - Documentation help
- 🛡️ **Insurance** - Travel protection
- 🧳 **Packing** - Preparation tips

### Keyboard Navigation
- **H** - Show voice commands help
- **C** - Toggle travel checklist
- **Space** - Activate voice recognition
- **Tab** - Navigate through elements
- **Enter** - Submit text input

  

## 🎤 Voice Commands

### Basic Commands
- **"Hello"** - Greeting and introduction
- **"Show checklist"** - Open travel checklist
- **"Voice commands"** - Display help menu
- **"Clear conversation"** - Start fresh

### Travel-Specific Commands
- **"Set budget [amount]"** - Save your budget preference
- **"I prefer [style]"** - Set travel style (luxury, budget, adventure, etc.)
- **"Save destination [name]"** - Remember preferred destination
- **"Tell me about [destination]"** - Destination information

### Planning Commands
- **"I need a hotel"** - Hotel recommendations
- **"What's the budget for [trip]?"** - Cost planning
- **"Help me pack for [destination]"** - Packing assistance
- **"Visa requirements for [country]"** - Documentation help

## 🔧 Technical Details

### Architecture
```
travel-agent-bot/
├── chat.html              # Main application
├── travel-agent-data.js   # Response database

└── README.md             # Documentation
```

### Technologies Used
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with animations
- **JavaScript ES6+** - Advanced features and modules
- **Web Speech API** - Voice recognition and synthesis

- **Progressive Web App** - Installable web app

### Browser Support
- ✅ Chrome 66+
- ✅ Firefox 60+
- ✅ Safari 11.1+
- ✅ Edge 79+

### Performance Features

- **Lazy Loading** - Optimized resource loading
- **Minified Assets** - Reduced file sizes
- **Efficient DOM Updates** - Smooth animations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test offline functionality
- Ensure accessibility compliance
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Web Speech API** - For voice recognition and synthesis
- **Font Awesome** - For beautiful icons
- **Inter Font** - For modern typography


## 📞 Support

If you have any questions or need help:
- **Open an issue** on GitHub
- **Check the documentation** in this README
- **Test the offline functionality** using the test page

---

**Made with ❤️ for travelers worldwide**

*This project demonstrates advanced web technologies and accessibility best practices while providing a practical travel planning solution.* 