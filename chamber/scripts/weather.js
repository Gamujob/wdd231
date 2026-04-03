// SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const highTemp = document.querySelector('#highTemp');
const lowTemp = document.querySelector('#lowTemp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "fd6ab8616c92dd2e7c27965ae2cf5805"
const myLat = "0.3288206535470888"
const myLong = "32.59155441293263"

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

// Try to Grab the current weather data
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// DISPLAY THE JSON DATA ON THE WEB PAGE
function displayResults(data) {
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('src', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg;F`
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;F`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    // HERE IS FOR TIME
    const unixTimestampR = data.sys.sunrise
    const dateR = new Date(unixTimestampR * 1000);
    const timeStringR = dateR.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    const unixTimestampS = data.sys.sunset
    const dateS = new Date(unixTimestampS * 1000);
    const timeStringS = dateS.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    sunrise.innerHTML = `Sunrise: ${timeStringR}`
    sunset.innerHTML = `Sunset: ${timeStringS}`

}

apiFetch();
