import { NextResponse } from 'next/server';

// Global variable to store users (shared with the auth callback)
global.users = global.users || [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'password', // In a real app, this would be hashed
    image: '/placeholder-avatar.jpg'
  }
];
const users = global.users;

export async function POST(request) {
  try {
    const { name, email, password, nid, contact } = await request.json();

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(), // Simple ID generation for demo
      name,
      email,
      password, // In a real app, you'd hash this
      nid,
      contact,
      image: '/placeholder-avatar.jpg', // Default image
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    // Return success response without password
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: userWithoutPassword
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}