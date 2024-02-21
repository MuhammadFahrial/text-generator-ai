import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyDg93EtddNyFtH2lI0h9bkZwG4icQVIMTc";
const yourAnswer = document.createElement("p");

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(yourMsg) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = yourMsg;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  //   console.log(text);

  const profilMessage = document.createElement("h3");
  const yourMessage = document.createElement("p");

  const answer = document.querySelector(".answer");
  const profileAnswer = document.createElement("h3");
  const yourAnswer = document.createElement("p");
  yourAnswer.classList.add("output");
  answer.append(profilMessage, yourMessage, profileAnswer, yourAnswer);
  profilMessage.innerHTML = "You";
  yourMessage.innerHTML = yourMsg;
  profileAnswer.innerHTML = "Bot AI";
  yourAnswer.innerHTML = text;
}

const sendMsg = document.getElementById("sendMsg");
const yourMsg = document.getElementById("inputText");

sendMsg.addEventListener("click", () => {
  run(yourMsg.value);
});
