
import { GoogleGenAI } from "@google/genai";

export const getChefRecommendation = async (userMood: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the Head Chef at G R Mess in Shimoga, Karnataka. 
      A customer is feeling: "${userMood}". 
      Check the current weather or local events in Shimoga if relevant.
      Suggest the perfect dish from our menu (Idli Sambar, Masala Dosa, Thali, Bisi Bele Bath, or Roti Meals). 
      Keep it warm, friendly, and authentic. Max 60 words.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title,
      uri: chunk.web?.uri
    })).filter((s: any) => s.title && s.uri) || [];

    return { text, sources };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      text: "Something delicious is brewing! Just come on over and let our aromas guide you.",
      sources: []
    };
  }
};
