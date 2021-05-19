let a = document.querySelector(".gus")

let car = document.querySelector(".car")
let wheel1 = document.querySelector(".wheel1")
let wheel2 = document.querySelector(".wheel2")



let deg1 = 2
let left1 = 19

let deg2 = 2
let left2 = 257

let carLeft = 0

function gus(){
    left1 += 2
    deg1+= 3.2

    left2 += 2
    deg2+= 3.2

    carLeft += 2

    wheel1.style.transform = 'rotate(' + deg1 + 'deg)';
    wheel1.style.left = left1 + 'px';

    wheel2.style.transform = 'rotate(' + deg2 + 'deg)';
    wheel2.style.left = left2 + 'px';

    car.style.left = carLeft + 'px';

}

window.addEventListener("mousedown", (downe) => {
    if (downe.button !== 0) return;
    const interval = setInterval(gus, 10);
    window.addEventListener("mouseup", (upe) => {
        if (upe.button === 0) clearInterval(interval);
    }, true, true);
});