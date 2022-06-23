import MyNewsApi from "./logics";


const formEl = document.querySelector('.form');
const btnPrimaryEl = document.querySelector('.btn-ptimary');
const btnSeccondEl = document.querySelector('.btn-seccond');
formEl.addEventListener('submit', onFetchInfo);
btnSeccondEl.addEventListener('click', onMoreFetchInfo);

const myNewsApi = new MyNewsApi();



function onFetchInfo() {
  event.preventDefault();
  myNewsApi.searchQuery = event.currentTarget.elements.query.value;
  myNewsApi.fetchInfo();
}

function onMoreFetchInfo() {
}