function clockTimer() {
    const date = new Date();
    const hour = string(now.getHours()).padStart(2, "0");
    const minutes = string(now.getMinutes()).padStart(2, "0");
    const seconds = string(now.getSeconds()).padStart(2, "0");

    const times = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = times;
}

setInterval(clockTimer, 1000);

clockTimer();