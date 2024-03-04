//buttons
const popup = document.querySelector('.popup');
const bookNow = document.querySelectorAll('.book-now');
const discover = document.querySelector('.discover')
const sectionTours = document.querySelector('#section-tours');

//components
const subHeading = document.querySelector('.primery-title--sub');


/////////////////////////////////////////////
/////////// **** ANIMATIONS ****


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
