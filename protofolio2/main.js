const hamburg = document.getElementsByClassName('hamburg')[0];
const links = document.getElementsByClassName('links')[0]
hamburg.addEventListener('click', () => {
  links.classList.toggle('show-navbar')
})



const light = document.getElementsByClassName('bright')[0];
const body = document.getElementById('home-body')
light.addEventListener('click', () => {
  body.classList.toggle('bg-black')
})



/*
color:#0A0A0A;
background:#FDFDFD;
*/