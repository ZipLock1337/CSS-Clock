// Function for clock
function clockTimer() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const times = `${hour}:${minutes}:${seconds}`;

    const clockElement = document.getElementById("clock");
    clockElement.textContent = times;

    clockElement.classList.add("animate");

    setTimeout(() => {
        clockElement.classList.remove("animate");
    }, 200);
}

// Start timer
setInterval(clockTimer, 1000);
clockTimer();
