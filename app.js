const images = [
    'url(img/bg.png)no-repeat center/cover',
    'url(img/bg2.jpg)no-repeat center/cover',
    'url(img/bg3.jpeg)no-repeat center/cover'
]

let index = 1;

let h6 = document.getElementById('h6');

h6.innerText = "+" + images.length;

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click', ()=> {
    index -= 1;
    if (index < 0) {
        index = (images.length) - 1;
    } 

    style.setProperty('--background', images[index]);
})

btn_right.addEventListener('click', ()=> {
    index++
    if (index > (images.length) - 1) {
        index = 0;
    } 

    style.setProperty('--background', images[index]);
})