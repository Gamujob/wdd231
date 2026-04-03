// This is for the daily forecast
// SELECT THE HTML ELEMENTS IN THE DOCUMENT
const weatherToday = document.querySelector('#weatherToday');
const tomorrow = document.querySelector('#tomorrow');
const nextDay = document.querySelector('#nextDay');

// CREATE THE REGUIRED VARIABLES FOR THE URL
const key = "fd6ab8616c92dd2e7c27965ae2cf5805"
const lat = "0.36109240645895535"
const long = "32.585374607081846"
// const dayCount = "1"

// GET THE URL
const dailyURL = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`

async function apiDailyFetch() {
  try {
    const response = await fetch(dailyURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayDailyResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  };
}

function displayDailyResults(data) {
    weatherToday.innerHTML = `Today: <strong>${data.list[0].main.temp}&deg;F</strong>`;
    tomorrow.innerHTML = `Saturday: <strong>${data.list[1].main.temp}&deg;F</strong>`;
    nextDay.innerHTML = `Sunday: <strong>${data.list[2].main.temp}&deg;F</strong>`;
};

apiDailyFetch();