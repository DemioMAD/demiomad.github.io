$(document).ready(() => {
    const today = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric' };

    const month = today.getMonth();
    const day = today.getDate();

    $(".date").text(today.toLocaleDateString('en-US', options).replace(",", ""));

    if (month === 2 && day === 27) {
        $('main').append('<h4>🎉 It\'s my birthday! 🎉</h4>');
        document.title = "🎂 Demiomad\'s Birthday";
        $('#big-typing').text("🎂 Demiomad\'s website thingy 🎊🎉");

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.015 }
        });

        const duration = 5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                spread: 60,
                origin: { y: 0.015 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

    function getNextBirthday() {
        const now = new Date();
        let birthday = new Date(`March 27, ${now.getFullYear()} 00:00:00`);

        if (now > birthday) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }

        return birthday;
    }

    let birthday = getNextBirthday();
    const countdownElement = $(".countdown");

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = birthday - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.text(`${days}d ${hours}h ${minutes}m ${seconds}s until my birthday!`);

        if (distance < 0) {
            clearInterval(interval);
            location.reload(true);
        }
    };

    let interval = setInterval(updateCountdown, 1000);

    updateCountdown();

    const updateTime = () => {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        $(".time").text(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    setInterval(updateTime, 1000);
});

$(".cool-ppl").click(() => {
    window.location = "pages/cool-guys.html";
});

$(".back").click(() => {
    window.location = "../index.html";
});