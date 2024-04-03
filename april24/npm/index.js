const express = require('express')
const app = express()

const bodyParser = require("body-parser") // for parsing application/json
app.use(bodyParser.json())

let todos = [];
let number_of_todos = 1;

// GET requests should NEVER have a body

// returns entire to do list or a single one
app.get('/todo', function (req, res) {
    // check if a body was provided in the request
    if(Object.keys(req.body).length != 0) {
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else {
        // check if an id was passed or not from the client
        // if not, return all todos
        if(req.query.id == undefined) {
            res.json({todos})
        } else {
            let clientTask = {};
            // or can set "let clientTask" so that it comes out as undefined 
            for(let i=0; i < todos.length; i++) {
                if(todos[i].id == req.query.id) {
                    clientTask = todos[i];
                }
            }
            console.log(Object.keys(clientTask))
            if(Object.keys(clientTask).length === 0) {
                // match not found, return error
                res.status(400).json({
                    error: "Todo with that id not found"
                })
            } else {
                // send back matching result of todos[i]
                res.json(clientTask);
            }
        }
    }
    
})


// returns a single to do list item
// use a for loop instead to account for deleted or edited items
// app.get('/todo', function (req, res) {
//     // console.log("Query Parameter ID: ", req.query.id);
//     // let taskId = req.params.id;
//     // res.json({todos});
//     if(isNaN(req.params.id)) {
//         res.status(404).json({
//             message: "client error"
//         });
//     } if(req.params.id >= 0 && req.params.id <= todos.length) {
//         let index = req.params.id - 1;
//         res.json(todos[index]);
//     } else {
//         res.status(404).json({
//             message: "client error"
//         });
//     }
// })


// adds a single task to the to do list
app.post('/todo', function(req, res){
    // check if there is an array called list
    if(req.body.list == undefined) {
        // add a single todo
        let listItem = {
            id : number_of_todos++,
            todo : req.body.todo,
            completed : false,
        }
        todos.push(listItem);
        res.json({todo: todos[todos.length - 1]});
    } else if (req.body.list.length > 0) {
        console.log("bulk insert in progress")
        for(let i = 0; i < req.body.list.length; i++) {
            console.log(req.body.list[i].todo);
            let listItem = {
                id : number_of_todos++,
                todo : req.body.list[i].todo,
                completed: false,
            }
            todos.push(listItem);
        }
        res.json(todos);
    }
})


// updates a single task in the to do list
app.put('/todo/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(404).json({
            message: "client error"
        });
    } if(req.params.id >= 0 && req.params.id <= todos.length) {
        let index = req.params.id - 1;
        todos[index].todo = req.body.todo;
        res.json(todos[index]);
    } else {
        res.status(404).json({
            message: "client error"
        });
    }
})


// patch to change todo item to "completed"
app.patch('/todo/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({
            message: "client error"
        });
    } else if(req.params.id >= 0 && req.params.id <= todos.length) {
        let index = req.params.id - 1;
        todos[index].complete = todos[index].todo;
        res.json(todos[index]);
    } else {
        res.status(400).json({
            message: "client error"
        });
    }
})

// deletes single task from the to do list
app.delete('/todo/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({
            message: "client error"
        });
    } else if(req.params.id >= 0 && req.params.id <= todos.length) {
        console.log("ID from Client: ", req.params.id)
        let deleteIndex = req.params.id - 1;
        let tempValue = todos[deleteIndex];
        todos.splice(deleteIndex, 1);
        res.json({todo: tempValue});
    } else {
        res.status(404).json({
            message: "client error"
        });
    }
})


// opens a port on your computer for the server to listen to incoming requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})