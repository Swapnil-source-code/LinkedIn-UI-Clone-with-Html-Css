
let profileMenu = document.getElementById('profileMenu');

function toggleMenu(){
  profileMenu.classList.toggle("open-menu");
}


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



