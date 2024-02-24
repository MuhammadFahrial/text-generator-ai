import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "YOUR_API_KEY";

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

  const div = document.createElement("div");
  const profileAnswer = document.createElement("h3");
  const yourAnswer = document.createElement("p");
  div.append(profileAnswer, yourAnswer);
  div.classList.add("your-output");
  answer.append(div);
  profileAnswer.innerHTML = "Bot AI";
  yourAnswer.innerHTML = text;
}

const sendMsg = document.getElementById("sendMsg");
const yourMsg = document.getElementById("inputText");
const answer = document.querySelector(".answer");

sendMsg.addEventListener("click", () => {
  const div = document.createElement("div");
  const profilMessage = document.createElement("h3");
  const yourMessage = document.createElement("p");
  div.classList.add("your-message");
  div.append(profilMessage, yourMessage);
  answer.append(div);
  profilMessage.innerHTML = "You";
  yourMessage.innerHTML = yourMsg.value;
  run(yourMsg.value);
  yourMsg.value = "";
});
