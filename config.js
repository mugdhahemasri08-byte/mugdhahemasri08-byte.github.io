// config.js

// Change only this 👇 whenever needed
const ENV = "PROD";   // "LOCAL" or "PROD"
// const ENV = "LOCAL";     // "LOCAL" or "PROD"

// APIs
const CONFIG = {
  LOCAL: {
    WEBSEARCH: "http://127.0.0.1:5001/api/websearch",
    RAGSEARCH: "http://127.0.0.1:5001/api/ragsearch",   // ✅ Added
    ASK: "http://127.0.0.1:5001/api/ask",

    // ✅ NEW
    PDF_CHAT: "http://127.0.0.1:5001/api/chat",
    IMAGE_CHAT: "http://127.0.0.1:5001/api/image-chat"
  },

  PROD: {
    WEBSEARCH: "https://chat-backend-n8t7.onrender.com/api/websearch",
    RAGSEARCH: "https://chat-backend-n8t7.onrender.com/api/ragsearch", // ✅ Added
    ASK: "https://chat-backend-n8t7.onrender.com/api/ask",

    // ✅ NEW
    PDF_CHAT: "https://chat-backend-n8t7.onrender.com/api/chat",
    IMAGE_CHAT: "https://chat-backend-n8t7.onrender.com/api/image-chat"
  }
};

// Final API URLs
const API_URLS = CONFIG[ENV];

console.log("✅ ENV:", ENV);
console.log("✅ WEBSEARCH API:", API_URLS.WEBSEARCH);
console.log("✅ RAGSEARCH API:", API_URLS.RAGSEARCH);   // ✅ Added
console.log("✅ ASK API:", API_URLS.ASK);
console.log("✅ PDF CHAT API:", API_URLS.PDF_CHAT);
console.log("✅ IMAGE CHAT API:", API_URLS.IMAGE_CHAT);
