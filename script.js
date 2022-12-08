const btn = document.querySelector('#start');
btn.addEventListener('click', function() {
    if (start.textContent === "stop") {
        clearInterval(downTimer);
        start.textContent = 'start';
    } else {
        start.textContent = 'stop';
        downTimer = setInterval(secondPassed, 5)
    }

});
let seconds = 1500;

function secondPassed() {
    let minutes = Math.round((seconds - 30) / 60),
        remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('pomodoro-time').textContent = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(downTimer);
        document.getElementById('pomodoro-time').textContent = "25:00";
        start.textContent = 'start';
    } else {
        seconds--;
    }
}