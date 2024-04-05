//buttons
const popup = document.querySelector('.popup');
const bookNow = document.querySelectorAll('.book-now');
const discover = document.querySelector('.discover')


const sectionTours = document.querySelector('#section-tours');
const sectionStrories = document.querySelector('.section-stories');

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

    if (techDisplay === techItems.length - 2) {
        techBtn.innerHTML = 'Less →'
    }
    else {
        techBtn.innerHTML = 'More →';
    };

    if (techDisplay >= techItems.length) {

        techDisplay = 2;

        renderTechs(techDisplay);

        techBtn.classList.remove('u-margin-top-mid');

        const element = techItems[0];
        const rect = element.getBoundingClientRect();
        const offset = rect.top - 200;

        window.scrollBy({
            top: offset,
        });

        return;
    }

    const topOffset = window.innerHeight > 800 ? 600 : 300;

    window.scrollBy({
        top: topOffset,
        behavior: 'smooth'
    });

    techBox.append(techItems[techDisplay++])
    techBox.append(techItems[techDisplay++])

    techBtn.classList.add('u-margin-top-mid');

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


//Contact form
const email = document.getElementById('email');
const recieptentName = document.getElementById('name');
const message = document.getElementById('message');

const button = document.getElementById('form_button');
const form = document.querySelector('.form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(email.value);
    console.log(recieptentName.value);
    console.log(message.value);

    (function () {
        emailjs.init({
            publicKey: "sBVnyjGeV75OFf_fE",
        });
    })();

    emailjs.send("arjun7180@gmail.com", "template_ywm8znt", {
        from_name: recieptentName.value,
        email_id: email.value,
        message: message.value
    }).then(function (response) {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!");
    }, function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
    });
})

//footer
const projects = document.querySelector('.projects');
const about = document.querySelector('.about');

projects.addEventListener('click', viewDown);
about.addEventListener('click', viewDown);

function viewDown() {
    setTimeout(() => {
        let scrollAmount = 300; // Default scroll amount

        // Check if the viewport width is below a certain threshold (e.g., tablet or smaller screens)
        if (window.innerWidth <= 900) { // Adjust the threshold as needed
            scrollAmount = 200; // Set the scroll amount to 100 for tablet or smaller screens
        }

        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth' // Optional, for smooth scrolling
        });
    }, 1000);
}


///////////////////////
//////Projects 


const moreProjectsBtn = document.querySelector('.more-btn');
const moreProjects = document.getElementById('more-projects');

const travellerBtn = document.querySelector('.traveller-btn');
const maptyBtn = document.querySelector('.mapty-btn');
const pigGameBtn = document.querySelector('.game-btn');

const popupImg = document.querySelector('.popup__img');
const projectLive = document.querySelector('.project-live');
const projectGit = document.querySelector('.project-github');


moreProjectsBtn?.addEventListener('click', () => {

    if (moreProjectsBtn.innerHTML === 'Show less') moreProjectsBtn.innerHTML = 'More';

    else moreProjectsBtn.innerHTML = 'Show less';

    moreProjects.classList.toggle('more-projects');

})


travellerBtn.addEventListener('click', () => {

    const heading = popup.querySelector('h2');

    heading.innerHTML = 'TRAVELLER';

    popup.querySelector('h3').innerHTML = 'Overview';

    popupImg.src = '../img/travellerImg.png';

    projectLive.href = "https://traveller-olive.vercel.app/";
    projectGit.href = "https://github.com/Arjunliljo/Traveller.git";

    popup.querySelector('p').innerHTML = `    
    This project intricately utilizes clip-path animations to craft visually captivating effects, enhancing user interface engagement. Through CSS, geometric shapes are defined with precision, utilizing properties like clip-path for shape manipulation and transitions for seamless animation. JavaScript augments interactivity by dynamically adjusting clip-path parameters based on user interactions. The project prioritizes optimization for browser rendering and animation smoothness, ensuring a seamless user experience. By leveraging advanced CSS techniques and JavaScript functionality, this project demonstrates adeptness in modern web animation, setting a high standard for visual design and interactivity.`;
})
maptyBtn.addEventListener('click', () => {

    const heading = popup.querySelector('h2');

    heading.innerHTML = 'The Mapty';

    popup.querySelector('h3').innerHTML = 'Overview';

    popupImg.src = '../img/maptyMapImg.jpg.png';

    popupImg.style.marginLeft = '2rem';

    projectLive.href = "https://arjunliljo.github.io/Mark/";
    projectGit.href = "https://github.com/Arjunliljo/Mark.git";

    popup.querySelector('p').innerHTML = `    
    This project exemplifies adeptness in object-oriented design, integrating mapping libraries, leveraging browser storage, ensuring responsiveness, and fostering interactivity. Through meticulous class organization and inheritance, it delivers a scalable and maintainable codebase. Integration with mapping libraries like Leaflet enriches user experience, allowing for interactive visualization of workout data. Utilization of browser localStorage ensures seamless data persistence across sessions, enhancing user convenience. The interface is designed to be responsive, adapting gracefully to various devices and screen sizes. Robust event handling mechanisms facilitate smooth user interactions, from form submissions to map interactions, providing a seamless and intuitive user experience. Overall, this project showcases a comprehensive skill set and attention to detail, making it a compelling asset for any software development role.`;

})
pigGameBtn.addEventListener('click', () => {

    const heading = popup.querySelector('h2');

    heading.innerHTML = 'Pig Game';

    popupImg.src = '../img/piggsGame.jpg';

    popupImg.style.marginLeft = '2rem';

    projectLive.href = "https://github.com/Arjunliljo/PigGame.git";
    projectGit.href = "https://arjunliljo.github.io/PigGame/";

    popup.querySelector('p').innerHTML = `    
The Pig Game is a simple yet engaging JavaScript-based web application. It offers an interactive experience where players roll dice, accumulating points while strategizing to avoid risks of losing their turn. The game employs dynamic DOM manipulation to update scores and display dice rolls instantly, enhancing user engagement. Utilizing JavaScript's event-driven architecture, it ensures smooth gameplay and responsive feedback to player actions. With a minimalist design and efficient code structure, the Pig Game delivers an immersive gaming experience across various devices. Its lightweight nature and seamless functionality make it an ideal choice for casual gamers and enthusiasts alike, highlighting the versatility and creativity achievable through JavaScript development`;

})


// navigation functionality
const checkBox = document.getElementById('navi__toggle');
const navLinkes = document.querySelectorAll('.navigation__item');


navLinkes.forEach((element, i) => {

    element.addEventListener('click', checkBoxFun(i, navLinkes.length));
});


function checkBoxFun(i, length) {

    return () => {

        if (checkBox.checked) checkBox.checked = false;
        else checkBox.checked = true;

        if (i === 0 || i === length - 1) return;

        setTimeout(() => {
            window.scrollBy({
                top: 230,
                behavior: 'smooth'
            });
        }, 500);
    }
}

function isTablet() {
    // Define the threshold for tablet screen width (you can adjust this according to your needs)
    var tabletWidth = 768; // Example threshold for tablets

    // Check if the screen width is less than or equal to the tablet threshold
    return window.innerWidth <= tabletWidth;
}

