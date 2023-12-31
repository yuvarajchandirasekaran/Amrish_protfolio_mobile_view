// Targetting elems:-
const homeNav = document.querySelector(".home-nav");

const aboutNav = document.querySelector(".about-nav");

const skillsNav = document.querySelector(".skills-nav");

const projectNav = document.querySelector(".project-nav");

const contactNav = document.querySelector(".contact-nav");

const modalContent = document.querySelector(".about-modal-overlay");

const moreBtn = document.querySelector(".more-btn");

const closeBtn = document.querySelector("#close");

const allProject = document.querySelector(".all-projects")

const image = document.querySelector(".project-image");

const sendMailBtn = document.querySelector(".mail-btn");

// Projects array:-
const Projects = [
    {
        id: 1,
        image: "./portfolio-images/emi-calc.png",
        name: "EMI-Calculator",
        description: "An EMI calculator web application for quick and accurate loan repayment calculations",
        github: "https://amrishsekar.github.io/EMI-calculator/"
    },
    {
        id: 2,
        image: "./portfolio-images/keyboard.png",
        name: "Keyboard",
        description: "Create a user-friendly online virtual keyboard for seamless typing on any device.",
        github: "https://amrishsekar.github.io/Online-Keyboard/"
    },
    {
        id: 3,
        image: "./portfolio-images/text-to-speech-convertor.png",
        name: "Text-to-Speech",
        description: "Develop a versatile text-to-speech converter for seamless audio content generation",
        github: "https://amrishsekar.github.io/Text-to-speech-convertor/"
    }
]

// Creating new array to push "Projects" array:-
let projectpushedArray = []
for(let i = 0; i < Projects.length; i++){
    projectpushedArray.push(Projects[i])
    // calling the function, that I declared below this loop:-
    projectElement(projectpushedArray)
}

// function for "My Projects.!" portion:-
function projectElement(data){
    
    let projectHTML = data.map((elem) => {

        return `
        <div class="project-box">
            <img class="project-image" src=${elem.image}>
            <div class="project-details">
                <h2 class="project-title">${elem.name}</h2>
                <p class="project-description">
                    ${elem.description}
                </p>
                <a href=${elem.github} target="_blank"><i class="fa fa-external-link link"></i></a>
            </div>
        </div>
        `
    })
    .join("")
    allProject.innerHTML = projectHTML

}

// Modal content opening and closing for About-section:-
moreBtn.addEventListener("click",() => {
    modalContent.classList.add("change")
})
closeBtn.addEventListener("click", () => {
    modalContent.classList.remove("change")
})

// Scrolling functionality:-
    window.onscroll = function names() {
    const scroll = window.pageYOffset;

    if (scroll <= 150) {
        homeNav.style.color = "#0ef"
        aboutNav.style.color = "#fff"
        skillsNav.style.color = "#fff"
        projectNav.style.color = "#fff"
        contactNav.style.color = "#fff"
    }
     else if (scroll >=450 && scroll <= 800) {
        aboutNav.style.color = "#0ef"
        homeNav.style.color = "#fff"
        skillsNav.style.color = "#fff"
        projectNav.style.color = "#fff"
        contactNav.style.color = "#fff"
    } 
    else if ( scroll >= 1000 && scroll <= 1600) {
        skillsNav.style.color = "#0ef"
        aboutNav.style.color = "#fff"
        homeNav.style.color = "#fff"
        projectNav.style.color = "#fff"
        contactNav.style.color = "#fff"
    } 
    else if(scroll >= 1600 && scroll <= 2000){
        projectNav.style.color = "#0ef"
        homeNav.style.color = "#fff"
        aboutNav.style.color = "#fff"
        skillsNav.style.color = "#fff"
        contactNav.style.color = "#fff"
    }
    else if(scroll >= 2200 && scroll <= 2800){
        contactNav.style.color = "#0ef"
        homeNav.style.color = "#fff"
        aboutNav.style.color = "#fff"
        skillsNav.style.color = "#fff"
        projectNav.style.color = "#fff"
    }
}

// Typing functionality:-
var typed = new Typed(".auto-type",{
    strings : ["UI Dev", "Backend Dev", "Designer"],
    typeSpeed : 150,
    backSpeed : 50,
    loop : true,
});