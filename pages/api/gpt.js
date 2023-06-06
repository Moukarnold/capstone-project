import createAnswer from "@/utils/openaiConfig";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const answer = await createAnswer(req.body);
    console.log("answer", answer);
    return res.status(200).json({
      answer,
    });
  }
}
