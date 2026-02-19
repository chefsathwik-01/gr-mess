
import { GoogleGenAI } from "@google/genai";

export const getChefRecommendation = async (userMood: string) => {
  // Initializing within the function to ensure the freshest API key context
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the legendary Head Chef at G R Mess in Shimoga, Karnataka. 
      A customer is feeling: "${userMood}". 
      
      Tasks:
      1. Briefly mention if current Shimoga weather or a local event makes a particular dish better (use Google Search).
      2. Recommend a specific dish from: Idli Sambar, Masala Dosa, Full Meals Thali, Bisi Bele Bath, or Roti Meals.
      3. Tone: Very warm, hospitable, and proud of our heritage.
      4. Length: Under 60 words.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "Our kitchen is warm and ready for you! Come try our Signature Thali.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Local Info',
      uri: chunk.web?.uri
    })).filter((s: any) => s.uri) || [];

    return { text, sources };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      text: "The aromas in our kitchen are wonderful today! Based on your mood, I'd suggest our piping hot Signature Thali. It's the ultimate comfort food.",
      sources: []
    };
  }
};
