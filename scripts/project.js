const projectList = [
    {
        id: 1,
        number: "01",
        title: "ParkVision – Smart Vehicle Parking Management System",
        description: "A smart vehicle parking management system developed with Number Plate Recognition and QR Code technology to manage vehicle entry, parking slots, and exit processes efficiently. The system reduces manual work at parking entrances by automatically detecting vehicle number plates, generating QR codes for booked slots, and tracking real-time slot availability, giving both drivers and administrators a faster, more reliable parking experience.",
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: "assets\\project\\projects1.png",
        liveLink: "#",
        githubLink: "https://github.com/senuri-uthpala/smart-vehicle-parking-management-system-",
    },
    {
        id: 2,
        number: "02",
        title: "Hidden Ceylon – Travel & Tourism Website",
        description: "A Sri Lanka travel and tourism website featuring destination search, image galleries, package details, booking and contact forms, travel guides, reviews, and FAQs, with a PHP and MySQL backend and admin panel. Visitors can browse destinations across the island, view curated travel packages, and submit booking requests that are stored and managed through an admin dashboard, making the platform a complete solution for showcasing and booking Sri Lankan travel experiences.",
        techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        image: "assets\\project\\projects3.png",
        liveLink: "#",
        githubLink: "https://github.com/senuri-uthpala/Hidden---Ceylon",
    },
    {
        id: 3,
        number: "03",
        title: "Personal Portfolio Website",
        description: "My own portfolio website with a responsive layout, tab-based navigation, a typing-effect hero section, and dynamic Services, About, Projects, and Contact sections built with HTML, CSS, and JavaScript. The site uses reusable JavaScript components to render services, experience, education, and skills from structured data, along with a project carousel and a working contact form, all wrapped in a smooth, animated single-page experience.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "assets\\project\\projects2.png",
        liveLink: "#",
        githubLink: "",
    },
    {
        id: 4,
        number: "04",
        title: "AI Assistant (Note-Taking Project)",
        description: "An AI-powered assistant that answers user questions through a simple chat interface, built as part of a personal note-taking project. The assistant helps organize and retrieve notes through natural conversation, with a clean chat interface, a connection to the AI model for generating responses, and testing to keep the assistant's answers accurate, helpful, and reliable across different types of questions.",
        techStack: ["JavaScript", "HTML", "CSS"],
        image: "assets\\project\\projects4.png",
        liveLink: "#",
        githubLink: "https://github.com/senuri-uthpala/studydesk-ai-notes-assistant",
    },
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {

    const projectContent = projectList[index];

    const previousDisabled = index === 0;

    const nextDisabled = index === projectList.length - 1;

    projects.innerHTML = `
       <div class="project-info">
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}</p>
                    <div class="tech-stack">
                       ${projectContent?.techStack?.map((tech, i) => {
                            return `<span key=${i}>${tech}</span>`;
                       }).join("")}
                    </div>
                    <hr/>

                    <div class="links">
                        <a href="${projectContent?.liveLink}">
                            <i class="ph ph-arrow-right"></i>
                        </a>
                        <a href="${projectContent?.githubLink}">
                            <i class="ph ph-github-logo"></i>
                        </a>
                    </div>
        </div>


         <div class="carousel">
                <img src="${projectContent?.image}" alt="${projectContent?.title}"/>
                    <div class="arrows">
                         <a href="#" id="previous" class="${previousDisabled ? "disabled-btn" : ""}">
                            <i class="ph ph-caret-left"></i>
                         </a>
                         <a href="#" id="next" class="${nextDisabled ? "disabled-btn" : ""}">
                            <i class="ph ph-caret-right"></i>
                         </a>
                    </div>
         </div>
    `;

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);