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
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme =() => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon =() => document.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-Icon");

if(savedTheme){
    document.body.classList[savedTheme == "dark" ? "add" : "remove"] ("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
    
}

// scroll to top button

const scrollTopBtn = document.querySelector(".scrollTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active",window.scrollY >500);
})

scrollTopBtn.addEventListener("click", () =>{
    document.body.scrollTop =0;
    document.documentElement.scrollTop =0;
});


// Navigation menu items active on page scroll

window.addEventListener("scroll",() =>{
    const sections =document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let selectionTop =current.offsetTop - 50;
        let id =current.getAttribute("id");

        if(scrollY > selectionTop && scrollY <=selectionTop + selectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }

            else{
                document.querySelector (".nav-items a[href*=" + id + "]").classList.remove("active");
            }

    });
});

// Navigation Responsive menu toggle


// scroll reveal animations

//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations