
const key = '5e83879f6a3a3c4e00ff698e049f9146'
const url = 'https://api.openweathermap.org/data/2.5/forecast?id=5784607&appid=5e83879f6a3a3c4e00ff698e049f9146'

async function getWeather(){
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch (error){
    console.error('Error Fetching weather data', error)
  }
}


// Function to display weather information
async function displayWeather() {
  const weatherContainer = document.getElementById('weather-container');
  const weatherData = await getWeather();
  const displayedDates = new Set(); // To keep track of displayed dates



  // Iterate over the forecast data
  for (let i = 0; i < weatherData.list.length; i++) {
      const forecast = weatherData.list[i];
      const date = new Date(forecast.dt * 1000); // Convert timestamp to Date object
      const dateString = date.toLocaleDateString('en-US', { weekday: 'long' });
      
      if (!displayedDates.has(dateString)) {
          const fahrenheit = Math.round(((parseFloat(forecast.main.temp)-273.15)*1.8)+32); 
          const windChill = Math. round(35.74+(.6215*fahrenheit) -(35.75*(forecast.wind.speed)**.16)+(.4275*fahrenheit*(forecast.wind.speed)**.16));
          const temperature = fahrenheit;
          const desc = forecast.weather[0].description;
          const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
         
          
       
          const weatherCard = document.createElement('div');
          weatherCard.classList.add('weather-card');
          weatherCard.innerHTML = `
              <h3>${dateString}</h3>
              <p>${temperature} °F</p>
              <p>Windchill: ${windChill} °F <p>
              <p>${desc}</p>
              <figure>
              <img src= ${iconsrc} atl= "weather icon">
              <figcaption></figcaption>
          </figure>
            
          `;
          weatherContainer.appendChild(weatherCard);

          // Add the date to the set of displayed dates
          displayedDates.add(dateString);
      }

      // Stop iterating if the forecast for the next day has been displayed
      if (displayedDates.size >= 3) {
          break;
      }
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}/${day}/${year}`;
}


displayWeather();

/*
function weatherBalloon( cityID ) {
    var key = '5e83879f6a3a3c4e00ff698e049f9146';
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}
  
  window.onload = function() {
    weatherBalloon(5784607);
  }

 

 
  function drawWeather( d ) {
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
  var windChill = Math. round(35.74+(.6215*fahrenheit) -(35.75*(d.wind.speed)**.16)+(.4275*fahrenheit*(d.wind.speed)**.16));
    
 
	document.getElementById('temp').innerHTML = 'Current Temp: ' + fahrenheit + '&deg; F';
	document.getElementById('location').innerHTML =  d.name;
  
  document.getElementById('windspeed').innerHTML = 'Wind Speed: ' + d.wind.speed;
   if (fahrenheit <= 50 & d.wind.speed > 3)
    {document.getElementById('windchill').innerHTML = 'Wind Chill: ' + windChill + '&deg; F'; 

    }else {
        document.getElementById('windchill').innerHTML = 'Wind Chill: ' + 'N/A';
        
    }
  
    document.getElementById('desc').innerHTML = d.weather[0].description; 
}

*/

