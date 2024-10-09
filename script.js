function clockTimer() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const times = `${hour}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = times;
}

setInterval(clockTimer, 1000);

clockTimer();