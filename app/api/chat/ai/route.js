// --------------- AI API -------------------
export const maxDuraton = 60;
import OpenAI from "openai";
import { getAuth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import Chat from "@/models/Chat";
import connectDB from "@/config/db";


// initialize OpenAI client with openrouter api key and base url
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
})

export async function POST(req){
    try{
        const {userId} = getAuth(req);

        // extract chatId and prompt from the request body
        const {chatId, prompt} = await req.json();

        if(!userId){
            return NextResponse.json({
                success:false,
                message: "User not authenticated",
            })
        }

        // find the chat document in the database based on userId and chatId
        await connectDB()
        const data = await Chat.findOne({userId, _id:chatId})

        // create a user message object
        const userPrompt = {
            role:'user',
            content: prompt,
            timestamp: Date.now()
        };

        data.messages.push(userPrompt);

        // call the openrouter api to get a chat completion
        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-4o-mini',
            messages: [
            {
                role: 'user',
                content: prompt,
            },
            ],
            store: true,
        });

        const message = completion.choices[0].message;
        message.timestamp = Date.now()
        data.messages.push(message);
        data.save(); // saved in mongodb database

        return NextResponse.json({success: true, data: message})

    }catch(error){
        return NextResponse.json({success: false, error: error.message})
    }

}