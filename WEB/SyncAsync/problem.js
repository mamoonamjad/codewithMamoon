function makePizaa(flavor){
    setTimeout(function(){
        console.log("Preparing Pizza")
    },2000)
    return "Order " + flavor+ " Pizza";
}

console.log(makePizaa("Tikka"))