import { data } from './data.js'

loadData()

function loadData() {
    data.forEach( item => {
        createCard(item)
    })
}

function createCard(item) {
    const tbody = document.getElementById("tbody")
    const url = `./${item.name}`
    const repo = `https://github.com/gabrielpb88/frontendmentor/tree/main/${item.name}`

    const cardHTML = `
      <tr>
        <td>
          <a href="${url}">${item.title}</a>           
        </td>
        <td>
          <a href="${repo}">Github repo</a>
        </td>
      </tr>
  `;

    tbody.insertAdjacentHTML("beforeend", cardHTML);
}