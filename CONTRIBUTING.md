# 🤝 Contributing to Travel Agent Bot

Thank you for your interest in contributing to the Travel Agent Bot! This document provides guidelines and information for contributors.

## 🎯 How to Contribute

### 🐛 Reporting Bugs

1. **Check existing issues** - Search for similar issues before creating a new one
2. **Create a detailed bug report** including:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

### 💡 Suggesting Features

1. **Check existing feature requests** - Search for similar suggestions
2. **Create a detailed feature request** including:
   - Clear description of the feature
   - Use cases and benefits
   - Implementation suggestions (if any)
   - Priority level

### 🔧 Code Contributions

#### Prerequisites
- Basic knowledge of HTML, CSS, JavaScript
- Understanding of Web APIs (Speech API, AI Integration)
- Familiarity with accessibility standards

#### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/travel-agent-bot.git
   cd travel-agent-bot
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Test your changes**
   ```bash
   # Start local server
   npm start
   
   # Test offline functionality
   # Disconnect internet and refresh page
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: brief description of changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

- **HTML**: Use semantic elements, proper accessibility attributes
- **CSS**: Follow BEM methodology, use CSS custom properties
- **JavaScript**: Use ES6+ features, meaningful variable names
- **Comments**: Add comments for complex logic and functions

### Accessibility Standards

- **WCAG 2.1 AA compliance** - All features must be accessible
- **Keyboard navigation** - All interactive elements must be keyboard accessible
- **Screen reader support** - Proper ARIA labels and roles
- **Color contrast** - Minimum 4.5:1 ratio for normal text

### Testing Requirements

- **Cross-browser testing** - Chrome, Firefox, Safari, Edge
- **Mobile responsiveness** - Test on various screen sizes
- **Offline functionality** - Test with internet disconnected
- **Voice features** - Test with different microphones and accents
- **Accessibility testing** - Use screen readers and keyboard navigation

### Performance Guidelines


- **Voice API efficiency** - Minimize API calls
- **DOM manipulation** - Use efficient methods
- **Memory management** - Avoid memory leaks

## 🎯 Areas for Contribution

### High Priority
- **Additional languages** - Add more language support
- **Enhanced voice commands** - More natural language processing
- **Real API integration** - Weather, currency, booking APIs
- **Advanced accessibility** - More screen reader features

### Medium Priority
- **UI/UX improvements** - Better visual design
- **Performance optimization** - Faster loading and response
- **Testing framework** - Automated testing setup
- **Documentation** - Better guides and examples

### Low Priority
- **Additional features** - New travel planning tools
- **Customization options** - User preferences
- **Analytics** - Usage tracking (privacy-focused)
- **Social features** - Sharing and collaboration

## 🚀 Pull Request Process

1. **Update documentation** - Update README.md if needed
2. **Add tests** - Include tests for new features
3. **Check accessibility** - Ensure WCAG compliance
4. **Test offline functionality** - Verify offline features work
5. **Update version** - Increment version in package.json
6. **Write clear description** - Explain what and why

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Accessibility improvement

## Testing
- [ ] Tested on multiple browsers
- [ ] Tested offline functionality
- [ ] Tested accessibility features
- [ ] Tested voice features

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 📞 Getting Help

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and ideas
- **Documentation** - Check README.md first
- **Code of Conduct** - Be respectful and inclusive

## 🏆 Recognition

Contributors will be recognized in:
- **README.md** - Contributors section
- **GitHub** - Contributor graph
- **Releases** - Release notes

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to making travel planning more accessible and enjoyable! 🌍✈️** 