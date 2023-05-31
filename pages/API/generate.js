import openai from "openai";

const openaiClient = new openai(OPENAI_API_KEY);

async function generateTongueTwister(language, option, level) {
  // Construisez la demande pour l'API OpenAI
  const prompt = `Langue : ${language}\nOptions : ${option}\nNiveau : ${level}\n`;

  // Générez le virelangue en utilisant l'API OpenAI
  const response = await openaiClient.completions.create({
    engine: "davinci",
    prompt: prompt,
    max_tokens: 100,
  });

  // Récupérez le virelangue généré à partir de la réponse de l'API
  const tongueTwister = response.choices[0].text.trim();

  return tongueTwister;
}
