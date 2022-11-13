// shopping are used in here to clear understandig of storage (local or session) 
const addItem  = () =>{
    const nameField = document.getElementById("product-name");
    let name = nameField.value;
    nameField.value = '';
    // display in the UI
    displayProduct (name);
    // add to local Storage
    addProductToCart(name)
}
const displayProduct = name =>{
    const ul = document.getElementById('products')
    // container.textContent= '';
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getCart = () =>{
     let cart = localStorage.getItem('cart');
     let cartObj ;
     if(cart){
        cartObj = JSON.parse(cart);
     }
     else{
        cartObj = {};
     }
     return cartObj;
}
const addProductToCart = name =>{
     const cart = getCart()
     cart[name] = 1;
     const cartStringified = JSON.stringify(cart);
     localStorage.setItem('cart',cartStringified)
     console.log(cart)
}
// const cart = getCart(200);
// console.log(cart)