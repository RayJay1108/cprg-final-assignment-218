fetch ('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=8c90844a9e11a877c90ae40480aebcc2&units=metric')

.then(response => response.json())
.then(data => {
    console.log(data);
    condition.textContent = "Current Condition: "+data.main.temp+"\u00B0C";
    wind.textContent = "Wind: "+ data.wind.speed;
    icon.src = ("https://openweathermap.org/img/wn/") + data.weather[0].icon + "@2x.png";

    
});

more.addEventListener('click', function(){
    document.getElementById('more-testimonials').style.display = "block"; 
});

less.addEventListener('click', function(){
    document.getElementById('more-testimonials').style.display = "none"; 
});


const toggleBTN = document.getElementById('toggle'); 
const mainMenu = document.getElementById('navigation');

toggleBTN.addEventListener('click', function() {
    toggleBTN.classList.toggle('open');
    mainMenu.classList.toggle('active');
})


/*------view details------- */


details2.addEventListener('click', function(){
    document.getElementById('swing').style.display = "block";
});

hide2.addEventListener('click', function(){
    document.getElementById('swing').style.display = "none";
});



details1.addEventListener('click', function(){
    document.getElementById('ocean').style.display = "block";
});

hide1.addEventListener('click', function(){
    document.getElementById('ocean').style.display = "none";
});


details3.addEventListener('click', function(){
    document.getElementById('garden').style.display = "block";
});

hide3.addEventListener('click', function(){
    document.getElementById('garden').style.display = "none";
});



