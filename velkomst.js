import fs from "fs";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const WEATHER_KEY = process.env.OPENWEATHER_API_KEY;
const ELEVEN_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.VOICE_ID;

async function getWeather() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Førde,no&units=metric&appid=${WEATHER_KEY}`);
  const data = await res.json();
  return `${data.weather[0].description}, ${Math.round(data.main.temp)}°C`;
}

async function generateText(weather) {
  return `Velkommen heim! Akkurat no er det ${weather}.`;
}

async function generateTTS(text) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": ELEVEN_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.5 }
    })
  });

  if (!res.ok) throw new Error("TTS feila");
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync("velkomst.mp3", buffer);
  console.log("✅ velkomst.mp3 generert!");
}

(async () => {
  const weather = await getWeather();
  const text = await generateText(weather);
  await generateTTS(text);
})();