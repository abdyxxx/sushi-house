let rightArrow = document.querySelector('.slider__right-arrow');
let leftArrow = document.querySelector('.slider__left-arrow');
let roll = document.querySelector('.slider__roll');
rollItem = roll.querySelector('.slider__roll-item');
rollItems = roll.querySelectorAll('.slider__roll-item');

rightArrow.onclick = rightClick;
leftArrow.onclick = leftClick;


// размер слайдера

let slider = document.querySelector('.slider');
slider.style.maxHeight = slider.clientWidth / 2.09 + 'px';

rollItems.forEach((item) => {
    item.querySelector('img').style.width = slider.clientWidth + 'px';
})

window.onresize = function(){
    roll.style.left = '0px';
    rollItems.forEach((item) => {
        item.querySelector('img').style.width = slider.clientWidth + 'px';
        item.clientWidth = slider.clientWidth;
    })
    slider.style.maxHeight = slider.clientWidth / 2.09 + 'px';
}

function rightClick(){
    if(-roll.style.left.slice(0,-2) / rollItem.offsetWidth >= roll.querySelectorAll('.slider__roll-item').length - 1) return
    roll.style.left = roll.style.left.slice(0, -2) - rollItem.clientWidth + 'px';
    console.log(roll.style.left.slice(0,-2) / rollItem.offsetWidth >= roll.querySelectorAll('.slider__roll-item').length - 1) 
}

function leftClick(){
    if(-roll.style.left.slice(0,-2) < rollItem.offsetWidth) return
    roll.style.left = parseInt(roll.style.left.slice(0, -2)) + rollItem.clientWidth + 'px';
    console.log(roll.style.left)
}

rightArrow.onselectstart = () => false;
leftArrow.onselectstart = () => false

setInterval(rightClick, 5000)