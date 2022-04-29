import { appendData, errorMsg } from './DOM_Functions.js'

const fetchUser = (currentUser) => {
  fetch((`https://api.github.com/users/${currentUser}`), {mode: 'cors'})
    .then(handleErrors)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      appendData(response);
    })
    .catch((error) => {
  console.log(error);
  errorMsg(error);
});
}

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error('No Results')
  }
  return response;
}

export {
  fetchUser
}
