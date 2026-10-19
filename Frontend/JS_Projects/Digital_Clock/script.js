let is24HourFormat = true;

const timeMainElement = document.getElementById("time-main");
const timeMsElement = document.getElementById("time-ms");
const timeDotElement = document.getElementById("time-dot");
const amPmElement = document.getElementById("ampm");
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const yearNumElement = document.getElementById("year-num");
const dayOfYearElement = document.getElementById("day-of-year");
const msBarElement = document.getElementById("ms-bar");
const formatToggleBtn = document.getElementById("format-toggle");

const statusPulse = document.getElementById("status-pulse");
const statusDot = document.getElementById("status-dot");
const themeLabel = document.getElementById("theme-label");
const themeStatusTag = document.getElementById("theme-status-tag");
const fpsCounter = document.getElementById("fps-counter");

const orb1 = document.getElementById("orb-1");
const orb2 = document.getElementById("orb-2");
const orb3 = document.getElementById("orb-3");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

// Fluid Dynamic Themes
const themes = {
    night: {
        label: "Midnight Fluid Cockpit",
        timeGradient: "bg-gradient-to-r from-indigo-400 via-purple-300 to-blue-500",
        barGradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500",
        accent: "text-indigo-400",
        statusBg: "bg-indigo-500",
        tagBg: "bg-indigo-950/80 text-indigo-300 border border-indigo-800/50",
        orbs: ["bg-indigo-600/30", "bg-purple-600/30", "bg-blue-600/30"]
    },
    dawn: {
        label: "Dawn Rise Drive",
        timeGradient: "bg-gradient-to-r from-rose-400 via-orange-300 to-amber-400",
        barGradient: "bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500",
        accent: "text-rose-400",
        statusBg: "bg-rose-500",
        tagBg: "bg-rose-950/80 text-rose-300 border border-rose-800/50",
        orbs: ["bg-rose-600/30", "bg-orange-600/30", "bg-amber-600/30"]
    },
    day: {
        label: "Solar Fluid Dynamic",
        timeGradient: "bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400",
        barGradient: "bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500",
        accent: "text-cyan-400",
        statusBg: "bg-cyan-500",
        tagBg: "bg-cyan-950/80 text-cyan-300 border border-cyan-800/50",
        orbs: ["bg-cyan-500/30", "bg-teal-500/30", "bg-emerald-500/30"]
    },
    sunset: {
        label: "Sunset Drive Fluid",
        timeGradient: "bg-gradient-to-r from-amber-400 via-pink-400 to-violet-400",
        barGradient: "bg-gradient-to-r from-amber-500 via-pink-500 to-violet-500",
        accent: "text-pink-400",
        statusBg: "bg-pink-500",
        tagBg: "bg-pink-950/80 text-pink-300 border border-pink-800/50",
        orbs: ["bg-amber-600/30", "bg-pink-600/30", "bg-violet-600/30"]
    }
};

let currentThemeKey = "";

function applyFluidTheme(hours) {
    let activeKey = "night";

    if (hours >= 5 && hours < 8) {
        activeKey = "dawn";
    } else if (hours >= 8 && hours < 17) {
        activeKey = "day";
    } else if (hours >= 17 && hours < 20) {
        activeKey = "sunset";
    } else {
        activeKey = "night";
    }

    if (currentThemeKey === activeKey) return;
    currentThemeKey = activeKey;

    const theme = themes[activeKey];

    themeLabel.textContent = theme.label;
    timeMainElement.className = `text-[13vw] leading-none font-extrabold tracking-tighter bg-clip-text text-transparent transition-all duration-500 ${theme.timeGradient}`;
    msBarElement.className = `h-full rounded-full transition-all duration-75 ${theme.barGradient}`;

    timeMsElement.className = `text-[5vw] font-bold min-w-[3ch] text-left transition-colors duration-500 ${theme.accent}`;
    timeDotElement.className = `text-[6vw] font-extrabold px-1 transition-colors duration-500 ${theme.accent}`;
    amPmElement.className = `text-[3vw] font-bold ml-2 self-start transition-colors duration-500 ${theme.accent}`;
    dayElement.className = `text-2xl font-bold tracking-wide mt-1 transition-colors duration-500 ${theme.accent}`;

    statusPulse.className = `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.statusBg}`;
    statusDot.className = `relative inline-flex rounded-full h-3 w-3 ${theme.statusBg}`;
    themeStatusTag.className = `text-xs px-2.5 py-1 rounded-lg font-mono font-semibold ${theme.tagBg}`;

    orb1.className = `absolute top-0 left-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] transition-colors duration-1000 ${theme.orbs[0]}`;
    orb2.className = `absolute bottom-0 right-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] transition-colors duration-1000 ${theme.orbs[1]}`;
    orb3.className = `absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] transition-colors duration-1000 ${theme.orbs[2]}`;
}

// FPS Performance Monitoring
let lastFrameTime = performance.now();
let frameCount = 0;

function updateFPS(nowTime) {
    frameCount++;
    if (nowTime - lastFrameTime >= 1000) {
        fpsCounter.textContent = frameCount;
        frameCount = 0;
        lastFrameTime = nowTime;
    }
}

// Main High-Precision Loop
function updateClock(nowTime) {
    updateFPS(nowTime);

    const now = new Date();
    const rawHours = now.getHours();
    let hours = rawHours;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();
    let ampm = "";

    applyFluidTheme(rawHours);

    if (!is24HourFormat) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMs = String(milliseconds).padStart(3, "0");

    timeMainElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    timeMsElement.textContent = formattedMs;
    amPmElement.textContent = ampm;

    const msPercentage = (milliseconds / 1000) * 100;
    msBarElement.style.width = `${msPercentage}%`;

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();

    dayElement.textContent = dayName;
    dateElement.textContent = `${monthName} ${dayOfMonth}, ${year}`;
    yearNumElement.textContent = year;

    // Calculate Day of Year
    const startOfYear = new Date(year, 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    dayOfYearElement.textContent = `Day ${dayOfYear} of ${year % 4 === 0 ? 366 : 365}`;

    requestAnimationFrame(updateClock);
}

// Toggle Format
formatToggleBtn.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
});

// Start loop
requestAnimationFrame(updateClock);