

const header = document.querySelector('header');
const headerCopy = header.innerHTML;

let timerId;

let limitExecByInterval = function(fn, time) {	
    let lock, execOnUnlock, args;
    return function() {
        args = arguments;
        if (!lock) {				
            lock = true;
            var scope = this;
            setTimeout(function(){
                lock = false;
                if (execOnUnlock) {
                    args.callee.apply(scope, args);
                    execOnUnlock = false;
                }
            }, time);
            return fn.apply(this, args);
        } else execOnUnlock = true;
    }
}

window.addEventListener('scroll', function(){
    header.classList.toggle('active', window.pageYOffset > header.offsetHeight + 20);
    
    limitExecByInterval(hideHeader, 250)()
});

function hideHeader(){
    if(header.classList.contains('active') && header.querySelector('.header__logo') && header.querySelector('.header__contact')){
        header.querySelector('.header__logo').remove();
        header.querySelector('.header__contact').remove();
        header.querySelector('.header__menu').style.margin = "auto 0"
    }
    if(!header.classList.contains('active')){
        header.innerHTML = headerCopy;
  }
  
  
}


let goods = [
    {   "id": "1",
        "type": "sushi-roll",
        "name": "Эби тамаго тен",
        "amount": "8",
        "price": "2300",
        "img": "img/ebi-tamago.jpg"

    },
    {
        "id": "2",
        "type": "sushi-roll",
        "name": "Филадельфия люкс",
        "rating": "topProduct",
        "amount": "8",
        "price": "2400",
        "img": "img/filadelfiya-luxe.jpg"
    },
    {
        "id": "3",
        "type": "sushi-roll",
        "name": "Такуан",
        "amount": "8",
        "price": "2000",
        "img": "img/texas.jpg"
    },
    {
        "id": "4",
        "type": "sushi-roll",
        "name": "Канада",
        "amount": "8",
        "price": "2200",
        "img": "img/ebi-tamago.jpg"
    },
    {
        "id": "5",
        "type": "sushi-roll",
        "name": "Калифорния Эби",
        "amount": "8",
        "price": "2100",
        "img": "img/kaliforniya-s-tuncom.jpg"
    },
    {
        "id": "7",
        "type": "sushi-roll",
        "name": "Масаго сяке тен",
        "rating": "topProduct",
        "amount": "8",
        "price": "2100",
        "img": "img/masago.jpg"
    },
    {
        "id": "8",
        "type": "sushi-roll",
        "name": "Техас",
        "amount": "8",
        "price": "2100",
        "img": "img/texas.jpg"
    },
    {
        "id": "7",
        "type": "sets",
        "name": "Сет Нихао",
        "rating": "topProduct",
        "amount": "8",         
        "price": "9100",
        "img": "img/set-nihao.jpg"
    },
    {
        "id": "9",
        "type": "sets",
        "name": "Сет Аригато",
        "amount": "8",
        "price": "8100",
        "img": "img/set-arigato.jpg"
    },
    {
        "id": "10",
        "type": "sets",
        "name": "Сет Амурами",
        "amount": "8",
        "price": "10000",
        "img": "img/set-amurami.jpg"
    },
    {
        "id": "11",
        "type": "sets",
        "name": "Сет Айко",
        "rating": "topProduct",
        "amount": "8",
        "price": "12200",
        "img": "img/set-ayko.jpg"
    },
    {
        "id": "12",
        "type": "sets",
        "name": "Сет Кампай",
        "amount": "8",
        "price": "8900",
        "img": "img/set-kampay.jpg"
    },
    {
        "id": "13",
        "type": "sets",
        "name": "Сет Изуми",
        "amount": "8",
        "price": "1100",
        "img": "img/set-izumi.jpg"
    },
    {
        "id": "14",
        "type": "pizza",
        "name": "Сырная",
        "rating": "topProduct",
        "amount": "8",
        "price": "2300",
        "img": "img/sheese.jpeg"
    },
    {
        "id": "15",
        "type": "pizza",
        "name": "Ветчина и сыр",
        "amount": "8",
        "price": "2500",
        "img": "img/vetchina-cheese.jpeg"
    },
    {
        "id": "16",
        "type": "pizza",
        "name": "Диабло",
        "amount": "8",
        "price": "2400",
        "img": "img/diablo.jpeg"
    },
    {
        "id": "17",
        "type": "pizza",
        "name": "Пепперони",
        "amount": "8",
        "price": "2600",
        "img": "img/pepperoni.jpeg"
    },
    {
        "id": "18",
        "type": "pizza",
        "name": "4 сезона",
        "rating": "topProduct",
        "amount": "8",
        "price": "2500",
        "img": "img/4-seasons.jpeg"
    },
    {
        "id": "19",
        "type": "drinks",
        "name": "Pepsi 1л",
        "amount": "8",
        "price": "700",
        "img": "img/pepsi.jpg"
    },
    {
        "id": "20",
        "type": "drinks",
        "name": "Lipton 1л",
        "amount": "8",
        "price": "700",
        "img": "img/lipton.jpg"
    },
    {
        "id": "21",
        "type": "drinks",
        "name": "Добрый 1л",
        "amount": "8",
        "price": "900",
        "img": "img/dobryi.jpg"
    },
    {
        "id": "22",
        "type": "snacks",
        "name": "Куриные наггетсы 8 шт",
        "amount": "8",
        "price": "1200",
        "img": "img/nuggets.jpg"
    },
    {
        "id": "23",
        "type": "snacks",
        "name": "Куриные крылышки 5 шт",
        "rating": "topProduct",
        "amount": "8",
        "price": "1300",
        "img": "img/wings.jpg"
    },
    {
        "id": "24",
        "type": "snacks",
        "name": "Картошка фри",
        "amount": "8",
        "price": "900",
        "img": "img/fries.jpg"
    },
    {
        "id": "25",
        "type": "snacks",
        "name": "Луковые кольца",
        "amount": "8",
        "price": "1400",
        "img": "img/onion.jpg"
    },

]



document.querySelector('.header__menu').onmousedown = () => false;
document.querySelector('.header__menu').onselectstart = () => false




