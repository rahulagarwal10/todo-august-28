console.log("Is Script File Loading");
const RESPONSE_DONE = 4;
const STATUS_OK = 200;
const TODOS_LIST_ID = "todos_list_div";

// AJAX - xmlhttprequest object
// make requests to the server
// 1. without reloading the webpage
// 2. asynchronously

function add_todo_elements(id, todos_data_json){

    var parent = document.getElementById(id);
    parent.innerText = todos_data_json;
}

// Repo URL - https://github.com/malikankit/todo-august-28

function getTodosAJAX(){

    // xhr - JS object for making requests to server via JS
    var xhr = new XMLHttpRequest();
    //
    xhr.open("GET", "/api/todos", true);

    xhr.onreadystatechange = function(){

        if (xhr.readyState == RESPONSE_DONE){

            if(xhr.status == STATUS_OK){
                console.log(xhr.responseText);
                add_todo_elements(TODOS_LIST_ID, xhr.responseText);
            }
        }
    }// end of callback

    xhr.send(data=null);

}


