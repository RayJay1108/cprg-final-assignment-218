const toggleBTN = document.getElementById('toggle'); 
const mainMenu = document.getElementById('navigation');

toggleBTN.addEventListener('click', function() {
    toggleBTN.classList.toggle('open');
    mainMenu.classList.toggle('active');
});