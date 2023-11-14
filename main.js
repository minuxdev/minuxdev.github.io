const classToggler = (selector) => {
  const element = document.querySelector(selector);
  const container = ({ currentTarget }) => {
    currentTarget.classList.toggle("active");
  };
  element.addEventListener("click", container);
};

const menuToggler = (toggler, menu) => {
  const toggle = document.querySelector(toggler);
  const _menu = document.querySelector(menu);
  toggle.addEventListener("click", ({ currentTarget }) => {
    currentTarget.classList.toggle("active");
    _menu.classList.toggle("active");
  });
};
classToggler(".search-form");
menuToggler("#toggle", "nav ul");
