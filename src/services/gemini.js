import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

const geminiApiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export const generateAnalysis = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};
