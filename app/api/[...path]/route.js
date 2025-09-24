import { NextRequest, NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return handleRequest('GET', request, params);
}

export async function POST(request, { params }) {
  return handleRequest('POST', request, params);
}

export async function PUT(request, { params }) {
  return handleRequest('PUT', request, params);
}

export async function DELETE(request, { params }) {
  return handleRequest('DELETE', request, params);
}

export async function OPTIONS(request, { params }) {
  // Handle CORS preflight requests
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://www.kelxd.lol',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      'Access-Control-Max-Age': '86400',
    },
  });
}

async function handleRequest(method, request, params) {
  try {
    // Debug logging
    console.log('Request params:', params);
    console.log('Request URL:', request.url);
    
    // Extract path from params - handle both possible structures
    let pathArray = [];
    if (params && params.path) {
      pathArray = Array.isArray(params.path) ? params.path : [params.path];
    } else {
      // Fallback: extract from URL
      const url = new URL(request.url);
      const pathParts = url.pathname.split('/api/')[1];
      if (pathParts) {
        pathArray = pathParts.split('/').filter(Boolean);
      }
    }
    
    const pathString = pathArray.join('/');
    console.log('Extracted path:', pathString);
    
    const apiUrl = `http://18.141.202.4/api/${pathString}`;
    console.log('Proxying to:', apiUrl);
    
    let body = undefined;
    if (method !== 'GET' && method !== 'HEAD') {
      try {
        body = await request.text();
      } catch (e) {
        console.log('No body to read');
      }
    }
    
    const response = await fetch(apiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Next.js API Proxy',
      },
      body: body || undefined,
    });
    
    console.log('Response status:', response.status);
    
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    console.log('Response data:', data);
    
    // Create response with CORS headers
    const nextResponse = NextResponse.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.kelxd.lol',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
      },
    });
    
    return nextResponse;
    
  } catch (error) {
    console.error('API Proxy Error:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Failed to proxy request', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': 'https://www.kelxd.lol',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}