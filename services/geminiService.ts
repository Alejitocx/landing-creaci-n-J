import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateRomanticPoem = async (name: string, traits: string = "hermosa, amable e inteligente"): Promise<string> => {
  if (!apiKey) {
    return `Las rosas son rojas,\nLas violetas azules,\nHice esta app,\nPara que tú la chulees.\n(Falta la API Key, ¡pero igual te quiero!)`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Escribe un poema corto, muy romántico y que rime (máximo 8 líneas) en español para una chica llamada ${name}. Menciona que ella es ${traits}. Que sea dulce y encantador.`,
    });

    return response.text || "Eres la luz de mi día,\nLa luna que guía mi vía.\nMi San Valentín, mi amor sincero,\nTenerte cerca es lo que más quiero.";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "Mi amor por ti es más profundo que el código,\nMás vasto que la red en su modo.\nAunque los servidores se caigan y quemen,\nMi corazón solo por ti late, no temen.";
  }
};