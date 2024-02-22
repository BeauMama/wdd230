

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
    
    
	document.getElementById('temp').innerHTML = 'Temp: ' + fahrenheit + '&deg; F';
	document.getElementById('location').innerHTML =  d.name;
  
    
}
