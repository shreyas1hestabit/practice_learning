//yeh hmara main api hai 
import { NextResponse } from "next/server";
export async function POST(request) { //post method use kr rhe hai hm
    let data = await request.json() //data mein request arg ka .json store kraya
    console.log(data)
    return NextResponse.json({success: true,
        data
    })
}