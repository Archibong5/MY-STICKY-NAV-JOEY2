const header = document.querySelector('h1');
let hue = 0;


function textShadow(){
  const now = new Date();
  const millseconds = now.getMilliseconds();
  const milliDegrees = ((millseconds / 1000) * 360) + 90;

  hue++
  header.style.textShadow = `2px 2px 8px hsl(${hue}, 50%, 50%)`;
}


setInterval(textShadow, 100);


// PART TWO
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
  if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  } else{
    document.body.classList.remove('fixed-nav');
  }
}


window.addEventListener('scroll', fixNav);
