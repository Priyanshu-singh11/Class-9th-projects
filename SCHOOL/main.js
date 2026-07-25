const hamburg = document.getElementsByClassName('hamburg')[0]
const links = document.getElementById('links')

links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        links.classList.remove('active-links');
    }
});



hamburg.addEventListener('click', () => {
  links.classList.toggle('active-links')
})
document.body.addEventListener('click', (e) => {
  //console.log(!links.contains(e.target))
  //console.log(!hamburg.contains(e.target))
  // Check if the clicked area is outside the navbar or hamburger
  if (!links.contains(e.target) && !hamburg.contains(e.target)) {
    links.classList.remove('active-links');
  }
});