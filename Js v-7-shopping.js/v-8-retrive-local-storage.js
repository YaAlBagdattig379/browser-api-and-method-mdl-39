// v-7 er por step by step ei v-8 a discussed ache..with indication

// six function>>>  6
const displayLocalStorageCart = () =>{ // to display local storage cart/data
    const cart = getCart();
    for(const name in cart){
        displayProduct(name)
    }
}
const addItem  = () =>{ // first function>>>  1
    const nameField = document.getElementById("product-name");
    let name = nameField.value;
    if(!name){ // because >>> khali btn click korla jate object value na hoi
        return;
    }
    // display in the UI
    displayProduct (name);
    // add to local Storage
    addProductToCart(name)
    // to clear 
    nameField.value = '';
}
const displayProduct = name =>{ // second function>>>  2
    const ul = document.getElementById('products')
    // container.textContent= '';
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getCart = () =>{  // third function>>>  3
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
const addProductToCart = name =>{  // fourth function>>>  4
     const cart = getCart()
     if(cart[name]){ //condision for>> jodi onek quantity lage eki product tai
        cart[name] =  cart[name] + 1;
     }else{
        cart[name] = 1;
     }
     const cartStringified = JSON.stringify(cart);
     localStorage.setItem('cart',cartStringified)
     console.log(cart)
}
// fifth function>>>  5
const placeOrder = () =>{//click >> display data and local storage data remove hbe
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart()// ekhane call kora hoache because vitorer data gulo catch korbe tai