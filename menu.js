const menuIconMobile = document.querySelector('.social_media_icons');
const menu = document.querySelector('.nav-item');
const menuLinks = document.querySelectorAll('.nav-item li a');

const isActiveClassExisted = (element) => element.classList.contains('active');

const refreshIcon = () => {
  if (isActiveClassExisted(menu)) {
    menuIconMobile.setAttribute('src', 'icons/Icon - Cancelclose2.png');
  } else {
    menuIconMobile.setAttribute('src', 'icons/Union.png');
  }
};
export const openMenu = () => {
  menu.classList.toggle('active');
  refreshIcon();
};

export const closeMenu = () => {
  menu.classList.remove('active');
  refreshIcon();
};

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});