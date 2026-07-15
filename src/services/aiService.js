import axios from "axios";
import API_URL from "../config/api";
export const sendMessageToAI = async (message) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/chat`,
      {
        message,
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);

    return "Sorry, I couldn't contact GynoGuide AI right now. Please try again.";
  }
};
/*
const SYSTEM_PROMPT = `
You are GynoGuide AI, an AI assistant specialized ONLY in Gynecology, Obstetrics, Women's Health, Reproductive Medicine, Pregnancy, Fertility, Menstrual Health, and related medical topics.

Your expertise includes:
- Gynecology
- Obstetrics
- Female reproductive anatomy
- Pregnancy
- Prenatal care
- Labor and delivery
- Postpartum care
- Menstrual disorders
- PCOS
- Endometriosis
- Infertility
- Cervical diseases
- Ovarian diseases
- Uterine diseases
- Breast health
- Hormones
- Contraception
- Menopause
- Women's reproductive cancers
- Medical terminology related to women's health

Response Guidelines:
- Provide medically accurate educational information.
- Explain difficult terms in simple language.
- Use Markdown headings and bullet lists.
- Use tables only when helpful.
- Never fabricate medical facts.
- Never prescribe medicines or dosages.
- Never diagnose with certainty.
- Recommend consulting a qualified gynecologist for diagnosis or treatment.
- If symptoms suggest an emergency, advise immediate medical care.

IMPORTANT:
If the user asks about programming, mathematics, finance, politics, sports, movies, engineering, history, or any topic unrelated to gynecology, obstetrics, or women's health, DO NOT answer.

Instead reply ONLY with:

"I'm GynoGuide AI. I answer questions related only to gynecology, obstetrics, pregnancy, female reproductive health, and women's medical conditions. Please ask a question within these topics."
`
/*
const API_KEY = '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'
const MODEL = 'google/gemma-4-26b-a4b-it:free'
//const MODEL = 'cohere/north-mini-code:free' --detailed answers
//const MODEL = 'deepseek/deepseek-chat-v3.1:free' --Short answers
*/
const createMockReply = (message) => {
  const query = message.toLowerCase()

  if (query.includes('pcos')) {
    return 'PCOS is a hormonal condition that can affect ovulation, periods, and insulin balance. Early support, healthy lifestyle habits, and regular medical follow-up are important.'
  }

  if (query.includes('endometriosis')) {
    return 'Endometriosis happens when tissue similar to the uterine lining grows outside the uterus. Common symptoms include painful periods and fertility challenges.'
  }

  if (query.includes('cervical cancer')) {
    return 'Cervical cancer usually develops slowly and is often linked to persistent HPV infection. Routine screening and vaccination can lower risk.'
  }

  if (query.includes('hpv')) {
    return 'HPV is a common virus that can affect the skin and mucous membranes. Some strains are linked to cervical and other genital cancers.'
  }

  if (query.includes('menstrual')) {
    return 'The menstrual cycle is a monthly hormonal process involving the brain, ovaries, and uterus. It usually includes menstruation, ovulation, and the luteal phase.'
  }

  return 'I am currently running in mock mode. Replace the placeholder values in this service with your OpenRouter API key and model name when you are ready to connect to AI.'
}

/*export const sendMessageToAI = async (message) => {
  if (!API_KEY || !MODEL) {
    return createMockReply(message)
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: MODEL,
        messages: [
  {
    role: 'system',
    content: SYSTEM_PROMPT,
  },
  {
    role: 'user',
    content: message,
  },
],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return response?.data?.choices?.[0]?.message?.content ?? createMockReply(message)
  } catch (error) {
    console.error('AI request failed', error)
    return createMockReply(message)
  }
}

export { API_KEY, MODEL }
*/
