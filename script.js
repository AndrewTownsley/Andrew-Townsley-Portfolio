const navDisplay = () => {
  // Get Burger Icon
  const burger = document.querySelector('.burger');
  // Get the nav-list...
  const navList = document.querySelector('.nav-list');

     // Create EventListener for click on Burger,
  // turn on '.nav-active' on click...
  burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
  });
}

navDisplay();

