
const formatDate = (date) => {
  console.log(date)
  const dateRegex = /^[\d]{4}[-][\d]{2}[-][\d]{2}/g
  const dashRegex = /[-]/g;
  const match = date.match(dateRegex).join('').replace(dashRegex, " ");
  return match;
}

const appendName = (data) => {
  if (!data.name) {
    return data.login
  }
  return data.name
}

const appendBio = (bio) => {
  if (!bio) {
    return 'This user has no bio'
  }
  return bio;
}

const appendLocation = (location) => {
  if (!location) {
    return 'Not Available';
  }
  return location;
}

export {
  formatDate,
  appendName,
  appendBio,
  appendLocation
}
