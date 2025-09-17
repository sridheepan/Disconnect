# Disconnect - Creative Hobbies Subscription Platform

A modern full-stack creative hobbies subscription platform built with the latest Next.js 15, React 19, TypeScript, Prisma, and cutting-edge web technologies. This project showcases a complete subscription-based business model with beautiful UI components and robust backend architecture.

## 🚀 Features

### 🎨 Frontend
- **Modern React 19** components with TypeScript
- **Subscription Plans Page** with pricing tiers and FAQ accordion
- **Beautiful UI Components** using shadcn/ui and Radix UI primitives
- **Responsive Design** that works on all devices
- **Dark/Light Theme** support with next-themes
- **Custom Brand Colors** (Coral, Yellow, Mint) design system

### ⚙️ Backend
- **Next.js 15 API Routes** with full CRUD operations
- **Type-safe Database** operations with Prisma ORM
- **Input Validation** with Zod schemas
- **Modern Route Handlers** compatible with Next.js 15

### 🎯 Business Features
- **Subscription Plans** (Basic $29/month, Premium $59/month)
- **Gift Subscriptions** with beautiful presentation
- **Monthly Creative Kits** showcase
- **Customer Testimonials** section
- **FAQ System** with expandable accordion

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.3 (Latest) with App Router
- **Frontend**: React 19.0.0 (Latest)
- **Language**: TypeScript 5.7.2 (Latest)
- **Database**: SQLite with Prisma 6.0.1 (Latest)
- **Styling**: Tailwind CSS 3.4.17 (Latest)
- **UI Components**: Radix UI primitives (Latest versions)
- **Icons**: Lucide React 0.468.0 (Latest)
- **Validation**: Zod 3.24.1 (Latest)
- **Theme**: next-themes 0.4.4 (Latest)

## 📦 Installation

1. **Clone the repository** (if from git) or navigate to the project directory:

   ```bash
   cd disconnect-fullstack
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   ```bash
   # Generate Prisma client
   npm run db:generate

   # Push database schema
   npm run db:push

   # Seed the database with sample data
   npm run db:seed
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🗂 Project Structure

```
disconnect-fullstack/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts               # Database seeding script
├── public/
│   ├── hero-image.png        # Hero section image
│   ├── watercolor-landscape.png
│   ├── macrame-wall-hanging.png
│   └── ...                   # Other kit images
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── tasks/        # API routes for tasks
│   │   ├── subscription/     # Subscription plans page
│   │   │   └── page.tsx      # Subscription page component
│   │   ├── globals.css       # Global styles with brand colors
│   │   ├── layout.tsx        # Root layout with navigation
│   │   └── page.tsx          # Home page
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── accordion.tsx # Accordion component
│   │   │   ├── badge.tsx     # Badge component
│   │   │   ├── button.tsx    # Button component
│   │   │   ├── card.tsx      # Card component
│   │   │   └── ...           # Other UI components
│   │   ├── hero-section.tsx  # Landing page hero
│   │   ├── monthly-kits-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── footer.tsx        # Site footer
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx  # Dark/light mode toggle
│   ├── lib/
│   │   ├── prisma.ts         # Prisma client setup
│   │   └── utils.ts          # Utility functions
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── .env                      # Environment variables
├── .env.example             # Environment variables example
├── next.config.js           # Next.js 15 configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment config
└── package.json             # Latest dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with sample data

## 🎯 API Endpoints

### Tasks API

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/[id]` - Get a specific task
- `PUT /api/tasks/[id]` - Update a specific task
- `DELETE /api/tasks/[id]` - Delete a specific task

### Request/Response Examples

**Create Task:**

```json
POST /api/tasks
{
  "title": "Learn Next.js",
  "description": "Complete the Next.js tutorial"
}
```

**Update Task:**

```json
PUT /api/tasks/1
{
  "title": "Updated title",
  "completed": true
}
```

## 🎨 Features Overview

