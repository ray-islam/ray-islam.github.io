const roles = [
    "AI Scientist",
    "Author of Generative AI, Cybersecurity, and Ethics",
    "Professor",
    "Technology Strategist",
    "Responsible AI Leader"
];

let currentRole = 0;
const roleElement = document.getElementById("rotating-role");
const viewCountElement = document.getElementById("view-count");
const visitorCountStorageKey = "ray-islam-homepage-visitor-count";
const visitorSeenStorageKey = "ray-islam-homepage-visited";
let counterInitialized = false;

function rotateRole() {
    if (!roleElement) return;

    roleElement.style.opacity = 0;

    setTimeout(() => {
        currentRole = (currentRole + 1) % roles.length;
        roleElement.textContent = roles[currentRole];
        roleElement.style.opacity = 1;
    }, 300);
}

function getStoredVisitorCount() {
    try {
        const storedValue = localStorage.getItem(visitorCountStorageKey);
        const parsedValue = Number.parseInt(storedValue, 10);

        if (Number.isFinite(parsedValue) && parsedValue >= 0) {
            return parsedValue;
        }
    } catch (error) {
        console.warn("Unable to read visitor count from storage.", error);
    }

    return 0;
}

function setStoredVisitorCount(value) {
    try {
        localStorage.setItem(visitorCountStorageKey, String(value));
    } catch (error) {
        console.warn("Unable to save visitor count to storage.", error);
    }
}

function initializeViewCounter() {
    if (!viewCountElement || counterInitialized) return;

    counterInitialized = true;

    try {
        const hasVisitedBefore = localStorage.getItem(visitorSeenStorageKey);

        if (!hasVisitedBefore) {
            localStorage.setItem(visitorSeenStorageKey, "true");
            const nextCount = getStoredVisitorCount() + 1;
            setStoredVisitorCount(nextCount);
            viewCountElement.textContent = String(nextCount);
            return;
        }
    } catch (error) {
        console.warn("Unable to track unique visitors.", error);
    }

    viewCountElement.textContent = String(getStoredVisitorCount());
}

setInterval(rotateRole, 3000);
initializeViewCounter();
document.addEventListener("DOMContentLoaded", initializeViewCounter);
window.addEventListener("load", initializeViewCounter);
