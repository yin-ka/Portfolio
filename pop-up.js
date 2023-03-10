const data = [
  {
    projectTitle: 'Tonic',
    imageURL: './images/Snapshoot Portfoliowork1.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://yin-ka.github.io/Microverse/',
    sourceCode: 'https://github.com/yin-ka/Microverse',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './images/Snapshoot Portfolio1.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://yin-ka.github.io/Microverse/',
    sourceCode: 'https://github.com/yin-ka/Microverse',
  },
  {
    projectTitle: 'Facebook 360',
    imageURL: './images/Snapshoot Portfoliowork3.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://yin-ka.github.io/Microverse/',
    sourceCode: 'https://github.com/yin-ka/Microverse',
  },
  {
    projectTitle: 'Uber Navigation',
    imageURL: './images/Snapshoot Portfoliowork4.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://yin-ka.github.io/Microverse/',
    sourceCode: 'https://github.com/yin-ka/Microverse',
  },
];

document.querySelectorAll('.button').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  const popupCard = `
  <div class="project1" id="project1">
        <div class="popupTop">
            <div class="projectPopupTitle">
              <div class="titlePopup">
              
                <h3 class="comp-title">${data[id].projectTitle}</h3>
               
                <img
                id="popupClose${id}"
                class="popupClose"
                src="./images/Icon - Cancel.svg"
                alt="close-btn"
                />
              </div>
              <ul class="work-title">
                    <li class="client">CANOPY</li>
                    <li><img src="images/Counter.svg" alt="counter" /></li>
                    <li class="dim">Back End Dev</li>
                    <li><img src="images/Counter.svg" alt="counter" /></li>
                    <li class="dim">2015</li>
                </ul>
            </div>
            <img class="projectImage" src=${data[id].projectTitle} alt="project-image">
          <div class="popupDown">
          <div class="project-desc popupDesc">${data[id].description}</div>
            <div class="popupBtns">
              <ul class="tags">
                <li class="tag">${data[id].technologies[0]}</li>
                <li class="tag">${data[id].technologies[1]}</li>
                <li class="tag">${data[id].technologies[2]}</li>
                <li class="tag">${data[id].technologies[3]}</li>
              </ul>
              <hr>
              <div class="actionBtnPopup">
               <a class="btn btnPopup" href=${data[id].seeLive} target='blank'>
               See Live <img class="seeAll" src='/icons/Iconlive.svg' alt="seeLive"></a>
              <a class="btn btnPopup" href=${data[id].sourceCode} target='blank'>
              See Source <img class="seeAll" src='/icons/Groupsource.svg' alt="githubCode"></a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>`;
  occurence.addEventListener('click', () => {
    const body = document.getElementById('body');
    const section = document.createElement('section');
    section.innerHTML = popupCard;
    section.classList.add('hide');
    body.appendChild(section);
    section.classList.add('projectPopup');
    if (section.classList.contains('hide')) { section.classList.remove('hide'); }
    const hidePopup = document.getElementById(`popupClose${id}`);
    hidePopup.addEventListener('click', () => {
      body.removeChild(section);
    });
  });
});
