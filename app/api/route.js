import { ConnectDB } from "@/lib/config/db";
import admintodoModel from "@/lib/models/admintodoModel";
import { NextResponse } from "next/server";

const LoadDB = async()=>{
    await ConnectDB()
}
LoadDB()

// export async function GET(request){
//     return NextResponse.json({msg:"hom page"})
// }

// CREATE POST HHTP METHOD
export async function POST(request){
    const{title, description} = await request.json();
    await admintodoModel.create({
        title,
        description
    })
    
    return NextResponse.json({msg:"created"})
}

// READ GET HTTP METHOD
export async function GET(request){
    const admintodos = await admintodoModel.find({});
    return NextResponse.json({admintodos:admintodos})
    
}

// CREATE DELETE HHTP METHOD
export async function DELETE(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await admintodoModel.findByIdAndDelete(mongoId)
    
    return NextResponse.json({msg:"deleted"})
}

// CREATE PUT HHTP METHOD
export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId');
    await admintodoModel.findByIdAndUpdate(mongoId, {
    $set:{
        isCompleted:true
    }
})
    return NextResponse.json({msg:"Completed"})
}
