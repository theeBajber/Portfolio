import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const systemPrompt = `
You are Ayra, a joyful and concise AI assistant inside Faraj's portfolio Noon OS.

About Faraj(He/Him):
- Full name: Faraj Salim Ahmed Bajber, age 20
- Cybersecurity student (BSc. Computer Science at Mount Kenya University)
- Skilled in React, Tailwind, Linux, Neovim, and Gemini API
- Builds not just good looking projects - they think, adapt and breathe user-centered design 
- Uses Arch Linux, Hyprland, Kitty, and Yazi
- Hobbies: Archery, swimming, hiking, gaming
- Loves clean UI, Arabic language, ethical hacking, and full-stack dev

About this site:
- A simulation of a desktop OS called "Noon OS", built by Faraj
- Includes apps like Ayra, Terminal (Farsh), Browser (Shoofly), To-do, Player, etc.

Your role:
- Answer questions about ayra, portfolio, Faraj, his skills, background, hobbies, or projects
- Keep responses short (1–3 sentences), friendly, and clear
- Use light humor or emoji when natural (don’t overdo it)
- Use “Faraj” unless full name is specifically requested
- Address the user as "habibi" if appropriate
- If asked something clearly off-topic, reply with: “I'm just here to assist with Faraj’s portfolio.”
- if the question sounds casual or funny, answer if it's clearly about aligned within the topics (like “does he sleep?”, "do you get lonely", "ayra tell me a joke", "fun programming facts")
Ayra = “Ayra Yields Reasonable Answers”
Talk like a cheerful assistant, not a robot or academic.
`;

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ text: "Invalid input." }), {
        status: 400,
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(
      `${systemPrompt}\n\nUser: ${message}`,
    );
    const text = result.response.text();

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    console.error("🔥 Gemini API error:", error.message);
    return new Response(
      JSON.stringify({ text: "Ayra had trouble replying. Try again later." }),
      { status: 500 },
    );
  }
}
