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

//  Local  storage---------------->

const nameInput = form.querySelector('#fullname');
const emailInput = form.querySelector('#from-email');
const messageInput = form.querySelector('#text-area');

// eslint-disable-next-line func-names
const storeFormData = function () {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  storeFormData();
});

nameInput.addEventListener('input', storeFormData);
emailInput.addEventListener('input', storeFormData);
messageInput.addEventListener('input', storeFormData);

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});
