

//let a=5;
//let  b=7;

//let add = (a,b) => a+b;
//console.log(add(a,b));


//function clickbtn()
//{
    //console.log("Button Kyun dabaya");
//}

//function color(){
    //console.log("Mouse In On YOU")
//}





// function addition(){
//     let one = parseInt(document.querySelector("#in1").value)
//     let two = parseInt(document.querySelector("#in2").value)
//     let sum = one + two;
//     console.log(sum);
//     document.querySelector(".ans").innerHTML = sum;
// }

$(function(){
    $("#addbtn").click(function(){
        console.log("clicked"); 
        let one = parseInt($("#in1").val());
        let two = parseInt($("#in2").val());
        $(".ans").append(one + two);
    })

    $("#subtract").click(function(){
        console.log("clicked"); 
        let one = parseInt($("#in1").val());
        let two = parseInt($("#in2").val());
        $(".ans").append(one - two);
    })

})

$(function(){
    $("#AddBtn").click(btnhandler);
    $("#newtodo").on("click","li",removeMe);
});

function btnhandler(){

    let val = $("#todo").val();

    if(!val){
        $("#todo").addClass("red");
        return;
    }
    $("#todo").removeClass("red");
    $("#newtodo").append("<li>" +val+ "</li>")
}


function removeMe(){
$(this).remove()
}