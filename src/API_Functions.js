import { appendData } from './DOM_Functions.js'

const fetchUser = (currentUser) => {
  fetch((`https://api.github.com/users/${currentUser}`), {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      console.log(response);
      appendData(response);
    })
}

export {
  fetchUser
}
