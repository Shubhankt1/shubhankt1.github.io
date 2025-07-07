# shubhanktyagi.github.io

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, scroll-based effects, and a mobile-first design.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations
- **Smooth Animations**: CSS animations and scroll-based effects
- **Interactive Elements**: Typing animation, floating elements, and scroll-triggered animations
- **Glassmorphism UI**: Modern design with backdrop blur effects
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Local Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone your existing GitHub.io repository**:

   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Backup existing content** (if any):

   ```bash
   mkdir backup
   mv * backup/ 2>/dev/null || true
   ```

3. **Copy all the project files** from the artifacts above into your repository folder:

   - `package.json`
   - `vite.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `index.html`
   - `.eslintrc.cjs`
   - `.gitignore`
   - `README.md`
   - Create `src/` folder with all component files

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Update Vite configuration**:
   Edit `vite.config.js` and replace `'your-repo-name'` with your actual GitHub repository name:

   ```javascript
   base: '/your-actual-repo-name/', // e.g., '/johndoe.github.io/'
   ```

6. **Start development server**:

   ```bash
   npm run dev
   ```

7. **Open in browser**: Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component with mobile menu
│   │   ├── HeroSection.jsx     # Hero with typing animation
│   │   ├── AboutMeSection.jsx   # About section with scroll effects
│   │   └── FloatingElements.jsx # Background floating animations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and Tailwind imports
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🎨 Customization

### Colors and Styling

- Modify `tailwind.config.js` for custom colors, fonts, and animations
- Update `src/index.css` for global styles
- Customize component styles in individual JSX files

### Content

- Update personal information in `HeroSection.jsx`
- Modify the about section content in `AboutMeSection.jsx`
- Add new sections by creating additional components

### Animation Timing

- Adjust scroll thresholds in `App.jsx`
- Modify animation durations in Tailwind classes
- Customize typing speed in `HeroSection.jsx`

## 🚀 Deployment to GitHub Pages

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

This will automatically build your project and push it to the `gh-pages` branch.

### Alternative Manual Deployment

1. Build the project: `npm run build`
2. Copy contents of `dist/` folder to your repository root
3. Commit and push to main branch
4. Enable GitHub Pages in repository settings

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🔧 Key Technologies

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **gh-pages**: GitHub Pages deployment

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

Built with ❤️ by Shubhank Tyagi
