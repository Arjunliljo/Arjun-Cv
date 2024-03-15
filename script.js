//buttons
const popup = document.querySelector('.popup');
const bookNow = document.querySelectorAll('.book-now');
const discover = document.querySelector('.discover')
const sectionTours = document.querySelector('#section-tours');

//components
const subHeading = document.querySelector('.primery-title--sub');


/////////////////////////////////////////////
/////////// **** ANIMATIONS ****

/////////////////////////
/////////// Header

//contact-now
const contactBtn = document.querySelector('.header__contact-now');

setTimeout(() => {
    contactBtn.style.opacity = 1;
}, 3100);


//cursor
const devHtml = document.querySelector('.dev');
const cursor = document.querySelector('.cursor');

const dev = 'DEVELOPER ';
const length = dev.length;

devHtml.innerHTML = '';
let i = 0;
let devCount = 0;
let isDev = true;

function startAnimLeftToRight() {

    const devAnim = setInterval(() => {

        cursor.style.animation = 'none';
        let dev = '';

        if (devCount % 2 === 0) dev = 'DEVELOPER ';

        else dev = 'Web Dev ';

        devHtml.innerHTML = dev.slice(0, i++);

        if (i === dev.length) {
            clearInterval(devAnim);
            i = 0;
            cursor.style.animation = 'cursor-anim 1.5s ease-out .5s infinite';
            devCount++;
            setTimeout(() => {
                startAnimLeftToRight();
            }, 4000);
        };

    }, 500);

}
startAnimLeftToRight();

//About me
const aboutMe = document.querySelectorAll('.heading-secondary');
const body = document.querySelector('body');


//animation on feature box
const featureBox = document.querySelectorAll('.feature-box');
let deg = 0;
setInterval(() => {
    featureBox.forEach(el => el.style.backgroundImage = `linear-gradient(${deg++}deg, rgb(255, 6, 255), black)`);
    aboutMe.forEach(el => el.style.backgroundImage = `linear-gradient(${deg}deg,#610047, rgb(255, 6, 255)`);

}, 100);


///////////////////////
//////Projects 

const moreProjectsBtn = document.querySelector('.more-btn');
const moreProjects = document.getElementById('more-projects');


moreProjectsBtn.addEventListener('click', () => {

    if (moreProjectsBtn.innerHTML === 'Show less') moreProjectsBtn.innerHTML = 'More';

    else moreProjectsBtn.innerHTML = 'Show less';

    moreProjects.classList.toggle('more-projects');
})



/////////////////////////////////
/////////Functionality

const contactForm = document.querySelector('.section-book');
const resumeDownloadBtn = document.querySelector('.discover');


/////////////////HEADER

//contact button
contactBtn.addEventListener('click', () => {
    window.scrollTo({
        top: contactForm.offsetTop,
        behavior: 'smooth'
    });
});

//resume download
resumeDownloadBtn.addEventListener('click', () => {

    const downloadLink = document.createElement('a');
    downloadLink.href = './files/resume.png'; // Replace with the actual file path or URL
    downloadLink.download = 'resume.png'; // Replace with the desired filename and extension

    // Trigger a click event on the anchor element to initiate the download
    downloadLink.click();

});

//techs
const techBox = document.querySelector('.tech__box');
const techBtn = document.querySelector('.tech-btn');

const techItems = document.querySelectorAll('.techs');

let techDisplay = 2;

renderTechs(techDisplay);

techBtn.addEventListener('click', () => {
    console.log(techItems[techDisplay - 1]);
    techItems[techDisplay - 1].classList.add('u-margin-bottom-big');

    if (techDisplay >= techItems.length) {

    }
    else techDisplay += 2;

    renderTechs(techDisplay);
})

function renderTechs(num) {

    techBox.innerHTML = '';

    for (let i = 0; i < num; i++) {

        if (!techItems[i]) {
            return;
        }

        techBox.append(techItems[i]);
    }
    techItems[num - 1].classList.add('u-margin-bottom-big')
}
