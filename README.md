# Anita Idemudia - Portfolio Website

A modern, minimalist portfolio website for Anita Idemudia, showcasing skills, projects, and contact information. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern & Minimalist Design** - Clean, professional interface
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Fully Responsive** - Works seamlessly on all devices
- **Working Contact Form** - Integrated with EmailJS (setup required)
- **Performance Optimized** - Fast loading times with Vite
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **EmailJS** - Email service integration
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**

   ```bash
   cd "Portfolio Annietah"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📧 Contact Form Setup (EmailJS)

The contact form works out of the box using a mailto fallback. To enable direct form submission via EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
6. Restart your dev server

**Note:** Without EmailJS setup, the form will open the user's email client with pre-filled information, which works perfectly fine!

### Alternative Options:

- Use your own backend API
- Use services like Formspree or Netlify Forms
- Keep the mailto fallback (already implemented)

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  // ... other colors
}
```

### Content

- **Personal Info**: Update `src/components/Hero.jsx` and `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Projects**: Modify `src/components/Projects.jsx`
- **Social Links**: Update throughout components or create a constants file

## 📱 Sections

1. **Hero** - Introduction and main CTA
2. **About** - Personal background and story
3. **Skills** - Technical and soft skills organized by category
4. **Projects** - Portfolio of recent work
5. **Contact** - Contact form and social links
6. **Footer** - Additional links and credits

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Connect repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Anita Idemudia**

- LinkedIn: [@anita-idemudia-va-dev](https://www.linkedin.com/in/anita-idemudia-va-dev/)
- GitHub: [@Anita9771](https://github.com/Anita9771/)
- Twitter: [@Annietah_IE](https://twitter.com/Annietah_IE)
- Email: ieghonghon@gmail.com
