import {Request, Response} from "express";
import {User} from "../types/User";


export const getUsers = (request: Request, response: Response) => {
    let users: User[] = [
        {
            id: 1,
            username:"Ivan",
            password: "1234"
        },
        {
            id: 2,
            username:"Dani",

            password: "1234"
        },
    ]
    response.send(users)
}
export const login = (request: Request, response: Response) => {
    const loginData = request.query;
    if (!loginData.username || !loginData.password) {
        return response.send({
            status: 400,
            message: "Username or Password not provided"
        })
    }

    response.send({
        status: 200,
        message: "Logged in successfully"
    })
}