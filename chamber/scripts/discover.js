import {places} from "../data/places.mjs";
console.log(places)

// Getting the element on the HTML
const cardPlaces = document.querySelector('#cardplaces');

DisplayPlaceCard(places)

// creating the function to display the place cards
function DisplayPlaceCard(places) {
  places.forEach(place => {
    // create Elements to hold data for the places
    const div = document.createElement('div')
    let placeName = document.createElement('h2')
    let image = document.createElement('img')
    let descript = document.createElement('p')
    let address = document.createElement('address')
    
    // display on the website
    placeName.innerHTML = place.name
    image.setAttribute('src', place.photo_url)
    image.setAttribute('alt', place.name)
    image.setAttribute('width', 300)
    address.innerHTML = `<strong>Address:</strong> ${place.location}`
    descript.innerHTML = place.description
    

    // add to the created elements
    div.appendChild(placeName)
    div.appendChild(image)
    div.appendChild(descript)
    div.appendChild(address)
    cardPlaces.append(div)
  });
}

// Local storage, and visit messages
const visitMessage = document.querySelector('#visitMessage')
const lastVisit = localStorage.getItem('lastVisit')
const now = Date.now()

let message = "";

if (!lastVisit) {
  // this is for the first visit
  message = `Welcome! Let us know if you have any question.`
} else {
  const lastVt = Number(lastVisit)
  const diffTime = now - lastVt

  const oneDay = 1000 * 60 * 60 * 24
  const diffDays = Math.floor(diffTime / oneDay)

  if (diffDays < 1) {
    message = `Back so soon! Awesome!`
  } else if (diffDays === 1) {
    message = `You last visited 1 day ago.`
  } else {
    message = `You last visited ${diffDays} days ago.`
  }
}

// displaying
visitMessage.textContent = message;

// save the current visit
localStorage.setItem('lastVisit', now);