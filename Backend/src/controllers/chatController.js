import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); 

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    const client = new OpenAI();
    await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a healthcare assistant.
DO NOT diagnose diseases.
Suggest precautions, lifestyle advice, and when to see a doctor.
Always add a medical disclaimer.
          `,
        },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    res.status(500).json({ error: "AI service failed" });
  }
};
