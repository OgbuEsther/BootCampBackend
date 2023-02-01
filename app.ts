import express, { Application } from "express"
import cors from "cors"


export const appConfig = (app:Application) =>{

    app.use(express.json()).use(cors)

}
