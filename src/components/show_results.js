const searchResults = document.querySelector('#search-results');

export const axiosHtml = (txt) => `<li class="list-group-item">${txt}</li>`;

export const showResultsAxios = (selectOption, result) => {
  let html;
  if(selectOption === 'films') {
    html = result.map(result => axiosHtml(`<b>Title:</b> ${result.title} <b>Director:</b> ${result.director} <b>Release Date:</b> ${result.release_date}`) );

  }else if (selectOption === 'people') {
    html = result.map(result => axiosHtml(`<b>Name:</b> ${result.name} <b>height:</b> ${result.height}`) );

  }
  searchResults.innerHTML = html.join('');

}