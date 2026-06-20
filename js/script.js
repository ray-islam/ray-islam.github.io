const roles = [
    "AI Scientist",
    "Author of Generative AI, Cybersecurity, and Ethics",
    "Professor",
    "Technology Strategist",
    "Responsible AI Leader"
];

let currentRole = 0;
const roleElement = document.getElementById("rotating-role");

function rotateRole() {
    if (!roleElement) return;

    roleElement.style.opacity = 0;

    setTimeout(() => {
        currentRole = (currentRole + 1) % roles.length;
        roleElement.textContent = roles[currentRole];
        roleElement.style.opacity = 1;
    }, 300);
}

setInterval(rotateRole, 3000);
