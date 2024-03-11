const weatherIcon = document.querySelector('#weather-icon');

function weatherBalloon( cityID ) {
    var key = '5e83879f6a3a3c4e00ff698e049f9146';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}
  
  window.onload = function() {
    weatherBalloon( 5784607 );
  }

  function drawWeather( d ) {
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    var windChill = Math. round(35.74+(.6215*fahrenheit) -(35.75*(d.wind.speed)**.16)+(.4275*fahrenheit*(d.wind.speed)**.16));
    var desc = d.weather[0].description;
	var iconsrc = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
   
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather imag');
    
	document.getElementById('temp').innerHTML = fahrenheit + '&deg; F';
	document.getElementById('desc').innerHTML = desc;
	document.getElementById('location').innerHTML = 'Weather For: ' + d.name;

  
    
}
