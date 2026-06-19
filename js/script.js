const roles = [
    "AI Scientist",
    "Professor",
    "Author",
    "Keynote Speaker",
    "AI Ethics Advocate",
    "Cybersecurity Researcher",
    "Enterprise AI Strategist"
];

let index = 0;
const roleElement = document.getElementById("rotating-role");

setInterval(() => {
    index = (index + 1) % roles.length;
    roleElement.textContent = roles[index];
}, 2500);
