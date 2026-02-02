// config.js

// Change only this 👇 whenever needed
const ENV = "PROD";   // "LOCAL" or "PROD"
// const ENV = "LOCAL";   // "LOCAL" or "PROD"

// APIs
const CONFIG = {
  LOCAL: {
    WEBSEARCH: "http://127.0.0.1:5000/api/websearch",
    ASK: "http://127.0.0.1:5000/api/ask"
  },
  PROD: {
    WEBSEARCH: "https://chat-backend-n8t7.onrender.com/api/websearch",
    ASK: "https://chat-backend-n8t7.onrender.com/api/ask"
  }
};

// Final API URLs
const API_URLS = CONFIG[ENV];

console.log("✅ ENV:", ENV);
console.log("✅ WEBSEARCH API:", API_URLS.WEBSEARCH);
console.log("✅ ASK API:", API_URLS.ASK);
