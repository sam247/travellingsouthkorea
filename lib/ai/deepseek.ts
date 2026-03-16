/**
 * DeepSeek chat API helper. Used only at script time for content generation.
 * Never called at runtime. Returns null on any failure so builds do not break.
 */

const DEEPSEEK_URL = "https://api.deepseek.com/v1/chat/completions";

export interface CallDeepSeekOptions {
  prompt: string;
  temperature?: number;
  maxTokens?: number;
}

export async function callDeepSeek(
  options: CallDeepSeekOptions
): Promise<string | null> {
  const { prompt, temperature = 0.7, maxTokens = 1024 } = options;
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "test") {
      console.warn("[deepseek] DEEPSEEK_API_KEY is not set");
    }
    return null;
  }

  try {
    const res = await fetch(DEEPSEEK_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.warn(`[deepseek] API error ${res.status}: ${text.slice(0, 200)}`);
      return null;
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content = data.choices?.[0]?.message?.content ?? null;
    return content;
  } catch (err) {
    console.warn("[deepseek] Request failed:", err instanceof Error ? err.message : err);
    return null;
  }
}
