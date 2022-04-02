const reviews = [
    {
        id: 1,
        name: "Batuhan CABUK",
        job: "Mechanical Engineer",
        img: "https://avatars.githubusercontent.com/u/99116090?v=4",
        text: "I am an engineer who has avionics system software and hardware knowledge, can make professional circuit board designs, and has the ability to make complex designs in Solidworks program. I worked on robotic systems and autonomous robots for a while. I am currently working on software and web development."
    },
    {
        id: 2,
        name: "Github",
        job: "github.com/batuhncbk",
        img: "https://pngset.com/images/github-icon-free-download-symbol-logo-trademark-label-transparent-png-1868500.png",
        text: "I made some projects to improve myself in my github."
    },
    {
        id: 3,
        name: "LinkedIn",
        job: "linkedin.com/in/batuhncbk",
        img: "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png",
        text: "You can also take a look what I made in my other life."
    }

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem =0;

window.addEventListener("DOMContentLoaded", function (){
    showPerson();
});

function showPerson (){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem>reviews.length -1){
        currentItem = 0;
    }
        showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem<0){
        currentItem = reviews.length -1;
    }
        showPerson();
});

randomBtn.addEventListener("click", function() {
    window.open("https://github.com/batuhncbk");
});
