const MY_NEWSAPI_KEY = 'a05ceaa7c0394871ad19df204a773bc7';

export default class MyNewsApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchInfo() {
    const params = new URLSearchParams({
      q: `${this.searchQuery}`,
      apiKey: `${MY_NEWSAPI_KEY}`,
      pageSize: 5,
      page: `${this.page}`,
    });
    return fetch(`https://newsapi.org/v2/everything?${params}`)
      .then(respons => {
        if (!respons.ok) {
          throw new Error(respons.status);
        }
        return respons.json();
      })
      .then(datas => {
        this.pageIncrement();
        return datas.articles;
      })
      .catch(error => console.log(error));
  }

  pageIncrement() {
    this.page += 1;
  }

  pageReset() {
    this.page = 1;
  }

  get search() {
    return this.searchQuery;
  }

  set search(newSearch) {
    this.searchQuery = newSearch;
  }
}
