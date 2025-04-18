const cartbuyProducts = document.getElementById('buy-products-content')//CONST FOR CART.HTML AND IT IS TO FIND WHERE THE PRODUCTS THAT THE USER WILL BUY APPEAR
const btnEmpty = document.querySelector('.btn-empty');//SEARH THE .BTN-EMPTY
const sendBtn = document.querySelector('.send-btn');//SEARCH THE SEND BTN
const sendAlert = document.querySelector('.send-alert');//SEARCH THE SENDALERT DIV

//EVENTS
document.addEventListener('DOMContentLoaded', cartBuyProducts)//THIS EVENT CHARGE ALL THE PRODUCTS WHEN THE USER GET IN THE CART.HTML
//THIS EVENT VALIDATES IF THE USER CLICKED ON DELETE BUTTON 
document.addEventListener('click', (e) => {deleteproductCart(e)});
//SENDTN EVENT
sendBtn.addEventListener('click', () => {
    sendAlert.classList.add('send-alert-visible');
})

//CALL THE GETITEMS FUNCTION FROM THE PRODUCTS.JS
getItemLS();

//SHOW ALL THE PRODUCTS THAT THE USER WANTS TO BUY
function cartBuyProducts(){
    let productsLS = getItemLS();
    cartbuyProducts.innerHTML= "";
    if(productsLS.length === 0){
        cartbuyProducts.innerHTML = `
        <div class="flex justify-center column gap-m">
        <h2 class="section-title black-text">YOUR CART IS EMPTY :(</h2>
        <a href="../index.html" class="btn-empty text-center">Let's Shop</a>
        </div>
        `
    }else{
        productsLS.forEach(product => {
            let cartProductList = document.createElement('div');
            cartProductList.classList.add('product-cart-list')
            cartProductList.innerHTML = `
                <img src="${product.image}" alt="product image" class="product-img">
                <div class="product-details flex column">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-price">$${product.price}</span>
                    <button class="delete-btn">X</button>
                </div>
            `
            cartbuyProducts.appendChild(cartProductList);
        })
    }
} 
//DELETE PRODUCTS IN LOCALSTORAGE AND THE DOM
function deleteproductCart(e){
    if(e.target.classList.contains('delete-btn')){
        let products = getItemLS();
        let productID = parseInt(products.id);
        products.splice(productID, 1);
        saveLS(products)
        cartBuyProducts();
    }
}