
/* TOGGLE FUNCTION */
function toggleControl(toggle, container, menu) {
    let sidebar = document.querySelector(menu);
    let _container = document.querySelector(container);
    let toggleBtn = document.querySelector(toggle);
    sidebar.classList.toggle('active');
    _container.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}


// CHANGE HEADER CLASS TO STICKY
function headerSticky(header) {
    let _header = document.querySelector(header);
    window.addEventListener('scroll', () => {
        _header.classList.toggle('sticky', window.scrollY > 0);
    });
}

