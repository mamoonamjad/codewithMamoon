$(function(){
    loadRecipes();
    $("#recipes").on("click",".btn-danger",handleDelete);
    $("#recipes").on("click",".btn-warning",handleEdit);
    $("#add").click(addRecipe)
})
function loadRecipes(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"GET",
        success:function(response){
            console.log(response);
            var recipes = $("#recipes");
            recipes.empty();

            for(let i=0;i<=response.length;i++){
                let rec = response[i];
                // recipes.append("<div><h3>" +rec.title+ "</h3></div>" + "<br>");
                recipes.append(`<div class="recipe" data-id="${rec.id}">
                <h3> ${rec.title}</h3> 
                <p> 
                <button class="btn btn-danger btn-sm float-end">Delete</button>
                <button id="edit" class="btn btn-warning btn-sm float-end">Edit</button>
                ${rec.body}
                </p>
                </div>`);
            }
            
        },
        error:function(response){
            var recipes= $("#recipes");
            recipes.html("An error has occured")
        }

    })
}

function handleDelete(){
    var btn= $(this);
    var parentDiv= btn.closest(".recipe");
    let id= parentDiv.attr("data-id");
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/" +id,
        method:"DELETE",
        success:function(){
            loadRecipes();
        }
    })
    }
    
    
    function handleEdit(){
        var btn= $(this);
        var parentDiv= btn.closest(".recipe");
        let id= parentDiv.attr("data-id");
    
        let id_1 = $("#update_id").val();
        let body= $("#edit").val();
        
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts/" + id,
            method:"PUT",
            data:{id_1, body},
            success:function(){
                loadRecipes();
            }
        })
    }
function addRecipe(){
    let title= $("#title").val();
    let body= $("#body").val();
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"POST",
        data: {title,body},
        success:function(){
            console.log(response);
            loadRecipes();
        }
    })
}

