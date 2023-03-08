const menuIconMobile = document.querySelector('.social_media_icons');
const menu = document.querySelector('.nav-item');
const menuLinks = document.querySelectorAll('.nav-item li a');

const isActiveClassExisted = (element) => element.classList.contains('active');

const refreshIcon = () => {
  if (isActiveClassExisted(menu)) {
    menuIconMobile.setAttribute('src', 'icons/Iconclose.svg');
  } else {
    menuIconMobile.setAttribute('src', 'icons/Union.png');
  }
};
const openMenu = () => {
  menu.classList.toggle('active');
  refreshIcon();
};

const closeMenu = () => {
  menu.classList.remove('active');
  refreshIcon();
};

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

// contact form validation ------------>
const email = document.querySelector('.email');
const form = document.querySelector('.form-1');
const error = document.querySelector('.error');

function isItUppercase(value) {
  if (value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (isItUppercase(email.value)) {
    error.textContent = '';
    email.style.border = '1px solid #cfd8dc';
  } else {
    e.preventDefault();
    email.style.border = '3px solid red';
    error.textContent = 'X   Email should be in lowerCase';
  }
});