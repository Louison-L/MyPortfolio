//Navigation bar effects on scroll

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >0);

});

//Services Section -Modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns= document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click",() => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) =>{
    modalCloseBtns.addEventListener("click",() => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio Section -Modal

//Our Client -Swiper


// Website dark/light theme

// scroll to top button

// Navigation menu items active on page scroll

// Navigation Responsive menu toggle


// scroll reveal animations

//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations