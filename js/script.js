let allProjects = [
    {
        title: "Price Comparison Website",
        image: "./images/portfolio/price-compare.png",
        github: "https://github.com/orgs/Price-Pee/repositories",
        live: "",
        category: "Web Apps"
    },
    {
        title: "Dehazing API for Self-Driving Cars",
        image: "./images/portfolio/dehaze.png",
        github: {
            AI_MODEL: "https://github.com/AhmedL3swy/ResWB-Dehaze",
            website: "https://github.com/AhmedL3swy/dehaze"
        },
        live: "",
        category: "AI Projects"
    },
    {
        title: "Examination System",
        image: "./images/portfolio/exam.png",
        github: "https://github.com/AhmedL3swy/Examination-System",
        live: "",
        category: "Desktop Apps"
    },
    {
        title: "E-Commerce Application",
        image: "./images/portfolio/E-Commerce.png",
        github: "https://github.com/AhmedL3swy/e-Commerce",
        live: "",
        category: "Web Apps"
    },
    {
        title: "Attendance System",
        image: "./images/portfolio/Attendance.png",
        github: "https://github.com/AhmedL3swy/MVC-Attendance-System",
        live: "",
        category: "Web Apps"
    }
]
let Key2Disaply={
    "AI_MODEL": "AI Model",
    "website": "APP"
}

let webApps = allProjects.filter(project => project.category == "Web Apps");
let aiProjects = allProjects.filter(project => project.category == "AI Projects");
let desktopApps = allProjects.filter(project => project.category == "Desktop Apps");



function DisplayPortfolioItems(elem, arrayOfWorks) {
    let allButtons = document.querySelectorAll(".portfolio-heading button");
    for(let i = 0; i < allButtons.length; i++)
    {
        allButtons[i].classList.add("not-active");
        allButtons[i].classList.remove("active");
    }
    elem.classList.add("active");
    elem.classList.remove("not-active");

    let portfolioItemsContainer = document.querySelector("#portfolio-items");
    portfolioItemsContainer.innerHTML = "";

    arrayOfWorks.forEach(element => {
        let portfolioItemDiv = document.createElement("div");
        portfolioItemDiv.classList = "portfolio-item padd-15";

        let portfolioItemInnerDiv = document.createElement("div");
        portfolioItemInnerDiv.classList = "portfolio-item-inner shadow-dark";
        portfolioItemDiv.appendChild(portfolioItemInnerDiv);

        let portfolioImgDiv = document.createElement("div");
        portfolioImgDiv.classList = "portfolio-img";

        let img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("alt", "not-found");
        portfolioImgDiv.appendChild(img);

        portfolioItemInnerDiv.appendChild(portfolioImgDiv);


        let liveDiv = document.createElement("div");
        liveDiv.classList = "live";
        portfolioItemDiv.appendChild(liveDiv);

        let title = document.createElement("h3");
        title.innerText = element.title;
        liveDiv.appendChild(title);

        if(element.github != "")
        {
            if (typeof element.github == "string"){

                let buttonGithub = document.createElement("button");
                buttonGithub.classList = "git-btn btn";
                let linkGithub = document.createElement("a");
                linkGithub.setAttribute("href", element.github);
                linkGithub.setAttribute("target", "blank");
                linkGithub.innerText = "Github";
                buttonGithub.appendChild(linkGithub);
                liveDiv.appendChild(buttonGithub);
            }
            else if (typeof element.github == "object") {
                for (const [key, value] of Object.entries(element.github)) {
                    let buttonGithub = document.createElement("button");
                    buttonGithub.classList = "git-btn btn";
                    let linkGithub = document.createElement("a");
                    linkGithub.setAttribute("href", value);
                    linkGithub.setAttribute("target", "blank");
                    linkGithub.innerText = Key2Disaply[key] + " Github";
                    buttonGithub.appendChild(linkGithub);
                    liveDiv.appendChild(buttonGithub);
                }
            }
        }

        if(element.live != "")
        {
            let buttonLive = document.createElement("button");
            buttonLive.classList = "git-btn btn";
            let linkLive = document.createElement("a");
            linkLive.setAttribute("href", element.live);
            linkLive.setAttribute("target", "blank");
            linkLive.innerText = "Live"; 
            buttonLive.appendChild(linkLive);
            liveDiv.appendChild(buttonLive);
        }
        
        portfolioItemsContainer.appendChild(portfolioItemDiv);
    });
}

window.addEventListener("load", function() {
    //click the all projects button to display all projects
    let allProjectsButton = document.querySelector(".portfolio-heading button");
    DisplayPortfolioItems(allProjectsButton, allProjects);

    /* typed animation */
    let typed = new Typed(".typing", {
        strings: ["", "Full-Stack .NET Developer", "Angular Developer", "DevOps Engineer", "Software Engineer"],
        typeSpeed:100,
        BackSpeed: 60,
        loop: true
    })

    /* aside */
    this.document.querySelector(".nav").addEventListener("click", function(e){
        if (e.target.nodeName == "A") {
            Array.from(document.querySelectorAll(".nav li a")).forEach(link=>{
                link.classList.remove("active");
            })
            e.target.classList.add("active");
            //remove the active class from all sections
            Array.from(document.querySelectorAll(".section")).forEach(section=>{
                if (section.classList.contains("active")) {
                    section.classList.add("prev-section");
                } else {
                    section.classList.add("back-section");
                }
                section.classList.remove("active");
            })
            //get the section to which the link belongs and make it active
            document.querySelector(e.target.getAttribute("href")).classList.add("active");
            document.querySelector(e.target.getAttribute("href")).classList.remove("back-section");
            document.querySelector(e.target.getAttribute("href")).classList.remove("prev-section");

            //close the aside
            if (window.innerWidth < 1200) {
                slideAside();
            }
        }
    })

    /*when clicking hiring me do the same for when clicking contact a*/
    document.querySelector(".hire-me").addEventListener("click", openContactSection);

    document.querySelector(".nav-toggler").addEventListener("click", slideAside);
})

/* slide the aside when clicking the aside toggler */
function slideAside() {
    document.querySelector(".aside").classList.toggle("slider");
    document.querySelectorAll(".section").forEach(section=> {
        section.classList.toggle("slider");
    })
    document.querySelector(".nav-toggler").classList.toggle("slider");
}

function openContactSection() {
    document.querySelector("#contactBtn").click();
}

