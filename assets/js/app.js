


const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})


const butn = document.getElementsByClassName('btn-primary')[0]
console.log(butn)

butn.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() =>{
        ripples.remove()
    }, 1000);

})
