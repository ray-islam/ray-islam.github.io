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
const counterEndpoint = "https://api.countapi.xyz/hit/ray-islam-website/home-page-visitors";
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

async function initializeViewCounter() {
    if (!viewCountElement || counterInitialized) return;

    counterInitialized = true;

    try {
        const hasVisitedBefore = localStorage.getItem(visitorSeenStorageKey);

        if (hasVisitedBefore) {
            viewCountElement.textContent = String(getStoredVisitorCount());
            return;
        }

        const response = await fetch(counterEndpoint);

        if (!response.ok) {
            throw new Error(`Counter request failed with ${response.status}`);
        }

        const data = await response.json();
        const totalVisitors = Number.parseInt(data?.value, 10);

        localStorage.setItem(visitorSeenStorageKey, "true");

        if (Number.isFinite(totalVisitors) && totalVisitors >= 0) {
            setStoredVisitorCount(totalVisitors);
            viewCountElement.textContent = String(totalVisitors);
            return;
        }
    } catch (error) {
        console.warn("Unable to track unique visitors.", error);
    }

    localStorage.setItem(visitorSeenStorageKey, "true");
    const fallbackCount = getStoredVisitorCount() + 1;
    setStoredVisitorCount(fallbackCount);
    viewCountElement.textContent = String(fallbackCount);
}

setInterval(rotateRole, 3000);
initializeViewCounter();
document.addEventListener("DOMContentLoaded", initializeViewCounter);
window.addEventListener("load", initializeViewCounter);
