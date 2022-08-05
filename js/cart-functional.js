function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
let cartPageContent = document.querySelector('.cart-table');

let cartData = getCartData(); // вытаскиваем все данные корзины

// если что-то в корзине уже есть, начинаем формировать данные для вывода
let templOrder = document.querySelector('#order-template').innerHTML;
let compileOrder = _.template(templOrder);
let cartTable = document.querySelector('.order-table');

for(let i = 0; i< Object.values(cartData).length; i++){
    let orderObj = {
        "id": Object.values(cartData)[i][3],
        "orderImage": Object.values(cartData)[i][2],
        "orderName": Object.values(cartData)[i][0],
        "orderNumber": Object.values(cartData)[i][4],
        "orderPrice": Object.values(cartData)[i][1],
        "orderSum": parseInt(Object.values(cartData)[i][1]) * parseInt(Object.values(cartData)[i][4]),
    }
    let orderProduct = document.createElement('div');
    orderProduct.setAttribute('id', orderObj.id);
    orderProduct.className = 'order-product'
    orderProduct.innerHTML = compileOrder(orderObj);
    cartTable.append(orderProduct)
}

document.querySelectorAll('.plus-btn').forEach((item) => {
    item.onclick = plusNumber;
    item.onmousedown = () => false;
    item.onselectstart = () => false
})
document.querySelectorAll('.minus-btn').forEach((item) => {
    item.onclick = minusNumber;
    item.onmousedown = () => false;
    item.onselectstart = () => false
})
// Узнать полную сумму
function setTotalSum(){
    let sums = document.querySelectorAll(".order-product__sum");
    let totalSum = 0;
    sums.forEach(function(sum){
        totalSum += parseInt(sum.innerHTML)
    });

    document.querySelector('.total-sum').innerHTML = totalSum;
}

function plusNumber(){
    let result = this.parentNode.querySelector('.order-product__number');
    result.innerHTML = parseInt(result.innerHTML) + 1;
    let sum = this.parentNode.parentNode.querySelector('.order-product__sum');
    sum.innerHTML = parseInt(sum.innerHTML) + parseInt(sum.dataset.price) + " &#8376;";
// добавить в localStorage
    let id = this.parentNode.parentNode.id; 
    cartData[id][4] += 1;
    localStorage.setItem('cart', JSON.stringify(cartData));

    setTotalSum()
}

function minusNumber(){
    let result = this.parentNode.querySelector('.order-product__number');
    result.innerHTML = parseInt(result.innerHTML) - 1;
    let sum = this.parentNode.parentNode.querySelector('.order-product__sum');
    sum.innerHTML = parseInt(sum.innerHTML) - parseInt(sum.dataset.price) + " &#8376;";
// добавить в localStorage
    let id = this.parentNode.parentNode.id;
    cartData[id][4] += -1;

    if(parseInt(sum.innerHTML) == 0) itemDelete(sum, id);
    localStorage.setItem('cart', JSON.stringify(cartData));

    setTotalSum()
}

function itemDelete(item, id){
   item.parentNode.remove();
   delete cartData[id];
   if(Object.keys(cartData).length == 0){
    document.querySelector('.cart-title').innerHTML = 'Ваша корзина пуста';
    document.querySelector('.make-order').remove();
   }
}

if(Object.keys(cartData).length == 0){
    document.querySelector('.cart-title').innerHTML = 'Ваша корзина пуста';
    document.querySelector('.cart-title').classList.add('empty-cart');
    
    document.querySelector('.make-order').remove();
}

setTotalSum()