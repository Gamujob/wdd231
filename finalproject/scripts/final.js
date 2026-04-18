// Getting the year
const year = document.querySelector('#currentyear');
const today = new Date();

year.innerHTML = `@${today.getFullYear()} 💎Job Gamutambuli💎 Kampala, Uganda`;

// Getting the lastmodified
const modified = document.getElementById('lastModified');
modified.innerHTML = `Last Modification: ${document.lastModified}`;

// DESIGNING A HAMBURG BUTTON
const hamBurger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamBurger.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamBurger.classList.toggle('open');
});

// FOR TIMES STAMP
const timestamp = document.querySelector('#loadtimestamp');
timestamp.value = new Date().toISOString();

// Local storage, and visit messages
const visitMessage = document.querySelector('#localStore')
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
