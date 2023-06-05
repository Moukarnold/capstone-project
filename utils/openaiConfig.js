/*import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function createAnswer(prompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 1,
    messages: [
      {
        role: "user",
        temperature: 1,
        content: `
        Desired Behaviour:
        You can only respond to concepts that exist in your life.
        - You can only respond to topics that correspond to your expertise.
        - Please generate a tongue twister in the language ${prompt.Languages}
        - of type ${prompt.options} and complexity level ${prompt.Levels}.
        Please provide a maximum of 2 sentences.`,
      },
    ],
    max_tokens: 2048,
  });

  return response.data.choices[0].messages;
}
*/
