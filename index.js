var express = require("express");
var todos_db = require("./seed.js");


var app = express();


app.use("/", function(req, res, next){
    console.log("Request");
    console.log(req.url);
    console.log(req.method);

    next();
});

// Serve Static Assets in public directory
app.use("/", express.static(__dirname+"/public"));

// What all interactions?
// 1. get all todos
// 2. add a todo
// 3. complete a todo (modifying)
// 4. delete a todo


// HW : RESTful APIs
// Let's you put some structure to your API

// Endpoint - that denotes a noun
// Request Method - action you want to take


// 1. get all todos
// http://localhost:4000/todos/ GET


// GET /todos
// Return a JSON object of all of these todos

app.get("/api/todos", function(req, res){
    res.json(todos_db.todos);
})





// 2. delete a todo (with some id:id)
// http://localhost:4000/todos/:id DELETE

// 3. add a todo
// http://localhost:4000/todos POST

// 4. complete a todo - that's like modifying
// http://localhost:4000/todos/:id PUT




app.listen(4000);