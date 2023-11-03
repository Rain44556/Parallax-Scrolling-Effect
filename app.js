const translate =document.querySelectorAll(".translate");
const title = document.querySelector(".title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const img_section = document.querySelector(".imgSection");
const opacity = document.querySelectorAll(".opacity");
const bottom_line = document.querySelector(".bottom-line");



let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll',()=>{
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();


    translate.forEach(element =>{
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll*speed}px)`;
    });

    opacity.forEach(element =>{
    element.style.opacity = scroll/(sectionY.top + section_height);
    })

    title.style.opacity = -scroll / (header_height/2) +1;
    shadow.style.height = `${scroll*0.5+350}px`;
    content.style.transform = `translateY(${scroll/(section_height + sectionY.top) * 50-50}px)`;
    img_section.style.transform=`translateY(${scroll/(section_height+sectionY.top) * -50 + 50}px)`;
    bottom_line.style.width = `${scroll/(sectionY.top + section_height) * 27}%`;


})