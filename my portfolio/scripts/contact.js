const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+94 7639279377",
        href: "tel:+94763927937",
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-Mail",
        value: "senuri@gmail.com",
        href: "mailto:shenukodithuwakku760@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-map-pin",
        name: "Country",
        value: "Sri Lanka",
        href: "#",
    },
];

const contactContent = contactList.map((ele) => {
    return `
        <div class="media" key=${ele?.id}>
                <span>
                   <i class="${ele?.icon}"></i>
                </span>
            <div class="contact-name">
                <p>${ele?.name}</p>
                <a href="${ele?.href}">${ele?.value}</a>
            </div>
        </div>
    `;
}).join("");

if (media) media.innerHTML = contactContent;