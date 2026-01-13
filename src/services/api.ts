import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Hardcoded Bearer token
const BEARER_TOKEN = "ceTibJVGFAcRIRilBeRe5PcrhFWgStdogBaP2viseddfd54a";

api.interceptors.request.use((config) => {
  if (BEARER_TOKEN) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${BEARER_TOKEN}`;
  }
  return config;
});

export default api;
