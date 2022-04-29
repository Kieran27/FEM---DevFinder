import './styles.css';

import { clearInput } from './DOM_Functions.js';
import { fetchUser } from './API_Functions.js';

let currentUser = 'Octocat'

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const searchValue = document.getElementById('searchbar');
  currentUser = searchValue.value;
  fetchUser(currentUser);
  clearInput();
})

document.getElementById('searchbar').addEventListener('input', () => {
  const errMsg = document.querySelector("[data-id='error-message']");
  if (errMsg.classList.contains('display-toggle')) {
    return errMsg.classList.toggle('display-toggle');
  }
})

fetchUser(currentUser);
