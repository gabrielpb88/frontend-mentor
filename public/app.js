import { data } from './data.js'

loadData()

function loadData() {
  data.forEach( item => {
    addCards(item);
  })
}


function addCards(challenge) {
  const ul = document.querySelector('#challenges-list');
  const li = document.createElement('li');
  const article = document.createElement('article')
  const anchorLiveUrl = document.createElement('a');
  const anchorRepository = document.createElement('a');
  const img = document.createElement('img');

  img.src = challenge.imageUrl;
  img.alt = challenge.title;

  anchorLiveUrl.href = challenge.liveUrl;
  anchorLiveUrl.classList.add('liveUrl');
  anchorLiveUrl.textContent = challenge.title;

  anchorRepository.href = challenge.repositoryUrl;
  anchorRepository.classList.add('repository');
  anchorRepository.textContent = 'Repository';

  li.append(img);
  li.append(article);
  article.append(anchorLiveUrl);
  article.append(anchorRepository);

  ul.append(li);
}