// Get the profile menu and toggle button elements
let profileMenu = document.getElementById('profileMenu');
let toggleButton = document.getElementById('toggleButton');

// Function to toggle the menu
function toggleMenu(event) {
  event.stopPropagation(); // Prevent the click from closing the menu immediately
  profileMenu.classList.toggle("open-menu");
}

// Function to close the menu if clicking outside of it
function closeMenu(event) {
  if (!profileMenu.contains(event.target) && !toggleButton.contains(event.target)) {
    profileMenu.classList.remove("open-menu");
  }
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleMenu);
// Event listener for clicking outside the menu
document.addEventListener('click', closeMenu);


// show more
let sideActivity = document.getElementById('sidebar-activity');
let moreLink = document.getElementById('ShowMoreLink');


function toogleActivity() {
  sideActivity.classList.toggle("open-activity");

  if (sideActivity.classList.contains("open-activity")) {
    moreLink.innerHTML = "Show less <b>-</b>";
  }
  else {
    moreLink.innerHTML = "Show more <b>+</b>";
    
  }
    
}

