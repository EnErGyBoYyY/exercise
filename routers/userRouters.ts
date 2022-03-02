import {Request, Response, Router} from "express";
import {User} from "../types/User";
import {getUsers, login} from "../controllers/userController";

export const userRoutes = Router();

userRoutes.get("/Users",getUsers)

userRoutes.get("/Login",login)