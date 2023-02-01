function makePizza(flavor, callback){
    console.log("Order Recieved");
    console.log("Preparing Your Order");
    setTimeout(function(){
        callback(flavor)
    },1000)
    return;
}


function handlePizza(pizza){
console.log("Eating " + pizza)
}
makePizza("Tikka",handlePizza);