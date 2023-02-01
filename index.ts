import express, { Application, Request, Response } from "express";
import cors from "cors";
import authRouter from "./router/auth.routes";
import { dbConfig } from "./config/db";
import { appConfig } from "./app";

const port: number | string = process.env.port || 5000;

const server: Application = express();
appConfig(server)
dbConfig()




// server.use("/api/auth", authRouter);

server.listen(port, () => {
  console.log(`server is up on port : ${port}`);
});
