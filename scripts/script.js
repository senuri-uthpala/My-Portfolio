const toggle = document.getElementById('menu-toggle');

if (toggle && toggle.checked) {
    document.body.classList.add("no-scroll");
}
else{
    document.body.classList.remove("no-scroll");
}

const words = ["Full Stack Developer","Frontend Engineer","Backend Developer","Software Engineer","Web Developer","Mobile AppDeveloper","Problem Solver",];

const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        navlinks.forEach((l) => {
            if (l === link) {
                l.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        // Mobile menu eka close karanna
        if (toggle) {
            toggle.checked = false;
            document.body.classList.remove("no-scroll");
        }

        if(tabName === "services"){
        const serviceList = [
            {
                id: 1,
                icon: "ph-code",
                text: "Web Development",
                para: "I build responsive, modern websites using HTML, CSS, and JavaScript. From portfolio sites to business websites and web apps, I focus on clean layouts and a smooth user experience across mobile, tablet, and desktop screens.",
            },
            {
                id: 2,
                icon: "ph-device-mobile",
                text: "Mobile App Development",
                para: "I design and build user-friendly mobile apps that solve real-world problems. From the first idea and screen planning to feature implementation, I deliver apps that are easy to use and reliable.",
            },
            {
                id: 3,
                icon: "ph-plugs-connected",
                text: "Backend Development",
                para: "I build server-side logic such as login, authentication, and APIs. My backend systems handle user data securely, connect smoothly with the frontend and database, and support reliable CRUD operations.",
            },
            {
                id: 4,
                icon: "ph-database",
                text: "Database Design",
                para: "I design well-structured MySQL databases built for performance and accuracy. This covers table planning, relationships, keys, and normalization, so data is stored safely and retrieved efficiently.",
            },
            {
                id: 5,
                icon: "ph-flow-arrow",
                text: "System Analysis & Design",
                para: "I analyze requirements and model systems using ER and UML diagrams. I turn client and user needs into a clear blueprint before development begins.",
            },
            {
                id: 6,
                icon: "ph-file-text",
                text: "Project Documentation",
                para: "I write clear, well-organized documentation for software projects, including SRS documents, technical documents, and project reports. It's written so developers, clients, and lecturers can all understand how the system works.",
            },
        ];

        const services = document.getElementsByClassName('service-list');

       /* const innerContent = serviceList.map(() => {
            return `
            <div>Inner Box </div>
            `;
        });

        Array.from(services).forEach((ele) => {
            ele.innerHTML = innerContent
        });*/

        }

    });
});