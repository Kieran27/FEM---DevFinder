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

fetchUser(currentUser);
