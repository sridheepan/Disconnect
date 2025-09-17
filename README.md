# Disconnect - Full Stack Next.js Application

A modern full-stack web application built with Next.js 14, TypeScript, Prisma, and SQLite. This project demonstrates a complete CRUD application with a beautiful UI and robust backend API.

## 🚀 Features

- **Frontend**: Modern React components with TypeScript
- **Backend**: Next.js API routes with full CRUD operations
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React icons
- **Validation**: Zod for API validation
- **Type Safety**: Full TypeScript support

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: SQLite
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Validation**: Zod

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
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── tasks/        # API routes for tasks
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── lib/
│   │   ├── prisma.ts         # Prisma client setup
│   │   └── utils.ts          # Utility functions
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── .env                      # Environment variables
├── .env.example             # Environment variables example
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
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

### Task Management

- ✅ Create new tasks with title and description
- ✅ Edit existing tasks inline
- ✅ Mark tasks as completed/incomplete
- ✅ Delete tasks
- ✅ View creation dates
- ✅ Responsive design

### Technical Features

- ✅ Full TypeScript support
- ✅ Server-side API with validation
- ✅ Database integration with Prisma
- ✅ Modern UI with Tailwind CSS
- ✅ Error handling and loading states
- ✅ Optimistic UI updates

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

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Database Issues

If you encounter database issues:

```bash
# Reset the database
rm prisma/dev.db
npm run db:push
npm run db:seed
```

### Port Issues

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Dependencies Issues

If you have dependency conflicts:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
