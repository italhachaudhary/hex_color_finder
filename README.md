# 🎨 Hex Color Finder

A modern, interactive web application that allows users to explore and visualize hex color codes with stunning visual effects. Built with HTML5, CSS3, JavaScript, and enhanced with Tailwind CSS, this tool features a beautiful glass morphism design with animated gradients and responsive layout.

![Hex Color Finder Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎯 Core Functionality
- **Instant Color Preview** - Real-time visualization of hex color codes
- **Multiple Format Support** - Input colors with or without `#` symbol
- **Color Format Conversion** - Automatic RGB and HSL conversion display
- **Copy to Clipboard** - One-click copying of color values
- **Preset Colors** - Quick access to 8 popular color options
- **Input Validation** - Smart error handling for invalid hex codes

### 🎨 Modern Design
- **Glass Morphism** - Beautiful backdrop blur effects
- **Animated Gradients** - Dynamic background color shifting
- **Smooth Animations** - Professional hover and transition effects
- **Responsive Layout** - Perfect on desktop, tablet, and mobile
- **Interactive Elements** - Engaging hover states and click feedback
- **Professional Typography** - Clean, readable Inter font family

### 🚀 Technical Highlights
- **Vanilla JavaScript** - No external dependencies for core functionality
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Modern CSS** - CSS Grid, Flexbox, and custom animations
- **Accessibility** - Keyboard navigation and screen reader friendly
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure and semantics | Latest |
| **CSS3** | Styling and animations | Latest |
| **JavaScript** | Interactive functionality | ES6+ |
| **Tailwind CSS** | Utility-first styling | 3.x |
| **Inter Font** | Modern typography | Google Fonts |

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/italhachaudhary/hex-color-finder.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd hex-color-finder
   ```

3. **Open in your browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server for development
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Project Structure
```
hex-color-finder/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── screenshots/        # Project screenshots
    ├── desktop-view.png
    └── mobile-view.png
```

## 💻 Usage

### Basic Usage
1. **Enter a hex color code** in the input field (e.g., `#FF5733` or `FF5733`)
2. **Click "Show Color"** or press Enter
3. **View the color preview** and format conversions
4. **Click any color value** to copy it to clipboard
5. **Try preset colors** for quick exploration

### Supported Formats
- **6-character hex**: `#FF5733`
- **3-character hex**: `#F73`
- **Without hash symbol**: `FF5733` or `F73`

### Color Information Displayed
- **Hex Code**: Original hexadecimal format
- **RGB Values**: Red, Green, Blue components
- **HSL Values**: Hue, Saturation, Lightness

## 🎨 Customization

### Adding New Preset Colors
Edit the preset colors section in `index.html`:
```html
<div class="preset-color" data-color="#YOUR_COLOR" style="background-color: #YOUR_COLOR">
  <span>#YOUR_COLOR</span>
</div>
```

### Modifying Animations
Customize animations in the Tailwind config section:
```javascript
tailwind.config = {
  theme: {
    extend: {
      animation: {
        'your-animation': 'your-keyframe 2s ease infinite',
      }
    }
  }
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and formatting
- Test on multiple browsers and devices
- Ensure accessibility standards are met
- Add comments for complex functionality

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Mobile | ✅ iOS Safari, Chrome Mobile |

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ital Hachaudhary**
- GitHub: [@italhachaudhary](https://github.com/italhachaudhary)
- Portfolio: [Your Portfolio URL] *(Add your portfolio link)*
- LinkedIn: [Your LinkedIn] *(Add your LinkedIn)*

## 🙏 Acknowledgments

- **Tailwind CSS** - For the amazing utility-first CSS framework
- **Google Fonts** - For the beautiful Inter font family
- **Community** - For inspiration and feedback

## 🔮 Future Enhancements

- [ ] Color palette generator
- [ ] Color harmony suggestions
- [ ] Export functionality (CSS, JSON, etc.)
- [ ] Color accessibility checker
- [ ] Dark/Light theme toggle
- [ ] Color history/favorites
- [ ] Gradient generator
- [ ] Color blindness simulator

---

**Made with ❤️ by [Ital Hachaudhary](https://github.com/italhachaudhary)**

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*

