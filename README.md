# Priscilla Jospin G - Portfolio

A modern, responsive portfolio website showcasing my expertise as a Machine Learning Engineer and Full Stack Developer. Built with cutting-edge technologies and featuring smooth animations, this portfolio highlights my projects, skills, and professional journey.

![Portfolio Preview](./public/pg.png)

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safe**: Full TypeScript implementation
- **Interactive Elements**: Framer Motion animations and transitions

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Development Tools

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Libraries

- **React Icons** - Icon library
- **EmailJS** - Contact form functionality

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🏃‍♀️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Technical skills
│   ├── Projects.tsx    # Project showcase
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Site footer
│   ├── Navbar.tsx      # Navigation bar
│   ├── Verse.tsx       # Testimonials/Verse section
│   └── ScrollToTop.tsx # Scroll to top button
├── assets/             # Static assets (images, icons)
├── test/               # Test setup and configurations
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 📁 Featured Projects

### 1. IEEE Paper Generator

A web application for generating and formatting IEEE papers with AI assistance.

- **Tech**: React, Node.js, Tailwind CSS, OpenAI
- **GitHub**: [View Repository](https://github.com/PriscillajospinG/backend-research-paper-agent/tree/test_backend)

### 2. EV Port Analyzer

Real-time AI-powered EV charging analytics and demand prediction system for optimizing charger deployment and reducing wait times.

- **Tech**: YOLOv11, Python, FastAPI
- **GitHub**: [View Repository](https://github.com/PriscillajospinG/bi3-ev-charging-port)

### 3. AI-Powered WAF using SecureBERT

Next-generation Web Application Firewall using Transformer-based Deep Learning for real-time detection of zero-day web attacks.

- **Tech**: PyTorch, Transformers, SecureBERT, FastAPI, Docker, Nginx
- **Key Features**: 95%+ detection rate, <50ms latency, self-learning capabilities
- **GitHub**: [View Repository](https://github.com/PriscillajospinG/transformer-waf-test)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and configure build settings
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Set publish directory: `dist`

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration (for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

- Update personal information in component files
- Modify colors and styling in `tailwind.config.js`
- Add new projects in `Projects.tsx`
- Update skills in `Skills.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial load with lazy loading

## 🤝 Contributing

While this is a personal portfolio, suggestions for improvements are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: priscilla.jospin@example.com
- **LinkedIn**: [Priscilla Jospin G](https://linkedin.com/in/priscillajospin)
- **GitHub**: [priscillajospin](https://github.com/priscillajospin)

---

Built with ❤️ by Priscilla Jospin G
