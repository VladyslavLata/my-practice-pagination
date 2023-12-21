import MyNewsApi from './logics';

const formEl = document.querySelector('.form');
const btnSeccondEl = document.querySelector('.btn-seccond');
const listEl = document.querySelector('.list');
formEl.addEventListener('submit', onFetchInfo);
btnSeccondEl.addEventListener('click', onMoreFetchInfo);

const myNewsApi = new MyNewsApi();

btnSeccondEl.classList.add('is-hiden');

function onFetchInfo(event) {
  event.preventDefault();

  if (event.currentTarget.elements.query.value === '') {
    return window.alert('Введите парамерт поиска');
  } else if (myNewsApi.search === event.currentTarget.elements.query.value) {
    return;
  }
  myNewsApi.pageReset();
  myNewsApi.search = event.currentTarget.elements.query.value;
  myNewsApi.fetchInfo().then(articles => {
    clearList();
    addMarkupData(articles);
    btnSeccondEl.classList.remove('is-hiden');
  });
}

function onMoreFetchInfo() {
  myNewsApi.fetchInfo().then(addMarkupData);
}

function addMarkupData(articles) {
  markup = articles.map(markupData).join('');
  listEl.insertAdjacentHTML('beforeend', markup);
}

function clearList() {
  listEl.innerHTML = '';
}

function markupData({ title, description, urlToImage }) {
  return `<li>
  <img src="${urlToImage}" alt="" width="320px">
        <h2>${title}</h2>
        <p>${description}</p>
      </li>`;
}
