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

// FOR TIMES STAMP
const timestamp = document.querySelector('#loadtimestamp');
timestamp.value = new Date().toISOString();

// THE DIALOG
const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');
const openButton4 = document.querySelector('#openButton4');

const myModal = document.querySelector('#myModal');
const myModalText = document.querySelector('#myModalText');

const closeModal = document.querySelector('#closeModal');
// modal.showModal(); // display the modal dialog right away.
// Usually you will want to wait for a user action to show the modal dialog
openButton1.addEventListener('click', () => {
  myModalText.innerHTML = `NP Membership Level is for non profit organisations and there is no fee`
  myModal.showModal();
});

openButton2.addEventListener('click', () => {
  myModalText.innerHTML = `Bronze Membership Level needs a small fee for basic "insider" status like digital content`
  myModal.showModal();
});

openButton3.addEventListener('click', () => {
  myModalText.innerHTML = `Silver Membership Level is the most popular tier and offers tangible perks like merchandise and early event access`
  myModal.showModal();
});

openButton4.addEventListener('click', () => {
  myModalText.innerHTML = `Gold Membership Level is for exclusive VIP with high-cost tier for major donors including private meetings or public recognition`
  myModal.showModal();
});

closeModal.addEventListener('click', () => {
  myModal.close();
})