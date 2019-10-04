const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = dociment.querySelector('.nav-links');
    const navLinks = document.qierySelectorAll('.nav-linls li');
    //toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //animate links
    navLinks.forEach((link,index) => {
        console.log(index);
        
    });

}
navSlide();