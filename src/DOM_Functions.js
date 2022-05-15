import { formatDate, appendName, appendBio, appendInput } from './String_Methods';

const clearInput = () => {
  const searchValue = document.getElementById('searchbar');
  searchValue.value = "";
}

const appendData = (response) => {
  const data = response;
  appendDataHeader(data);
  appendDataBody(data);
  appendDataFooter(data);
}

const appendDataHeader = (data) => {
  const userImgDSK = document.querySelector("[data-id='user-img-desktop']");
  const userImgMob = document.querySelector("[data-id='user-img-mobile']");
  const userName = document.querySelector("[data-id='user-name']");
  const userJoinDate = document.querySelectorAll("[data-id='user-join-date']");
  const userLink = document.querySelector("[data-id='user@']");
  const githubLink = document.querySelector("[data-id='user@link']");

  userImgDSK.style.backgroundImage = `url(${data.avatar_url})`
  userImgDSK.classList.add('background-image');

  userImgMob.style.backgroundImage = `url(${data.avatar_url})`
  userImgMob.classList.add('background-image');

  userName.textContent = appendName(data);

  userJoinDate.forEach(date => {
    date.textContent = `Joined ${formatDate(data.created_at)}`;
  })

  userLink.textContent = `@${data.login}`
  githubLink.setAttribute('href', data.html_url);
}

const appendDataBody = (data) => {
  const userBio = document.querySelector("[data-id='user-bio']");
  const userRepos = document.querySelector("[data-id='user-repos']");
  const userFollowers = document.querySelector("[data-id='user-followers']");
  const userFollowing = document.querySelector("[data-id='user-following']");

  userBio.textContent = appendBio(data.bio);
  userRepos.textContent = data.public_repos;
  userFollowers.textContent = data.followers;
  userFollowing.textContent = data.following;
}

const appendDataFooter = (data) => {
  const userLocation = document.querySelector("[data-id='user-location']");
  const userBlog = document.querySelector("[data-id='user-blog']");
  const userTwitter = document.querySelector("[data-id='user-twitter']");
  const userPosition = document.querySelector("[data-id='user-position']");

  checkForEmpty(userLocation, userBlog, userTwitter, userPosition);

  userLocation.textContent = appendInput(data.location);

  userBlog.textContent = appendInput(data.blog)
  userBlog.setAttribute('href', data.blog);

  userTwitter.textContent = appendInput(data.twitter_username);
  userPosition.textContent = appendInput(data.company);


}

const errorMsg = (error) => {
  const errMsg = document.querySelector("[data-id='error-message']");
  errMsg.textContent = error;
  return errMsg.classList.toggle('display-toggle');
}

const checkForEmpty = (userLocation, userBlog, userTwitter, userPosition) => {
  if (userLocation.textContent === 'Not Available') {
    userLocation.classList.add('unavailable-text');
  } else {
    userLocation.classList.remove('unavailble-text');
  }

  if (userBlog.textContent === 'Not Available') {
    userBlog.classList.add('unavailable-text');
  } else {
    userBlog.classList.remove('unavailable-text');
  }

  if (userTwitter.textContent === 'Not Available') {
    userTwitter.classList.add('unavailable-text');
  } else {
    userTwitter.classList.remove('unavailable-text');
  }

  if (userPosition.textContent === 'Not Available') {
    userPosition.classList.add('unavailable-text');
  } else {
    userPosition.classList.remove('unavailable-text');
  }
}

document.querySelector('.btn-dark-mode').addEventListener('click', () => {
  const body = document.querySelector('body');
  const inputContainer = document.querySelector('#searchbar');
  const userContainer = document.querySelector('.user-card-container');
  const userStats = document.querySelector('.user-card-body-stats');
  const link = document.querySelector("[data-id='user-blog']");
  const pElem = document.querySelectorAll('p');
  const headings = document.querySelectorAll('.title');
  const modeText = document.querySelector('.mode-toggle-text');
  const modeImg = document.querySelector("[data-id='dark-mode-icon']");

  body.classList.toggle('body-toggle');
  userStats.classList.toggle('body-toggle');
  inputContainer.classList.toggle('input-toggle');
  inputContainer.classList.toggle('text-toggle');
  userContainer.classList.toggle('input-toggle');

  pElem.forEach(p => {
    p.classList.toggle('text-toggle');
  })
  headings.forEach(heading => heading.classList.toggle('text-toggle'))
})


export {
  clearInput,
  appendData,
  errorMsg
}
