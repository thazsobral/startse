import express from "express";
import { StatusCodes } from "http-status-codes";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

let users = [
    {
        id: 1,
        name: "Joao Marcos",
        age: 12
    },
    {
        id: 2,
        name: "Murilo Couto",
        age: 34
    }
]

app.get("/", function(request, response) {
    return response.send("<h1>hello my brother!</h1>");
});

app.get("/users", function(request, response) {
    return response.status(StatusCodes.OK).json(users);
});

app.get("/users/:id", function(request, response) {
    let id = Number(request.params.id);
    let user = users.find((user) => user.id === id);
    return response.status(StatusCodes.OK).json(user);
});

app.post("/users", function (request, response) {
    const { name, age } = request.body;
    users.push({
        id: (users.length+1),
        name: name,
        age: age
    })

    return response.status(StatusCodes.CREATED).json(users[users.length-1]);
});

app.put("/users/:id", function(request, response) {
    const id = Number(request.params.id);
    const newUser = request.body;

    users = users.map(user => {
        if(user.id === id) {
            return newUser;
        } else {
            return user;
        }
    });

    return response.status(StatusCodes.OK).json(newUser);
});

app.delete("/users/:id", function(request, response) {
    const id = Number(request.params.id);
    
    users = users.filter(user => {
        if(user.id === id) {
            return false;
        } else {
            return true;
        }
    });
    
    return response.status(StatusCodes.NO_CONTENT).json({"message": `deleted user ${id}.`});
});

app.listen(PORT, function() {
    console.log(`Server is running at http://localhost:${PORT}`);
});