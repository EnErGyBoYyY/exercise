import express = require("express")
import {Application, Request, Response} from "express";
import { userRoutes} from "./routers/userRouters"

const app: Application = express();
app.use("/api/", userRoutes)

app.listen(8080,() => {
    console.log("Connected")
})
