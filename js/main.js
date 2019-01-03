const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const portfolioLink = document.getElementById('portfolio-link');
const contactLink = document.getElementById('contact-link');

// homeLink.addEventListener('click', scrollTo(homeSection));
// aboutLink.addEventListener('click', scrollTo(aboutSection));
// portfolioLink.addEventListener('click', scrollTo(portfolioSection));
// contactLink.addEventListener('click', scrollTo(contactSection));

function scrollTo(section) {
    section.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
}