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

    /* typed animation with automatic 'a' / 'an' article detection */
    const typingStrings = [ "Software Engineer","Full-Stack .NET Developer",".NET Developer", "Angular Developer", "DevOps Engineer"];

    function detectArticle(text) {
        if (!text || typeof text !== 'string') return 'a';
        // find first alphabetic character
        const m = text.match(/[A-Za-z]/);
        const first = m ? m[0].toLowerCase() : text.trim().charAt(0).toLowerCase();
        // treat vowels as 'an' (simple heuristic)
        return ['a','e','i','o','u'].includes(first) ? 'an' : 'a';
    }

    const articleEl = document.getElementById('typing-article');

    let typed = new Typed('.typing', {
        strings: typingStrings,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        preStringTyped: function(arrayPos) {
            try {
                const s = typingStrings[arrayPos] || '';
                const article = detectArticle(s);
                if (articleEl) articleEl.innerText = article;
            } catch (err) { /* ignore */ }
        }
    });

    /* aside */
    this.document.querySelector(".nav").addEventListener("click", function(e){
        // Only handle clicks on direct <a> children of <li> elements
        if (e.target.nodeName === "A" && e.target.parentElement.nodeName === "LI") {
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
            const targetSection = document.querySelector(e.target.getAttribute("href"));
            if (targetSection) {
                targetSection.classList.add("active");
                targetSection.classList.remove("back-section");
                targetSection.classList.remove("prev-section");
            }

            //close the aside - ONLY for navigation clicks, not programmatic ones
            if (window.innerWidth < 1200) {
                slideAside();
            }
        }
    })

    /*when clicking any 'Hire me' button, prevent default anchor jump and activate contact section without toggling the aside*/
    document.querySelectorAll(".hire-me").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            openContactSection();
            // smooth-scroll and focus the contact section for accessibility
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                try {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } catch (err) {}
                // make focusable and focus
                if (!contactSection.hasAttribute('tabindex')) contactSection.setAttribute('tabindex', '-1');
                contactSection.focus({ preventScroll: true });
            }
        });
    });

    document.querySelector(".nav-toggler").addEventListener("click", slideAside);

    // Download CV button: verify existence and gracefully notify if missing
    const downloadBtn = document.getElementById('downloadCv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function (e) {
            const href = downloadBtn.getAttribute('href');
            // Try to check file existence via HEAD request when running from an http(s) server
            try {
                fetch(href, { method: 'HEAD' }).then(resp => {
                    if (!resp.ok) {
                        e.preventDefault();
                        alert('CV file not found at ' + href + '. Please make sure your CV file exists in the CV/ folder and update the link.');
                    }
                    // if ok, allow default download behavior
                }).catch(() => {
                    // network error or cross-origin; allow default behavior but warn user in console
                    console.warn('Could not verify CV file with HEAD request. If download fails, check CV/ folder and file name.');
                });
            } catch (err) {
                console.warn('CV check skipped', err);
            }
        });
    }

    // CV modal logic
    const cvModal = document.getElementById('cvModal');
    const openCvFloating = document.getElementById('openCvFloating');
    const openCvAside = document.getElementById('openCvAside');
    const cvClose = document.getElementById('cvClose');
    const cvOverlay = cvModal ? cvModal.querySelector('.cv-modal-overlay') : null;
    const cvPreview = document.getElementById('cvPreview');
    const cvDownloadModal = document.getElementById('cvDownload');

    function openCvModal() {
        if (!cvModal) return;
        // set iframe src from data-src to avoid loading PDF until user requests it
        if (cvPreview && cvPreview.dataset && cvPreview.dataset.src) {
            cvPreview.setAttribute('src', cvPreview.dataset.src);
        }
        // ensure the modal download link matches the preview src
        if (cvDownloadModal && cvPreview) {
            cvDownloadModal.setAttribute('href', cvPreview.getAttribute('src') || cvPreview.dataset.src || 'CV/CV.pdf');
        }

        cvModal.classList.remove('hidden');
        cvModal.setAttribute('aria-hidden', 'false');
        // focus the close button for accessibility
        setTimeout(() => {
            if (cvClose) cvClose.focus();
        }, 60);
        // prevent background scrolling while modal is open
        try { document.body.classList.add('cv-open'); } catch (e) {}
    }

    function closeCvModal() {
        if (!cvModal) return;
        cvModal.classList.add('hidden');
        cvModal.setAttribute('aria-hidden', 'true');
        // clear iframe src to stop the browser PDF viewer and avoid keeping the file loaded
        if (cvPreview) {
            cvPreview.setAttribute('src', '');
        }
        // restore background scrolling
        try { document.body.classList.remove('cv-open'); } catch (e) {}
    }

    if (openCvFloating) {
        openCvFloating.addEventListener('click', function (e) {
            e.preventDefault();
            openCvModal();
        });
    }

    if (openCvAside) {
        openCvAside.addEventListener('click', function (e) {
            e.preventDefault();
            openCvModal();
        });
    }

    if (cvClose) {
        cvClose.addEventListener('click', function (e) {
            e.preventDefault();
            closeCvModal();
        });
    }

    if (cvOverlay) {
        cvOverlay.addEventListener('click', function () {
            closeCvModal();
        });
    }

    // close on Esc
    document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') {
            if (cvModal && !cvModal.classList.contains('hidden')) closeCvModal();
        }
    });

    // (download link is synced when opening the modal)
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
    // Programmatically activate the contact section without triggering the aside nav click handler
    const contactNavLink = document.querySelector('.nav li a[href="#contact"]');
    if (contactNavLink) {
        document.querySelectorAll('.nav li a').forEach(link => link.classList.remove('active'));
        contactNavLink.classList.add('active');
    }

    // Update sections
    Array.from(document.querySelectorAll('.section')).forEach(section => {
        if (section.classList.contains('active')) {
            section.classList.add('prev-section');
        } else {
            section.classList.add('back-section');
        }
        section.classList.remove('active');
    });

    // Activate contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.classList.add('active');
        contactSection.classList.remove('back-section');
        contactSection.classList.remove('prev-section');
        
        // Smooth scroll to contact section
        try {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } catch (err) {
            console.log('Smooth scroll not supported');
        }
        
        // Make focusable and focus for accessibility
        if (!contactSection.hasAttribute('tabindex')) {
            contactSection.setAttribute('tabindex', '-1');
        }
        contactSection.focus({ preventScroll: true });
    }

    // IMPORTANT: Close the aside if it's open on mobile
    if (window.innerWidth < 1200) {
        const aside = document.querySelector(".aside");
        if (aside && aside.classList.contains("slider")) {
            slideAside(); // This will close the aside
        }
    }
}
