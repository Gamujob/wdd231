// Designing the hamburger button to do it's work
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

// This is for the footer
const course = document.querySelector('#course');
course.textContent = `WDD231 Class Project`;

const myName = document.querySelector('#name');
myName.textContent = `Job Gamutambuli`;

const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `@${today.getFullYear()} Gamu Chamber of Commerce`;

const modified = document.querySelector('#lastModified');
modified.innerHTML = `Last Modified: ${document.lastModified}`
