fetch ('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=8c90844a9e11a877c90ae40480aebcc2&units=metric')

.then(response => response.json())
.then(data => {
    console.log(data);
    condition.textContent = "Current Condition: "+data.main.temp+"\u00B0C" + "..." + data.clouds;
    wind.textContent = "Wind: "+ data.wind.speed + "..." + data.wind.deg;
    
});

more.addEventListener('click', function(){
    document.getElementById('more-testimonials').style.display = "block"; 
});
