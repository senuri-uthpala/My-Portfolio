// ---------- Contact list ----------
const media = document.querySelector(".contact-media");

const contactList = [
    { id: 1, icon: "ph ph-phone-call", name: "Phone",   value: "+94 763928374",             href: "tel:+94763928374" },
    { id: 2, icon: "ph ph-envelope",   name: "E-Mail",  value: "senuriuthpala66@gmail.com", href: "mailto:senuriuthpala66@gmail.com" },
    { id: 3, icon: "ph ph-map-pin",    name: "Country", value: "Sri Lanka",                 href: "#" },
];

if (media) {
    media.innerHTML = contactList
        .map(
            (ele) => `
        <div class="media">
            <span><i class="${ele.icon}"></i></span>
            <div class="contact-name">
                <p>${ele.name}</p>
                <a href="${ele.href}">${ele.value}</a>
            </div>
        </div>`
        )
        .join("");
}

// ---------- EmailJS config ----------
const PUBLIC_KEY  = "4sZULTPExk5A9nrOh";
const SERVICE_ID  = "service_07m24hd";
const TEMPLATE_ID = "template_odl76nv";

if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: PUBLIC_KEY });
}

// ---------- Toast helper ----------
function showToast(text, color) {
    if (typeof Toastify === "undefined") {
        alert(text);
        return;
    }
    Toastify({
        text,
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        stopOnFocus: true,
        style: { background: color },
    }).showToast();
}

const TOAST_ERROR   = "rgb(206,16,16)";
const TOAST_SUCCESS = "rgb(9,222,38)";

// ---------- Contact form ----------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const sendBtn =
        document.querySelector("#send-msg") ||
        contactForm.querySelector('button[type="submit"], input[type="submit"]');

    const originalText = sendBtn ? sendBtn.innerHTML : "";
    const originalStyle = sendBtn
        ? {
              backgroundColor: sendBtn.style.backgroundColor,
              color: sendBtn.style.color,
              border: sendBtn.style.border,
              boxShadow: sendBtn.style.boxShadow,
          }
        : {};

    const setSending = () => {
        if (!sendBtn) return;
        sendBtn.innerHTML = "Sending...";
        sendBtn.style.backgroundColor = "gray";
        sendBtn.style.color = "white";
        sendBtn.style.border = "none";
        sendBtn.style.boxShadow = "none";
        sendBtn.disabled = true;
    };

    const resetButton = () => {
        if (!sendBtn) return;
        sendBtn.innerHTML = originalText;
        Object.assign(sendBtn.style, originalStyle);
        sendBtn.disabled = false;
    };

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name    = document.getElementById("name").value.trim();
        const email   = document.getElementById("email").value.trim();
        const phone   = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate first (button changes only after validation passes)
        if (!name || !email || !phone || !message) {
            showToast("All fields are Mandatory!", TOAST_ERROR);
            return;
        }

        if (typeof emailjs === "undefined") {
            showToast("Email service failed to load. Refresh the page and try again.", TOAST_ERROR);
            return;
        }

        setSending();

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                { name, email, phone, message },
                { publicKey: PUBLIC_KEY }
            )
            .then(() => {
                showToast("Message Sent Successfully!", TOAST_SUCCESS);
                contactForm.reset();
                setTimeout(resetButton, 2000);
            })
            .catch((error) => {
                console.error("EmailJS FAILED:", error);
                showToast("Message Failed to Send!", TOAST_ERROR);
                resetButton();
            });
    });
}