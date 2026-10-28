const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded',()=>{
    if (aboutTabs){
        aboutTabs[0].click();
    }
})

aboutTabs.forEach((tab)=>{
    tab.addEventListener('click', (e)=> {
        e.preventDefault();

        const activeTab = tab.dataset.section;

        aboutTabs.forEach((a)=>{
            a.classList.remove('active');
        });

        tab.classList.add('active');

        aboutContent.forEach((c) =>{
            c.classList.remove("active");
        });

        document.getElementById(activeTab).classList.add("active");

        if(activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                 {
                    id: 1,
                    date: "2026 - present",
                    position: "Frontend Developer",
                    project: "Personal Portfolio Website",
                    details: "Designed and developed my own portfolio website with a responsive layout, tab-based navigation, and a typing-effect hero section using HTML, CSS, and JavaScript.",
                },

                {
                    id: 2,
                    date: "2026 january - 2026 august",
                    position: "Full Stack Developer",
                    project: "smart vehicle parking management system",
                    details: "Designing and developing a Smart Parking Management System that helps drivers find and manage parking spaces. Responsible for system analysis, database design, and building the application from front end to back end.",
                },

                {
                    id: 3,
                    date: "2025 march- 2025 august",
                    position: "AI Developer",
                    project: "AI Assistant (Personal Project)",
                    details: "Built an AI-powered assistant that answers user questions through a simple chat interface. Worked on the interface, the logic that connects it to the AI model, and testing to keep responses helpful and reliable.",
                },

                {
                    id: 4,
                    date: "2024 august - 2025 january ",
                    position: "Web Developer",
                    project: "Hidden Ceylon (Personal Project)",
                    details: "Built a Sri Lanka travel and tourism website using HTML5, CSS3, JavaScript, and MySQL. Focused on a responsive layout, clean design, and a well-structured database.",
                },
            ];

            const experienceContent = experienceList.map((ele)=>{
                return`
                     <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.project}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            }).join("");

            if(experiences){
                experiences.innerHTML = experienceContent;
            }
        }else if (activeTab === "education"){
            const education = document.querySelector('.education-list');

            const educationList = [
                {
                    id: 1,
                    date: "2024 - Present",
                    degree: "Higher National Diploma in Information Technology",
                    institution: "Advanced Technical Institute, Labuduwa",
                    details: "Studying software development, database design, and system analysis, and applying them through academic and personal projects.",
                },
                {
                    id: 2,
                    date: "2014 - 2022",
                    degree: "G.C.E. Advanced Level",
                    institution: "H/Vijaya National School",
                    details: "Completed secondary education with a focus on building a strong academic foundation.",
                },
                {
                    id: 3,
                    date: "2008 - 2012",
                    degree: "Primary Education",
                    institution: "Mr/Ihalagoda Kanitu Viduhala",
                    details: "Completed primary education, building the early academic foundation for further studies.",
                },
            ];

            const educationContent = educationList.map((ele)=>{
                return`
                   <div class="experience-box" key=${ele?.id}>
                            <h4>${ele?.date}</h4>
                            <h3>${ele?.degree}</h3>
                            <div class="company-name">
                                <span></span>
                                <p>${ele?.institution}</p>
                            </div>
                            <p>${ele?.details}</p>
                        </div>
                `;
            }).join("");

            if(education){
               education.innerHTML = educationContent;
            }

        }
        else if(activeTab === "skills"){
            const skills = document.querySelector('.skill-list');

           const skillList = [
                {
                    id: 1,
                    name: "HTML - Hyper Text Markup Language",
                    icon: "assets/project/skills/html.jpg",
                },
                {
                    id: 2,
                    name: "CSS - Cascading Style Sheets",
                    icon: "assets/project/skills/css.png",
                },
                {
                    id: 3,
                    name: "JavaScript",
                    icon: "assets/project/skills/js.jpg",
                },
                {
                    id: 4,
                    name: "PHP - Hypertext Preprocessor",
                    icon: "assets/project/skills/php.png",
                },
                {
                    id: 5,
                    name: "MySQL",
                    icon: "assets/project/skills/mysql.png",
                },
                {
                    id: 6,
                    name: "Python",
                    icon: "assets/project/skills/python.png",
                },
                {
                    id: 7,
                    name: "GitHub",
                    icon: "assets/project/skills/github.png",
                },
                {
                    id: 8,
                    name: "Laravel",
                    icon: "assets/project/skills/laravel.jpg",
                },
                {
                    id: 9,
                    name: "Node JS",
                    icon: "assets/project/skills/node js.jpg",
                },
                {
                    id: 10,
                    name: "React JS",
                    icon: "assets/project/skills/react.jpg",
                },

            ];

            const skillContent = skillList.map((ele)=>{
                return`
                    <div class="skill-box" key=${ele?.id}>
                            <img src="${ele?.icon}" alt="${ele?.name}" title="${ele?.name}" loading="lazy"
                            />
                    </div>
                `;
            }).join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }

        }
        else if(activeTab === "about-me")
        {
           const myInfo = document.querySelector(".my-info");

           const infoList = [
                {
                    id: 1,
                    key: "Name",
                    value: "Senuri Uthpala",
                },
                {
                    id: 2,
                    key: "Industry",
                    value: "Software & IT",
                },
                {
                    id: 3,
                    key: "Address",
                    value: "Namal Sewana, Ihalagoda, Urugamuwa.",
                },
                {
                    id: 4,
                    key: "Country",
                    value: "Sri Lanka",
                },
           ];

            const infoContent = infoList.map((ele)=>{
                return `
                <div class="info-box" key=${ele?.id}>
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                </div>
                `;
            }).join("");

           if(myInfo) {
                myInfo.innerHTML = infoContent;
           }
        }
    });
});