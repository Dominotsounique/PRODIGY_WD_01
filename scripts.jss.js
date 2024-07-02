
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    console.log('Scrolling'); 
    if (window.scrollY > 50) {
        console.log('Adding scrolled class'); 
        navbar.classList.add('scrolled');
    } else {
        console.log('Removing scrolled class'); 
        navbar.classList.remove('scrolled');
    }
});
