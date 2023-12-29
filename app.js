let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');
let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');

checkin.addEventListener('change', ()=> {
    let checkin_value = checkin.value;
    //console.log(checkin_value)
    let dates = new Date(checkin_value);
    let dates2 = new Date();
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let day = week[dates.getDay()];

    let date = dates.getDate();

    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let month = months[dates.getMonth()];

    if (dates < dates2) {
        console.log('No Date');
    } else {
        checkin_data.innerText = day + ', ' + date + ' ' + month;
    }

})

checkout.addEventListener('change', ()=> {
    let checkout_value = checkout.value;
    let checkin_value = checkin.value;

    let dates = new Date(checkout_value);
    let dates2 = new Date(checkin_value);
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let day = week[dates.getDay()];

    let date = dates.getDate();

    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let month = months[dates.getMonth()];

    if (dates < dates2) {
        console.log('No Date');
    } else {
        checkout_data.innerText = day + ', ' + date + ' ' + month;
    }

})

let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');
let checkout_more = document.getElementById('checkout_more');
let checkout_less = document.getElementById('checkout_less');



checkin_more.addEventListener('click', ()=> {
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkin_data.innerText = day + ', ' + date + ' ' + month;


})

checkin_less.addEventListener('click', ()=> {
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    let today = new Date();
    

    let day = week[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    checkin_data.innerText = day + ', ' + date + ' ' + month;


})


checkout_more.addEventListener('click', ()=> {
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 2);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day + ', ' + date + ' ' + month;


})

checkout_less.addEventListener('click', ()=> {
    const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);
    

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day + ', ' + date + ' ' + month;


})

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