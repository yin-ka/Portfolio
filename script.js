const worksSection = document.getElementById('portfolio');
const worksDiv = document.createElement('div');
worksDiv.classList.add('works');
worksSection.appendChild(worksDiv);
worksDiv.innerHTML = `
<!--works1-->
<div class="works-1">
                <img class="works-1-div1-img" src="images/Snapshoot Portfolio1.svg" alt="project image">
                <img class="works-1-img-desktop" src="images/Portfoliowork1.png" alt="project image">
            <div class="works-1-div2">
                <div class="works-1-div2-1">
                    <div class="works-1-div2-1-a">
                        <h2 class="works-1-div2-1-a-p">Tonic</h2>
                    </div>
                    <div class="works-1-div2-1-b">
                        <ul class="works-1-div2-1-b-ul">
                            <li class="works-1-div2-1-b-ul-li-1">
                                <span class="works-1-div2-1-b-ul-li-1-sp">CANOPY</span>
                            </li>
                            <li class="works-1-div2-1-b-ul-li-2">
                                <img class="works-1-div2-1-b-ul-li-2-img" src="images/Counter.svg" alt="counter">
                            </li>
                            <li class="works-1-div2-1-b-ul-li-3">
                                <span class="works-1-div2-1-b-ul-li-3-sp">Back End Dev</span>
                            </li>
                            <li class="works-1-div2-1-b-ul-li-4">
                                <img class="works-1-div2-1-b-ul-li-4-img" src="images/Counter.svg" alt="counter">
                            </li>
                            <li class="works-1-div2-1-b-ul-li-5">
                                <span class="works-1-div2-1-b-ul-li-5-sp">2015</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="works-1-div2-2">
                    <p class="works-1-div2-2-p">A daily selection of privately 
                        personalized reads; no accounts or sign-ups required.
                    </p>
                </div>
                <ul class="works-1-div2-3">
                    <li class="works-1-div2-3-btn1" type="button">
                        <span class="works-1-div2-3-btn1-sp1">html</span>
                    </li>
                    <li class="works-1-div2-3-btn2" type="button">
                        <span class="works-1-div2-3-btn2-sp2">css</span>
                    </li>
                    <li class="works-1-div2-3-btn3" type="button">
                        <span class="works-1-div2-3-btn3-sp3">javaScript</span>
                    </li>
                </ul>
                <div class="works-1-div2-4">
                    <button id="0" class="works-1-div2-4-btn" type="button">
                        <span id="0" class="works-1-div2-4-btn-sp button">See Project</span>
                    </button>
                </div>
            </div>
        </div>
                <!--works2-->
        <div class="works-2">
            <div class="works-2-div1">
                <img class="works-2-div1-img" src="images/Snapshoot Portfolio2.svg" alt="project image">
                <img class="works-2-div1-img-desktop" src="images/Portfoliowork2.svg" alt="project image">
            </div>
            <div class="works-2-div2">
                <div class="works-2-div2-1">
                    <div class="works-2-div2-1-a">
                        <h2 class="works-2-div2-1-a-p">Multi-Post Stories</h2>
                    </div>
                    <div class="works-2-div2-1-b">
                        <ul class="works-2-div2-1-b-ul">
                            <li class="works-2-div2-1-b-ul-li-1">
                                <span class="works-2-div2-1-b-ul-li-1-sp">CANOPY</span>
                            </li>
                            <li class="works-2-div2-1-b-ul-li-2">
                                <img class="works-2-div2-1-b-ul-li-2-img" src="images/Counter.svg" alt="Counter">
                            </li>
                            <li class="works-2-div2-1-b-ul-li-3">
                                <span class="works-2-div2-1-b-ul-li-3-sp">Back End Dev</span>
                            </li>
                            <li class="works-2-div2-1-b-ul-li-4">
                                <img class="works-2-div2-1-b-ul-li-4-img" src="images/Counter.svg" alt="Counter">
                            </li>
                            <li class="works-2-div2-1-b-ul-li-5">
                                <span class="works-2-div2-1-b-ul-li-5-sp">2015</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="works-2-div2-2">
                    <p class="works-2-div2-2-p">Experimental content creation feature
                         that allows users to add
                         to an existing story over the course of a day 
                         without spamming their friends.
                        </p>
                </div>
                <ul class="works-2-div2-3">
                    <li class="works-2-div2-3-btn1" type="button">
                        <span class="works-2-div2-3-btn1-sp1">html</span>
                    </li>
                    <li class="works-2-div2-3-btn2" type="button">
                        <span class="works-2-div2-3-btn2-sp2">css</span>
                    </li>
                    <li class="works-2-div2-3-btn3" type="button">
                        <span class="works-2-div2-3-btn3-sp3">javaScript</span>
                    </li>
                </ul>
                <div class="works-2-div2-4">
                    <button id="1" class="works-2-div2-4-btn" type="button">
                        <span id="1" class="works-2-div2-4-btn-sp button">See Project</span>
                    </button>
                </div>
            </div>
        </div>
        <!--works3-->
        <div class="works-3">
            <div class="works-3-div1">
                <img class="works-3-div1-img" src="images/Snapshoot Portfolio3.svg" alt=" projrct imsgr">
                <img class="works-3-div1-img-desktop" src="images/Portfoliowork3.svg" alt="project image">
            </div>
            <div class="works-3-div2">
                <div class="works-3-div2-1">
                    <div class="works-3-div2-1-a">
                        <h2 class="works-3-div2-1-a-p">Facebook 360</h2>
                    </div>
                    <div class="works-3-div2-1-b">
                        <ul class="works-3-div2-1-b-ul">
                            <li class="works-3-div2-1-b-ul-li-1">
                                <span class="works-3-div2-1-b-ul-li-1-sp">CANOPY</span>
                            </li>
                            <li class="works-3-div2-1-b-ul-li-2">
                                <img class="works-3-div2-1-b-ul-li-2-img" alt="" src="images/Counter.svg">
                            </li>
                            <li class="works-3-div2-1-b-ul-li-3">
                                <span class="works-3-div2-1-b-ul-li-3-sp">Back End Dev</span>
                            </li>
                            <li class="works-3-div2-1-b-ul-li-4">
                                <img class="works-3-div2-1-b-ul-li-4-img" alt="" src="images/Counter.svg">
                            </li>
                            <li class="works-3-div2-1-b-ul-li-5">
                                <span class="works-3-div2-1-b-ul-li-5-sp">2015</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="works-3-div2-2">
                    <p  class="works-3-div2-2-p">
                        Exploring the future of media in Facebook's first 
                        Virtual Reality app;
                         a place to discover and enjoy 360 photos 
                         and videos on Gear VR.

                    </p>
                </div>
                <ul class="works-3-div2-3">
                    <li class="works-3-div2-3-btn1" type="button">
                        <span class="works-3-div2-3-btn1-sp1">html</span>
                    </li>
                    <li class="works-3-div2-3-btn2" type="button">
                        <span class="works-3-div2-3-btn2-sp2">css</span>
                    </li>
                    <li class="works-3-div2-3-btn3" type="button">
                        <span class="works-3-div2-3-btn3-sp3">javaScript</span>
                    </li>
                </ul>
                <div class="works-3-div2-4">
                    <button id="2" class="works-3-div2-4-btn" type="button">
                        <span id="2" class="works-3-div2-4-btn-sp button">See Project</span>
                    </button>
                </div>
            </div>
        </div>
        <!--works4 view-->
        <div class="works-4">
            <div class="works-4-div1">
                <img class="works-4-div1-img" alt="project image" src="images/Snapshoot Portfolio4.svg">
                <img class="works-4-div1-img-desktop" alt="project image" src="images/Portfoliowork4.svg">
            </div>
            <div class="works-4-div2">
                <div class="works-4-div2-1">
                    <div class="works-4-div2-1-a">
                        <h2 class="works-4-div2-1-a-p">Uber Navigation</h2>
                    </div>
                    <div class="works-4-div2-1-b">
                        <ul class="works-4-div2-1-b-ul">
                            <li class="works-4-div2-1-b-ul-li-1">
                                <span class="works-4-div2-1-b-ul-li-1-sp">Uber</span>
                            </li>
                            <li class="works-4-div2-1-b-ul-li-2">
                                <img class="works-4-div2-1-b-ul-li-2-img" src="images/Counter.svg" alt="counter">
                            </li>
                            <li class="works-4-div2-1-b-ul-li-3">
                                <span class="works-4-div2-1-b-ul-li-3-sp">Lead Developer</span>
                            </li>
                            <li class="works-4-div2-1-b-ul-li-4">
                                <img class="works-4-div2-1-b-ul-li-4-img" src="images/Counter.svg" alt="counter">
                            </li>
                            <li class="works-4-div2-1-b-ul-li-5">
                                <span class="works-4-div2-1-b-ul-li-5-sp">2018</span>
                            </li>
                        </ul>
                </div>
                <div class="works-4-div2-2">
                    <p class="works-4-div2-2-p">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p>
                </div>
                <ul class="works-4-div2-3">
                    <li class="works-4-div2-3-btn1" type="button">
                        <span class="works-4-div2-3-btn1-sp1">html</span>
                    </li>
                    <li class="works-4-div2-3-btn1-ruby" type="button">
                        <span class="works-4-div2-3-btn1-sp1-ruby">Ruby on rails</span>
                    </li>
                    <li class="works-4-div2-3-btn2" type="button">
                        <span class="works-4-div2-3-btn2-sp2">css</span>
                    </li>
                    <li class="works-4-div2-3-btn3" type="button">
                        <span class="works-4-div2-3-btn3-sp3">javaScript</span>
                    </li>
                </ul>
                <div class="works-4-div2-4">
                    <button id="3" class="works-4-div2-4-btn" type="button">
                        <span id="3" class="works-4-div2-4-btn-sp button">See Project</span>
                    </button>
                </div>
            </div>
        </div>
`;

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
