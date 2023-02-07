const bg = document.getElementById('bg');
const mountain = document.getElementById('mountain_1');
const heading = document.getElementById("heading");

window.addEventListener('scroll' , ()=> {
    let scroll_Y = window.scrollY; 
    heading.style.transform = `translateX(${-scroll_Y*5}px)`;
    mountain.style.bottom = scroll_Y * -1 + 'px';
    bg.style.width = `${100+scroll_Y/15}%`;
})
