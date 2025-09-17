import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create some sample tasks
  const task1 = await prisma.task.create({
    data: {
      title: 'Welcome to your Task Manager',
      description: 'This is a sample task to get you started. You can edit or delete it.',
      completed: false,
    },
  })

  const task2 = await prisma.task.create({
    data: {
      title: 'Learn Next.js',
      description: 'Explore the features of this full-stack Next.js application.',
      completed: false,
    },
  })

  const task3 = await prisma.task.create({
    data: {
      title: 'Set up database',
      description: 'Configure Prisma with SQLite database.',
      completed: true,
    },
  })

  console.log('Seeded tasks:', { task1, task2, task3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
