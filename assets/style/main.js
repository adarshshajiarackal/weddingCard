$(document).ready(function () {

    function animateValue(id, newValue) {
        let el = document.getElementById(id);

        gsap.to(el, {
            innerText: newValue,
            duration: 0.6,
            snap: { innerText: 1 },
            ease: "power1.out"
        });
    }

    const targetDate = new Date("April 21, 2026 00:00:00").getTime();
    let popupShown = false;

    function updateCountdown1() {
        const now = new Date().getTime();
        const gap = targetDate - now;

        if (gap <= 0) {
            if (!popupShown) {
                showPopup(); // your popup function
                popupShown = true;
            }
            return;
        }

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((gap / (1000 * 60)) % 60);
        const seconds = Math.floor((gap / 1000) % 60);

        animateValue("days1", days);
        animateValue("hours1", hours);
        animateValue("minutes1", minutes);
        animateValue("seconds1", seconds);
    }
    setInterval(updateCountdown1, 1000);
    updateCountdown1();
    const targetDate1 = new Date("April 19, 2026 00:00:00").getTime();
    let popupShown1 = false;
      function updateCountdown() {
        const now = new Date().getTime();
        const gap = targetDate1 - now;

        if (gap <= 0) {
            if (!popupShown1) {
                showPopup(); // your popup function
                popupShown = true;
            }
            return;
        }

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((gap / (1000 * 60)) % 60);
        const seconds = Math.floor((gap / 1000) % 60);

        animateValue("days", days);
        animateValue("hours", hours);
        animateValue("minutes", minutes);
        animateValue("seconds", seconds);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
 
    let audio = $('audio')[0];

    // autoplay when page loads
    audio.play().catch(function(error){
        console.log("Autoplay blocked:", error);
    });

    $('.play').click(function (e) { 
        e.preventDefault();

        let icon = $(this).find('i');

        if (audio.paused) {
            audio.play();
            icon.removeClass('bi-play-fill').addClass('bi-pause-fill');
        } else {
            audio.pause();
            icon.removeClass('bi-pause-fill').addClass('bi-play-fill');
        }
    });

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Random sparkle generator
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    createSparkle(x, y);
}, 100);
});