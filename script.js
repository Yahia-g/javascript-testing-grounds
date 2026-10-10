const quantityInput = document.getElementById('counter');
const showquantity = document.getElementById('showquantity');
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const add3 = document.getElementById('add3');
const reset = document.getElementById('reset');
let quantity = 0;
showquantity.addEventListener('click', () => {
    counter.innerHTML = quantity;
});
reset.addEventListener('click', () => {
    quantity = 0;
    counter.textContent = quantity;
});
add1.addEventListener('click', () => {
    quantity += 1;
});
add2.addEventListener('click', () => {
    quantity += 2;
});
add3.addEventListener('click', () => {
    quantity += 3;
});