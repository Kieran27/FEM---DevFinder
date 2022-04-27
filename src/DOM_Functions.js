
import { formatDate, appendName, appendBio, appendLocation } from './String_Methods';

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

  userLocation.textContent = appendLocation(data.location);
  userBlog.textContent = 'Not Available'
  userTwitter.textContent = 'Not Available';
  userPosition.textContent = 'Not Available';
}


export {
  clearInput,
  appendData
}
