let counter = document.querySelector("#counter");

setInterval(() => {
    let currentDate = new Date();
    let targetDate = new Date("October 02, 2024 00:00:01");
    let timeLeft = targetDate - currentDate;

    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    counter.innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
}, 1000);