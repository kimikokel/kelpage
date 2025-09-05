// // middleware.js
// export const config = {
//   matcher: ['/bookstore/:path*', '/macaucalendar/:path*']
// };

// export default function middleware(request) {
//   const url = new URL(request.url);
//   const amplifyDomain = 'https://main.d7qiai7u4ok60.amplifyapp.com';
  
//   // Rewrite to Amplify
//   return Response.rewrite(`${amplifyDomain}${url.pathname}`);
// }