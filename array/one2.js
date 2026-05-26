let cart = []

function addToCart(){
    let product = 0;
    let max = 5;

    while(product < max){
        cart.push(product);
        product++;
    }

    console.log(cart)
    for(let i = 0; i < cart.length; i++){
        console.log(cart[i])
    }
}

addToCart()
