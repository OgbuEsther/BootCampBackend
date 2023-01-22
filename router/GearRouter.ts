import { Router } from "express";
import { getAllGear, getOneGear, newGear } from "../controller/GearController";

const gearRouter = Router();

gearRouter.route("/getall").get(getAllGear);
gearRouter.route("/new").post(newGear);
gearRouter.route("/getone/:gearID").post(getOneGear);

export default gearRouter;
