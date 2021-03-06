const API_URL = 'https://api-public.guidebox.com/v2/';
const API_KEY = process.env.API_KEY;

export function formatRequest(type, params) {
  if (params) {
    return `${API_URL}${type}?api_key=${API_KEY}&sources=${params}&limit=100`;
  }
  return `${API_URL}${type}?api_key=${API_KEY}&limit=100`;
}

export function formatDetailRequest(type, params) {
  return `${API_URL}${type}/${params}?api_key=${API_KEY}`;
}

export function formatRelatedRequest(type, params) {
  return `${API_URL}${type}/${params}/related?api_key=${API_KEY}`;
}

export function formatContentRequest(type, params) {
  return `${API_URL}${type}/${params}/available_content?api_key=${API_KEY}`;
}
