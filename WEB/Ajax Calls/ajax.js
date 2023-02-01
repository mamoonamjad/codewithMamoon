
$(function(){
$("#load").click(function(){
    $.get("student.txt", function(response){
        $(".list").empty();
        $(".list").append(response);
    });
});
})


// function sendAjax(){
// console.log("Sending Ajax Request")
// //requests are here
// $.get("student.txt",handleResponse);
// console.log("Request Recieved");
// };


// function handleResponse(response){
// console.log(response);
// $(".list").empty();
// $(".list").append(response);
// };