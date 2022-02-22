import express = require("express")
import {Application, Request, Response} from "express";

const app: Application = express();

app.get("/", (req:Request,res:Response)=> {
    res.send({
        status: 200,
            message: "Success"
    })
})

type User ={
    id : number,
    username: string,
    password: string
}
app.get("/user", (req:Request,res:Response)=> {
    const user: User = {
        id: 1,
        username: "dani",
        password: "1234"
    }
    res.send(user)
})
type LoginQueryParams = {
    username?: string,
    password?: string
}
app.get("/login", (req:Request,res:Response)=> {
    const queryParams: LoginQueryParams = req.query;
    if (!queryParams.username || !queryParams.password)  {
        res.send({
            status: 400,
            message: "Username or password has not been passed"
        })
    }

    res.send({
        status:200,
        message:"Logged in"
    })
})

app.listen(8080,() => {
    console.log("Connected")
})
