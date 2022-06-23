export default class MyNewsApi {
  constructor () {
    this.searchQuery = '';
}

  fetchInfo() {
    const MY_NEWSAPI_KEY = "a05ceaa7c0394871ad19df204a773bc7";
   return fetch(`https://newsapi.org/v2/everything?q=${this.searchQuery}&apiKey=${MY_NEWSAPI_KEY}&pageSize=5&page=1`).
      then(r => r.json()).then(a => console.log(a));
  }

}