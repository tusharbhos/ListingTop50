import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('Forwarding to Laravel:', body);
    
    // Forward to Laravel backend
    const response = await fetch('http://localhost:8000/api/submit-property-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    console.log('Laravel response:', data);
    
    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }
    
    return NextResponse.json(data);
    
  } catch (error: any) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Failed to submit property search' 
      },
      { status: 500 }
    );
  }
}