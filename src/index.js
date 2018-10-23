import axios from 'axios';
import {showResultsAxios} from './components/show_results';
import {axiosHtml} from './components/show_results';
import './scss/style.scss';

const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const searchOption = document.querySelector('#searchOption');
const searchBtn = document.querySelector('#search-btn');
const searchResults = document.querySelector('#search-results');


const apiDefURL = 'https://swapi.co/api/';

let selectOption = 'films';

searchOption.addEventListener('change', function(e) {
  selectOption = this.value;  
});

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchInputVal = searchInput.value;

  //https://swapi.co/api/people/?search=r2
  const apiURL = `${apiDefURL}${selectOption}/?search=${searchInputVal}`;
  

// axios get
  axios
    .get(apiURL)
    .then(res => res.data)
    .then(data => {
      console.log(data.results);
      if (data.results.length === 0) {
        console.log(`empty`);
        searchResults.innerHTML = axiosHtml('No Results, please try again.');
        searchResults.classList.add('red');
      }else {
        showResultsAxios(selectOption, data.results);
        searchResults.classList.remove('red');
      }
      
      })
    .catch(err => console.log(err));

    

// to empty input field
    searchInput.value = '';

});