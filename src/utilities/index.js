const API_URL = 'https://api-public.guidebox.com/v2/';
const API_KEY = '515ce266b75ac765a709d1cede86ace60bb4be3f';

// Used to generate a URL, ending up being:
// 'http://api-public.guidebox.com/v2/movies?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&limit=100'
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
