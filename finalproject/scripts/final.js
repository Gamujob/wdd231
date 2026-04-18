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
