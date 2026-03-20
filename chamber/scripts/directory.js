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

// creating the card
const cards = document.querySelector('#card');
const listCard = document.querySelector('#listCard');

// This is the normal working as grid
async function getChamberData() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayChamberCard(data.members);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
  } catch (error) {
    cards.textContent = `could not load your file`;
    // console.error(`could not load JSON: ${error}`);
  }
}

// This is for the list view
async function getChamberForList() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayListView(data.members);

    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    }

  } catch (error) {
    listCard.textContent = `The file could not be loaded`
  }  
}

getChamberData();

// This is for the grid view
const gridView = document.querySelector('#grid');
gridView.addEventListener( 'click', () => {
  getChamberData();
})

// This is for the list view
const listView = document.querySelector('#list');
listView.addEventListener('click', () => {
  getChamberForList();
})

function displayChamberCard(members) {
  document.querySelector('#card').innerHTML = "";
  document.querySelector('#listCard').innerHTML ="";
  members.forEach(member => {
    let section = document.createElement('section');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let location = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let memLevel = document.createElement('p');

    title.textContent = `${member.name}`;
    image.setAttribute('src', member.image);
    image.setAttribute('alt', member.name);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '200');
    image.setAttribute('height', '110')
    address.textContent = `${member.address}`;
    location.textContent = `${member.location}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;
    memLevel.innerHTML = `Membership level: <strong>${member.membershipLevel}</strong>`;

    section.appendChild(title);
    section.appendChild(image);
    section.appendChild(address);
    section.appendChild(location);
    section.appendChild(phone);
    section.appendChild(url);
    section.appendChild(memLevel);

    cards.append(section);
  });
}

function displayListView(members) {
  document.querySelector('#card').innerHTML = "";
  document.querySelector('#listCard').innerHTML ="";
  members.forEach(member => {
    let div = document.createElement('div');
    let title = document.createElement('h2');
    let address = document.createElement('p');
    let location = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let memLevel = document.createElement('p');

    title.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    location.textContent = `${member.location}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;
    memLevel.innerHTML = `Membership Level: <strong>${member.membershipLevel}</strong>`;

    div.appendChild(title);
    div.appendChild(address);
    div.appendChild(location);
    div.appendChild(phone);
    div.appendChild(url);
    div.appendChild(memLevel);

    listCard.append(div)
  });
}