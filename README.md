# Vetly Landing Page

A pixel-perfect, responsive landing page for Vetly - the comprehensive pet care app. Built with modern web technologies and optimized for performance, accessibility, and user experience.

## 🚀 Technologies

- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Inter font** for modern typography
- **SVG icons** for scalable graphics
- **CSS animations** for smooth interactions

## 🎨 Design System

### Colors
- **Pink**: `#FF6B9D` (primary brand color)
- **Orange**: `#FF9F40` (secondary brand color)
- **Cream**: `#FFF7ED` (light background)
- **Ink**: `#111827` (primary text)
- **Muted**: `#6B7280` (secondary text)

### Typography
- **Hero**: 44px/32px (desktop/mobile)
- **H2**: 32px/28px (desktop/mobile)
- **H3**: 22px/20px (desktop/mobile)
- **Body**: 16px/15px (desktop/mobile)
- **Font**: Inter with system fallbacks

### Spacing
- **Container**: Max-width 1100px
- **Sections**: 64px/80px/96px padding (mobile/tablet/desktop)
- **Grid**: 8px base unit system

## 📱 Responsive Design

- **Mobile**: ≤640px - Single column layout, stack elements
- **Tablet**: 641-1023px - 2-column grids, hamburger menu
- **Desktop**: ≥1024px - Full 3-column grids, horizontal navigation

## 🏗️ Component Architecture

```
src/
├── components/
│   ├── Header.tsx           # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section with parallax animation
│   ├── PillList.tsx         # Feature cards with icons
│   ├── TrustBlock.tsx       # Expert testimonial (orange section)
│   ├── Features.tsx         # 6-column feature grid with CTA
│   ├── BenefitsStrip.tsx    # Pink section with checkmark badges
│   ├── CommunityMarquee.tsx # Infinite scroll pet avatars
│   ├── StorePitch.tsx       # App store download section
│   ├── Reviews.tsx          # Customer testimonials carousel
│   └── Footer.tsx           # Site footer with links
├── App.tsx                  # Main app component
├── index.css               # Global styles and Tailwind
└── main.tsx                # App entry point
```

## ✨ Features

### Animations & Interactions
- **Parallax scrolling** in hero section (respects `prefers-reduced-motion`)
- **Scroll-triggered animations** using Intersection Observer
- **Marquee animation** for community avatars with hover pause
- **Hover effects** with scale transforms and shadow changes
- **Smooth scrolling** throughout the page

### Accessibility
- **Semantic HTML** with proper heading hierarchy
- **ARIA labels** for interactive elements
- **Focus management** with visible focus indicators
- **Color contrast** ratio ≥4.5:1 throughout
- **Screen reader friendly** navigation and content
- **Reduced motion** support for users with vestibular disorders

### Performance
- **Optimized images** with proper sizing and lazy loading
- **CSS-only animations** where possible
- **Efficient event listeners** with proper cleanup
- **Minimal bundle size** with tree-shaking
- **Fast loading** with Vite's optimized builds

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run serve
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run serve` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Replacing Images/Icons

1. **Dog illustrations**: Update SVG paths in components for different dog breeds
2. **Icons**: Replace inline SVG icons in respective components
3. **Avatars**: Update the `generateDogAvatar` function in `CommunityMarquee.tsx`

### Color Scheme

Update colors in `tailwind.config.js`:

```js
colors: {
  vetly: {
    pink: '#YOUR_PRIMARY_COLOR',
    orange: '#YOUR_SECONDARY_COLOR',
    // ... other colors
  }
}
```

### Typography

Modify font sizes in `tailwind.config.js`:

```js
fontSize: {
  'hero-desktop': ['YOUR_SIZE', { lineHeight: 'YOUR_LINE_HEIGHT' }],
  // ... other sizes
}
```

## 🚀 Deployment

### Static Hosting (Recommended)

The app builds to static files and can be deployed to:

- **Vercel**: Connect your repo for automatic deployments
- **Netlify**: Drag & drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the built-in Actions workflow
- **Cloudflare Pages**: Connect repository for CI/CD

### Build Configuration

For different deployment environments, update the base path in `vite.config.ts`:

```js
export default defineConfig({
  base: '/your-subdirectory/', // For subdirectory deployments
  // ... other config
})
```

## 📊 Performance Targets

- **Lighthouse Performance**: ≥90
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s

## 🔧 Browser Support

- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 88+
- **Graceful degradation** for older browsers without CSS Grid/Flexbox

## 📝 Content Management

All text content is defined within components. To update:

1. **Navigation**: Edit `Header.tsx` - `navItems` array
2. **Hero text**: Update `Hero.tsx` heading and description
3. **Features**: Modify `features` arrays in respective components
4. **Reviews**: Update `reviews` array in `Reviews.tsx`

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**: Check if `prefers-reduced-motion` is enabled
2. **Layout shifts**: Ensure proper dimensions for images and SVGs
3. **TypeScript errors**: Run `npm run build` to catch type issues
4. **Styling issues**: Clear browser cache and restart dev server

### Development Tips

- Use React DevTools for component debugging
- Enable Tailwind CSS IntelliSense in your editor
- Use browser DevTools for responsive testing
- Test with keyboard navigation for accessibility

## 📄 License

MIT License - feel free to use this code for your own projects.

---

Built with ❤️ for pet parents everywhere 🐕🐱