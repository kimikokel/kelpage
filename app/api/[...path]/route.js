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

async function handleRequest(method, request, { params }) {
  try {
    const pathArray = params.path || [];
    const pathString = pathArray.join('/');
    
    const apiUrl = `http://18.141.202.4/api/${pathString}`;
    console.log('Proxying to:', apiUrl);
    
    let body = undefined;
    if (method !== 'GET' && method !== 'HEAD') {
      try {
        body = await request.text();
      } catch (e) {
        // If no body, that's fine
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
    
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
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
    return NextResponse.json(
      { error: 'Failed to proxy request', details: error.message },
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