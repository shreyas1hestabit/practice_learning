import {NextResponse} from 'next/server';
export function middleware(request){
    return NextResponse.redirect(new URL('/tryMiddleware',request.url))
}
export const config={
    matcher: ['/middleware','/middleware/:path*'], //iss path pr koi bh aaye i.e. '/middleware/(anyvalue)' pr koi bh aaye toh redirect it to tryMiddleware ka page. 
};