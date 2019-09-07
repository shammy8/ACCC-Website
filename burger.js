//slide the menu out/in when hamburger button is clicked
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ( )=> {
        nav.classList.toggle('nav-active');
    });
}


//scroll to the next section when arrow or title is clicked
const downButton = () => {
    const down = document.querySelector('.arrow-down');
    const title = document.querySelector('#main-title-text');
    down.addEventListener('click', () => {
        document.getElementById('sunday').scrollIntoView({behavior: 'smooth'});
    });
    title.addEventListener('click', () => {
        document.getElementById('sunday').scrollIntoView({behavior: 'smooth'});
    });
}


//animate the down arrow when mouse is over the arrow or the title
const downButtonAnimate = () => {
    const down = document.querySelector('.arrow-down');
    const title = document.querySelector('#main-title-text');
    title.addEventListener('mouseover', () => {
        down.classList.toggle('arrow-down-hover');
    });
    title.addEventListener('mouseout', () => {
        down.classList.toggle('arrow-down-hover');
    });
}

navSlide();
downButton(); 
downButtonAnimate();