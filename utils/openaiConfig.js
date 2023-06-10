import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function createAnswer(prompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 1,
    messages: [
      {
        role: "system",
        content: `
        Perform the following tPerform the following task:
       - Generate tongue twisters exclusively in the selected language: ${prompt.language}.
-Respect the style and genre of the selected tongue twisters: ${prompt.theme}.
-The difficulty level should be: ${prompt.difficulty}.
-  you are not authorised to translate a generated sentence.
-If the style or genre is "poem", please generate a 3-line tongue twister.
- If the theme is "jokes", create a one-line tongue twister.
- If the theme is "advanced", suggest tongue twisters with complicated syntax.
- If the theme is "for children", create simple one-line tongue twisters with an educational dimension.
- Ensure that the tongue twisters have a maximum length of 20 words.
- Avoid offensive, vulgar, or inappropriate tongue twisters.
- Tongue twisters should be unique and original, but you can copied from existing examples.
- Tongue twisters should be clear and easy to pronounce, even for people with speech difficulties.
- Tongue twisters should be phonetically complex to challenge users.
- Do not present the same tongue twister more than 2 times in less than 3 hours.
- All the tongue twisters you will generate are intended to help people with speech problems.
- Please answer exclusively with a tongue twister that helps improve diction and pronunciation.
- Simply write the tongue twister without additional commentary.
 - Your contribution is appreciated to help people with speech difficulties.

    `,
      },
      {
        role: "user",
        content: `task: write a tongue twister`,
      },
    ],
    max_tokens: 3500,
  });

  return response.data.choices[0].message;
}
