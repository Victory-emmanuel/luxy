# Luxury Showcase - Premium Real Estate Application

A sophisticated luxury real estate showcase application built with modern web technologies, featuring premium properties and an elegant user experience.

## 🏗️ Project Overview

**Luxury Showcase** is a high-end real estate platform designed to present luxury properties with exceptional visual appeal and seamless user interaction. The application features property listings, detailed views, agent profiles, and comprehensive property search functionality.

## 🚀 Technologies Used

This project is built with cutting-edge technologies:

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Beautiful and accessible component library
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **TanStack Query** - Server state management

## 🛠️ Development Setup

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd luxury-showcase

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   ├── Navigation.tsx  # Main navigation
│   ├── Footer.tsx      # Site footer
│   └── ...
├── pages/              # Route components
│   ├── Index.tsx       # Homepage
│   ├── Properties.tsx  # Property listings
│   ├── About.tsx       # About page
│   └── ...
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
└── types/              # TypeScript type definitions
```

## 🎨 Design System

The application uses a sophisticated design system featuring:

- **Color Palette**: Elegant gold and charcoal theme
- **Typography**: Playfair Display (headings) and Source Sans Pro (body)
- **Components**: Luxury-themed cards, buttons, and layouts
- **Animations**: Smooth Framer Motion transitions
- **Responsive**: Mobile-first responsive design

## 🏡 Features

- **Property Showcase**: Beautiful property listings with high-quality images
- **Advanced Search**: Filter properties by location, price, and features
- **Property Details**: Comprehensive property information and image galleries
- **Agent Profiles**: Professional agent information and contact details
- **Responsive Design**: Optimized for all device sizes
- **Performance**: Optimized loading and smooth animations

## 🚀 Deployment

### Production Build

```sh
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **AWS S3**: Upload the build files to an S3 bucket with static hosting
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=contact@luxuryshowcase.com
```

### Customization

- **Colors**: Modify CSS variables in `src/index.css`
- **Fonts**: Update font imports in `index.html` and `tailwind.config.ts`
- **Components**: Customize ShadCN components in `src/components/ui/`

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the development team.

## 📞 Support

For technical support or inquiries:

- Email: support@luxuryshowcase.com
- Website: [Luxury Showcase](https://luxuryshowcase.com)

---

_Built with ❤️ for luxury real estate professionals_
