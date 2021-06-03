const key = "nHdVgcjsCd1kcuGOVGLuvbpQwQNGyq5a";
const baseUrl = "https://api.nytimes.com/svc/topstories/v2/";

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error('The articles aren\'t currently available.');
  } else {
    return response.json();
  }
}

const getArticles = category => {
  return fetch(`${baseUrl}${category}.json?api-key=${key}`)
    .then(checkResponse);
}

export { getArticles };