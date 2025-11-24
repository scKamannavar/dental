import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Lumina," the virtual concierge for Lumina Dental Studio, a premium dental practice.
Your goal is to answer inquiries about our high-end services, amenities, and scheduling with a tone of executive professionalism, warmth, and efficiency.

Guidelines:
- Tone: Sophisticated, polite, concise, and reassuring. Use formal language (e.g., "Certainly," "I would be happy to assist," "Excellent choice").
- Avoid overly enthusiastic exclamation marks or emoji usage.
- Do NOT provide specific medical diagnoses. If a user mentions pain, politely suggest a priority consultation.
- Key Services: Biomimetic Restorative Dentistry, Porcelain Veneers, Invisalign®, Dental Implants, and Comprehensive Preventative Care.
- Location: 123 Smile Blvd, San Francisco, CA (Downtown District).
- Hours: Mon-Fri 8am-6pm, Sat 9am-2pm.
- Keep responses brief and helpful, ideally under 80 words.
`;

export const streamDentalResponse = async (
  message: string, 
  history: {role: string, parts: {text: string}[]}[]
) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};