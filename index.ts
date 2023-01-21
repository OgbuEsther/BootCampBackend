import express, { Application, Request, Response } from "express";
import cors from "cors";
import authRouter from "./router/auth.routes";
require("./config/db");

const port: number | string = process.env.port || 5000;

const server: Application = express();
server.use(cors());
server.use(express.json());

server.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server is up and running",
  });
});

server.use("/api/auth", authRouter);

server.listen(port, () => {
  console.log(`server is up on port : ${port}`);
});
