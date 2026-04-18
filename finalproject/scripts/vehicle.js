// VEHICLES
import { vehicles } from "../data/vehicle.mjs";

const vehicleCard = document.querySelector("#vehicleCard");

// getting the data for vehicles
async function getVehicleData() {
  try {
    const data = await Promise.resolve(vehicles);
      // console.log(data);
    displayVehicles(data);
    
  } catch (error) {
      console.log(error);
  }
}

getVehicleData()

function displayVehicles(vehicles) {
  vehicles.forEach(vehicle => {
    const div = document.createElement('div')
    // vehicle name
    let vName = document.createElement('h3')
    vName.textContent = vehicle.name
    
    // vehicle image
    let image = document.createElement('img')
    image.setAttribute('src', `./images/${vehicle.imageURL}`)
    image.setAttribute('alt', vehicle.name)
    image.setAttribute('loading', 'lazy')
    
    // vehicle type
    let type = document.createElement('p') 
    type.innerHTML = `<span>Type: </span> ${vehicle.type}`
    
    // vehicle price
    let price = document.createElement('p')
    price.innerHTML = `<span>Price: </span> ${vehicle.price}`
    
    div.appendChild(vName)
    div.appendChild(image)
    div.appendChild(type)
    div.appendChild(price)
    vehicleCard.append(div)
  });
}
