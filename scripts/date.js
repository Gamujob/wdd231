// Getting the year
const year = document.querySelector('#currentyear');
const today = new Date();

year.innerHTML = `@${today.getFullYear()} 💎Job Gamutambuli💎 Kampala, Uganda`;

// Getting the lastmodified
const modified = document.getElementById('lastModified');
modified.innerHTML = `Last Modification: ${document.lastModified}`;