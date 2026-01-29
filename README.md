# Shubhank Tyagi - Portfolio Website

A modern, sleek portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, interactive components, and a responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: 
  - Animated hero section with rotating role titles
  - Flip card education diplomas (hover to flip)
  - Timeline-based experience section
  - Interactive skill cards with hover effects
  - Project showcase with smooth transitions
- **Performance Optimized**: Static site generation for lightning-fast loads
- **Modern UI/UX**: Glass morphism effects, gradient text, and smooth scrolling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.17 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

### Option 1: Automated Setup (Recommended)

Run the setup script to automatically install all dependencies:

```bash
chmod +x setup-dev.sh
./setup-dev.sh
```

### Option 2: Manual Setup

1. Clone the repository:
```bash
git clone https://github.com/Shubhankt1/shubhankt1.github.io.git
cd shubhankt1.github.io
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-reload as you make changes to the source files.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate static files in the `out/` directory that can be deployed to any static hosting service.

## 📦 Project Structure

```
shubhankt1.github.io/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Skills.tsx        # Skills section
│   ├── Education.tsx     # Education section (flip cards)
│   ├── Experience.tsx    # Experience timeline
│   ├── Projects.tsx      # Projects showcase
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies

```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js` and `app/globals.css`:

- Primary: `#00ff88` (Green)
- Secondary: `#0066ff` (Blue)
- Accent: `#ff0066` (Pink)
- Background Primary: `#0a0a0f` (Dark)
- Background Secondary: `#1a1a2e` (Dark Blue)

### Content

To update content, edit the respective component files in the `components/` directory:
- Personal info: `components/Hero.tsx`
- Skills: `components/Skills.tsx`
- Education: `components/Education.tsx`
- Experience: `components/Experience.tsx`
- Projects: `components/Projects.tsx`
- Contact: `components/Contact.tsx`

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The static files in the `out/` directory are ready for deployment

3. For GitHub Pages, push the `out/` directory contents to the `gh-pages` branch or configure GitHub Actions for automatic deployment

### Other Platforms

The built static site in the `out/` directory can be deployed to:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Any static hosting service

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities**: [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint

## 🤝 Contributing

If you'd like to contribute, please fork the repository and create a pull request with your changes.

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 📧 Contact

- **Email**: tyagi.shub@northeastern.edu
- **LinkedIn**: [linkedin.com/in/shubhanktyagi](https://linkedin.com/in/shubhanktyagi)
- **GitHub**: [github.com/Shubhankt1](https://github.com/Shubhankt1)

---

Built with ❤️ by Shubhank Tyagi