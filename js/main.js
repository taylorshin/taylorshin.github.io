const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

homeSection.addEventListener('click', homeSection.scrollIntoView({behavior: 'instant'}));
aboutSection.addEventListener('click', aboutSection.scrollIntoView({behavior: 'instant'}));
portfolioSection.addEventListener('click', portfolioSection.scrollIntoView({behavior: 'instant'}));
contactSection.addEventListener('click', contactSection.scrollIntoView({behavior: 'instant'}));
