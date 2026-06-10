/* ==================================================
LOADER
================================================== */

window.addEventListener("load", () => {


const loader =
    document.getElementById("loader");

setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.transition =
        "0.6s";

    setTimeout(() => {

        loader.style.display =
            "none";

    }, 600);

}, 1000);


});

/* ==================================================
TYPEWRITER EFFECT
================================================== */

const words = [


"Web Developer",
"Frontend Developer",
"Tech Enthusiast",
"Problem Solver",
"Software Engineer"


];

const typewriter =
document.getElementById(
"typewriter"
);

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {


const currentWord =
    words[wordIndex];

if (!deleting) {

    typewriter.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

    charIndex++;

    if (
        charIndex ===
        currentWord.length
    ) {

        deleting = true;

        setTimeout(
            typeEffect,
            1500
        );

        return;
    }

} else {

    typewriter.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

    charIndex--;

    if (charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (
            wordIndex >=
            words.length
        ) {

            wordIndex = 0;

        }

    }

}

setTimeout(
    typeEffect,
    deleting ? 50 : 100
);


}

typeEffect();

/* ==================================================
DARK / LIGHT MODE
================================================== */

const themeButton =
document.getElementById(
"theme-toggle"
);

const savedTheme =
localStorage.getItem(
"portfolio-theme"
);

if (
savedTheme === "light"
) {


document.body.classList.add(
    "light-mode"
);

themeButton.innerHTML =
    "☀️";


}

themeButton.addEventListener(
"click",
() => {


    document.body.classList.toggle(
        "light-mode"
    );

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeButton.innerHTML =
            "☀️";

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeButton.innerHTML =
            "🌙";

    }

}


);

/* ==================================================
NAVBAR SHADOW
================================================== */

const navbar =
document.getElementById(
"navbar"
);

window.addEventListener(
"scroll",
() => {


    if (
        window.scrollY > 50
    ) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,245,255,.15)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

}


);

/* ==================================================
REVEAL ANIMATION
================================================== */

const revealItems =
document.querySelectorAll(


    ".glass-card,\
    .skill,\
    .timeline-item,\
    .project-card,\
    .stat-card"

);


const revealObserver =
new IntersectionObserver(


    entries => {

        entries.forEach(
            entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            }
        );

    },

    {
        threshold:0.1
    }

);


revealItems.forEach(item => {


item.style.opacity = "0";

item.style.transform =
    "translateY(40px)";

item.style.transition =
    "0.8s ease";

revealObserver.observe(
    item
);


});

