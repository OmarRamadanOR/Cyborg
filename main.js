bodyEl = document.querySelector('body');
const navBar = document.querySelector('nav');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', () => {
    navBar.classList.add('active')
});

// closeMenu.addEventListener('click', () => {
//     navBar.classList.remove('active')
// });

bodyEl.addEventListener('click', el => {
    let clickedEl = el.target;
    if (!clickedEl.classList.contains('open-menu') && !clickedEl.classList.contains('nav-links')) {
        navBar.classList.remove("active");
    }
});


// Deadline for newApp

let countDownTime = new Date("Jan 18, 2025 00:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownTime - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);

