import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
})

// GET /api/tasks/[id] - Get a specific task
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid task ID' },
        { status: 400 }
      )
    }

    const task = await prisma.task.findUnique({
      where: { id },
    })

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(task)
  } catch (error) {
    console.error('Error fetching task:', error)
    return NextResponse.json(
      { error: 'Failed to fetch task' },
      { status: 500 }
    )
  }
}

// PUT /api/tasks/[id] - Update a specific task
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid task ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const validatedData = updateTaskSchema.parse(body)

    // Check if task exists
    const existingTask = await prisma.task.findUnique({
      where: { id },
    })

    if (!existingTask) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      )
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: validatedData,
    })

    return NextResponse.json(updatedTask)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error updating task:', error)
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    )
  }
}

// DELETE /api/tasks/[id] - Delete a specific task
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid task ID' },
        { status: 400 }
      )
    }

    // Check if task exists
    const existingTask = await prisma.task.findUnique({
      where: { id },
    })

    if (!existingTask) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      )
    }

    await prisma.task.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error('Error deleting task:', error)
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    )
  }
}