### 🏠 Landing Page
- ✅ Hero section with compelling messaging
- ✅ Monthly creative kits showcase
- ✅ Customer testimonials with ratings
- ✅ Responsive design for all devices
- ✅ Dark/light theme toggle

### 💳 Subscription System
- ✅ Two-tier pricing (Basic $29, Premium $59)
- ✅ "Most Popular" badge highlighting
- ✅ Feature comparison between plans
- ✅ Gift subscription options
- ✅ FAQ accordion with common questions

### 🎨 UI/UX Features
- ✅ Modern shadcn/ui components
- ✅ Radix UI primitives for accessibility
- ✅ Custom brand color system
- ✅ Smooth animations and transitions
- ✅ Mobile-first responsive design

### 🔧 Technical Features
- ✅ Next.js 15 with React 19 (Latest versions)
- ✅ Full TypeScript support with strict mode
- ✅ Server-side API with validation
- ✅ Database integration with Prisma 6
- ✅ Modern UI with Tailwind CSS 3.4
- ✅ Error handling and loading states
- ✅ SEO optimized with proper meta tags

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Next.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

## 🚀 Deployment

### 🌐 Live Demo

The application is currently deployed and live at:

**Production URL**: https://disconnect-creative-nawjtlwb9-sridheepans-projects.vercel.app

**Vercel Dashboard**: https://vercel.com/sridheepans-projects/disconnect-creative

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment with Next.js 15:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Deployment Features
- ✅ **Automatic builds** on git push
- ✅ **Edge runtime** optimization
- ✅ **Prisma integration** with automatic client generation
- ✅ **Environment variables** management
- ✅ **Custom domain** support

### Other Platforms

This Next.js 15 app can be deployed to any platform that supports Node.js 18+:

- **Netlify** (with Next.js plugin)
- **Railway** (with automatic deployments)
- **DigitalOcean App Platform**
- **AWS Amplify**
- **Cloudflare Pages**

## 📦 Latest Package Versions

This project uses the **latest stable versions** of all packages as of September 2024:

### Core Framework
- **Next.js**: `15.5.3` (Latest stable)
- **React**: `19.0.0` (Latest stable)
- **TypeScript**: `5.7.2` (Latest)

### Database & ORM
- **Prisma**: `6.0.1` (Latest)
- **@prisma/client**: `6.0.1`

### UI & Styling
- **Tailwind CSS**: `3.4.17` (Latest)
- **Radix UI**: All components updated to latest versions
- **Lucide React**: `0.468.0` (Latest icons)
- **next-themes**: `0.4.4` (Latest)

### Development Tools
- **ESLint**: `9.17.0` (Latest)
- **PostCSS**: `8.5.1` (Latest)
- **Autoprefixer**: `10.4.20` (Latest)

All packages are regularly updated to ensure security, performance, and access to the latest features.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ⚡ Performance Features

### Next.js 15 Optimizations
- **React 19 Concurrent Features** for better user experience
- **Automatic Image Optimization** with next/image
- **Edge Runtime** support for faster API responses
- **Built-in Bundle Analyzer** for optimization insights

### Modern Web Standards
- **ES2017+ Target** for modern JavaScript features
- **Tree Shaking** to eliminate unused code
- **Code Splitting** for optimal loading performance
- **Static Generation** where applicable

## 🆘 Troubleshooting

### Next.js 15 Compatibility Issues

If you encounter issues after updating to Next.js 15:

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Database Issues

If you encounter database issues:

```bash
# Reset the database
rm prisma/dev.db
npm run db:push
npm run db:seed
```

### Prisma Client Issues

If Prisma client is outdated:

```bash
# Regenerate Prisma client
npm run db:generate
```

### Port Issues

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Dependencies Issues

If you have dependency conflicts with the latest packages:

```bash
# Clean install with latest packages
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

If you encounter TypeScript errors after updates:

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the [Next.js 15 documentation](https://nextjs.org/docs)
- Review [React 19 migration guide](https://react.dev/blog/2024/04/25/react-19)

---

Built with ❤️ using **Next.js 15**, **React 19**, and the latest modern web technologies.
