
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSpiceRecommendation = async (dishDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a traditional culinary expert for 'Kaleva', a brand specializing in cold-pressed spices (like Haldi, Red Chili Powder) and cooking oils.
      A user is asking for a recommendation for this dish: "${dishDescription}".
      Suggest which of our spices or oils would elevate their dish. Keep it brief, aromatic, and warm. 
      Mention that Kaleva's cold-pressed method preserves 100% of natural oils and flavors.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our experts recommend a touch of our cold-pressed Haldi for earthy warmth and our vibrant Red Chili for a gentle kick.";
  }
};
