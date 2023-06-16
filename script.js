function openList() {
    document.querySelector('nav').classList.add('active');
}
function closeList() {
    document.querySelector('nav').classList.remove('active');
}

let image1 = document.querySelector('.img1');
let image2 = document.querySelector('.img2');
let image3 = document.querySelector('.img3');
let imageBox = document.querySelector(".right")

imageBox.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    
    image1.style.transform = `rotateY(${x}deg)`
    image3.style.transform = `rotateY(${y}deg)`
}

let scrollTopIcon = document.querySelector('.scroll-top');

document.onscroll = () => {
    if(window.scrollY > 250) {
        scrollTopIcon.classList.add('active');
    } else{
        scrollTopIcon.classList.remove('active');
    }
}

scrollTopIcon.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

let listMobiles = document.querySelectorAll('.list-mobile li');

listMobiles.forEach(list => {
    list.onclick = () => {
        document.querySelector('nav').classList.remove('active');
    }
})

function navShow() {
    document.onscroll = () => {
        if(window.scrollY > 550) {
            document.querySelector('nav').classList.add('show')
        } else{
            document.querySelector('nav').classList.remove('show')
        }
    }
}
navShow();

let tech = document.querySelector('.tech .left');

tech.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    
    tech.style.transform = `rotateY(${y - 100}deg)`
}
var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})