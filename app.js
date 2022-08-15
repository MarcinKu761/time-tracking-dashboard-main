const day = document.querySelector('#day');
const week = document.querySelector('#week');
const month = document.querySelector('#month');

const daily = document.querySelectorAll('.daily');
const weekly = document.querySelectorAll('.weekly');
const monthly = document.querySelectorAll('.monthly');



day.addEventListener('click', () => {
    for(let i = 0; i < daily.length; i++){
        weekly[i].classList.remove('active');
        monthly[i].classList.remove('active');
        daily[i].classList.add('active');
    }
})


week.addEventListener('click', () => {
    for(let j = 0; j < weekly.length; j++){
        monthly[j].classList.remove('active');
        daily[j].classList.remove('active');
        weekly[j].classList.add('active');
    }
})


month.addEventListener('click', () => {
    for(let k = 0; k < monthly.length; k++){
        weekly[k].classList.remove('active');
        daily[k].classList.remove('active');
        monthly[k].classList.add('active');
    }
})