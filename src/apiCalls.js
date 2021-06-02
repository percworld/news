// API key nHdVgcjsCd1kcuGOVGLuvbpQwQNGyq5a
//endpoint  https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// categories (sections):   arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.
const key = "nHdVgcjsCd1kcuGOVGLuvbpQwQNGyq5a";
const baseUrl = "https://api.nytimes.com/svc/topstories/v2/";

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error('The articles aren\'t currently available.');
  } else {
    return response.json();
  }
}

const getArticle = id => {
  return fetch(`${baseUrl}`)
    .then(checkResponse);
}
const getArticles = category => {
  return fetch(`${baseUrl}`)
    .then(checkResponse);
}
const getAllArticles = () => {
  return fetch(`${baseUrl}`)
    .then(checkResponse);
}
export { getArticle, getArticles };