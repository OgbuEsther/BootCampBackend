import { Router } from "express";
import { getUsers, login, register } from "../controller/Auth.controls";

const authRouter = Router();

authRouter.route("/").get(getUsers);
authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

export default authRouter;
