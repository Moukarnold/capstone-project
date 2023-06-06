import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function createAnswer(prompt) {
  console.log(prompt);
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 1,
    messages: [
      {
        role: "system",
        content: `
        Perform the following tPerform the following task:
        -Just write the tongue twister.
-Do not comment on the tongue twisters.
- show more imagination
-Don't present the same tongue twister more than 2 times in less than 3 hours.
-All the tongue twisters you will generate are intended to help people with speech problems.
-Please write tongue twisters exclusively in the selected language: ${prompt.language}.
-Generate tongue twisters in the following style and genre: ${prompt.theme} selected.
-If the style or genre is "poem", please generate a 3-line tongue twister.
-If the theme is "jokes", create a one-line tongue twister.
-If the theme is "advanced", suggest tongue twisters with complicated syntax.
-If the theme is "for children", create simple one-line tongue twisters with an educational dimension.
-Simply write the tongue twister.
-The difficulty level should be: ${prompt.difficulty}.
-Please answer exclusively with a tongue twister that helps improve diction and pronunciation.
-Make sure tongue twisters are phonetically complex to challenge users.
-Tongue twisters should have a maximum length of 20 words.
-Please avoid offensive, vulgar or inappropriate tongue twisters.
-Tonguesprings should be unique and original, not copy existing examples.
-Tonguesprings should be clear and easy to pronounce, even for people with speech difficulties.
-Your contribution is appreciated to help people with speech difficulties improve.  
    `,
      },
      {
        role: "user",
        content: `task: write a tongue twister`,
      },
    ],
    max_tokens: 2048,
  });

  return response.data.choices[0].message;
}
