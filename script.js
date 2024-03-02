//buttons
const popup = document.querySelector('.popup');
const bookNow = document.querySelectorAll('.book-now');
const discover = document.querySelector('.discover')
const sectionTours = document.querySelector('#section-tours');

//components
const subHeading = document.querySelector('.primery-title--sub');



//cursor
// const dev = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

const devHtml = document.querySelector('.dev');

const dev = 'DEVELOPER ';
const length = dev.length;

devHtml.innerHTML = '';
let i = 0;
let devCount = 0;
let isDev = true;

function startAnimLeftToRight() {

    const devAnim = setInterval(() => {

        let dev = '';

        if (devCount % 2 === 0) dev = 'DEVELOPER ';

        else dev = 'Web Dev ';

        devHtml.innerHTML = dev.slice(0, i++);

        if (i === dev.length) {
            clearInterval(devAnim);
            i = 0;
            devCount++;
            setTimeout(() => {
                startAnimLeftToRight();
            }, 3000);
        };

    }, 500);

}
startAnimLeftToRight();

//Event listeners
discover.addEventListener('click', () => {
    sectionTours.scrollIntoView({ block: 'center', behavior: "smooth" })
});