/* ==================================================
ACTIVE NAV LINKS
================================================== */

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {


    let current = "";

    sections.forEach(
        section => {

            const sectionTop =
                section.offsetTop -
                200;

            if (
                scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );

    navLinks.forEach(
        link => {

            link.classList.remove(
                "nav-active"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                `#${current}`
            ) {

                link.classList.add(
                    "nav-active"
                );

            }

        }
    );

}


);

/* ==================================================
GITHUB API
================================================== */

/*
Replace with your GitHub username
*/

const githubUsername =
"shayangonchoudhury-svg";

fetch(
`https://api.github.com/users/${githubUsername}`
)

.then(response => response.json())

.then(data => {


document.getElementById(
    "repos"
).textContent =
    data.public_repos;

document.getElementById(
    "followers"
).textContent =
    data.followers;

document.getElementById(
    "following"
).textContent =
    data.following;


})

.catch(error => {


console.log(
    "GitHub Error:",
    error
);


});

/* ==================================================
ANIMATED COUNTERS
================================================== */

const statCards =
document.querySelectorAll(
".stat-card h3"
);

let countersStarted =
false;

function runCounters() {


if (
    countersStarted
) return;

const statsSection =
    document.getElementById(
        "stats"
    );

const position =
    statsSection
    .getBoundingClientRect()
    .top;

if (
    position <
    window.innerHeight - 100
) {

    countersStarted = true;

    statCards.forEach(
        counter => {

            const target =
                parseInt(
                    counter.innerText
                );

            let current = 0;

            const increment =
                target / 60;

            function update() {

                if (
                    current <
                    target
                ) {

                    current +=
                        increment;

                    counter.innerText =
                        Math.ceil(
                            current
                        ) + "+";

                    requestAnimationFrame(
                        update
                    );

                }

                else {

                    counter.innerText =
                        target + "+";

                }

            }

            update();

        }
    );

}


}

window.addEventListener(
"scroll",
runCounters
);

runCounters();

/* ==================================================
CERTIFICATE MODAL
================================================== */

const certImages =
document.querySelectorAll(
".certificate-grid img"
);

const modal =
document.createElement(
"div"
);

modal.id =
"certificate-modal";

modal.innerHTML = `

<div class="modal-container">


<span id="close-modal">
    &times;
</span>

<img id="modal-image">


</div>

`;

document.body.appendChild(
modal
);

const modalImage =
document.getElementById(
"modal-image"
);

const closeModal =
document.getElementById(
"close-modal"
);

certImages.forEach(
image => {


    image.addEventListener(
        "click",
        () => {

            modal.style.display =
                "flex";

            modalImage.src =
                image.src;

        }
    );

}


);

closeModal.addEventListener(
"click",
() => {


    modal.style.display =
        "none";

}


);

modal.addEventListener(
"click",
e => {


    if (
        e.target === modal
    ) {

        modal.style.display =
            "none";

    }

}


);

/* ==================================================
TERMINAL COMMANDS
================================================== */

const terminalInput =
document.getElementById(
"terminal-input"
);

const terminalOutput =
document.querySelector(
".terminal-output"
);

const commands = {


help:`


Available Commands

help
about
skills
projects
contact
github
clear

`,


about:`


Shayan Gon Choudhury

Web Developer
Student
Tech Enthusiast

`,


skills:`


HTML
CSS
JavaScript
GitHub
Responsive Design

`,


projects:`


Neo-Class Scheduler

LifeTracker

Portfolio Builder

`,


contact:`


Email:
shayangc04@gmail.com

GitHub:
github.com/shayangonchoudhury-svg

LinkedIn:
https://www.linkedin.com/in/shayan-gon-choudhury-37a842315/

`,


github:`


GitHub stats loaded
in GitHub section.

`

};

terminalInput.addEventListener(
"keydown",
event => {


    if (
        event.key === "Enter"
    ) {

        const command =
            terminalInput.value
            .trim()
            .toLowerCase();

        terminalOutput.innerHTML +=

        `<br>
        <span style="color:#00f5ff">
        > ${command}
        </span><br>`;

        if (
            command ===
            "clear"
        ) {

            terminalOutput.innerHTML =
                "";

        }

        else if (
            commands[command]
        ) {

            terminalOutput.innerHTML +=
                commands[
                    command
                ] + "<br>";

        }

        else {

            terminalOutput.innerHTML +=

            `


Command not found.

Type "help".

<br>
`;


        }

        terminalInput.value = "";

        terminalOutput.scrollTop =
            terminalOutput.scrollHeight;

    }

}


);

/* ==================================================
SCROLL PROGRESS BAR
================================================== */

const progressBar =
document.createElement(
"div"
);

progressBar.id =
"scroll-progress";

document.body.appendChild(
progressBar
);

window.addEventListener(
"scroll",
() => {


    const scrollTop =
        document.documentElement
        .scrollTop;

    const scrollHeight =
        document.documentElement
        .scrollHeight -
        document.documentElement
        .clientHeight;

    const percent =
        (scrollTop /
        scrollHeight) * 100;

    progressBar.style.width =
        percent + "%";

}


);

/* ==================================================
EASTER EGG
================================================== */

let logoClicks = 0;

const logo =
document.querySelector(
".logo"
);

logo.addEventListener(
"click",
() => {


    logoClicks++;

    if (
        logoClicks === 5
    ) {

        alert(
            "🚀 Welcome Developer!"
        );

        logoClicks = 0;

    }

}


);

