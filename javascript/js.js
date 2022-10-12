


function toggleMenu(toggleBtn, containerMenu, listItems, animationName) {
    /**
     * Shows and hides the menu on small or medium devices.
     * @toggle {string}     -   is the element that will trigger an click event;
     * @containerMenu {string}  -   is a list menu container;
     * @listItems {string}  -   are itens of a list;
     * @animationName {string}  -   is the animation to be applied in the showing time.
     */


    let _toggleBtn = document.querySelector(toggleBtn);
    let sideMenu = document.querySelector(containerMenu);
    let menuLinks = document.querySelectorAll(listItems);

    _toggleBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');

        menuLinks.forEach((val, index) => {
            console.log(index / 8 + .4)
            val.style.animation 
            ? (val.style.animation = "")
            : (val.style.animation = `${animationName} .6s ease forwards ${index / 8 + .35}s`)
        })
    })

}


function onScrollAnimation(selector) {
    document.addEventListener('scroll', () => {

        let el = document.querySelectorAll(selector);
        let windowHeight = window.innerHeight;
        let inOffset = windowHeight - (windowHeight / 3);
        let outOffset = windowHeight - (windowHeight * ( 4 / 5));

        el.forEach((val, index) => {
            let bound = val.getBoundingClientRect();
            if (bound.top <= inOffset && bound.top > -100 ) {
                val.classList.add('enter');
            } else {
                val.classList.remove('enter')
            }
        })
    })
}

onScrollAnimation('.section');

toggleMenu(
    '#toggle', '.menu', '.menu li', 'fadeIn'
);

