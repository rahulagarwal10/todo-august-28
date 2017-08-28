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

function getTodosAJAX(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange = function(){
        // Write code here that needs to be
        // executed after response
        // Has response been received
        if (xhr.readyState == RESPONSE_DONE){
            // Is Response OK?
            // Status Code == 200
            if(xhr.status == STATUS_OK){
               // xhr.response // xhr.responseText
                console.log(xhr.responseText);
                add_todo_elements(TODOS_LIST_ID, xhr.responseText);
            }
        }
    }// end of callback

    xhr.send(data=null);

}


