import { Request, Response } from "express";

import gearModel from "../model/GearModel";

//get all

const getAllGear = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getAll = await gearModel.find();

    return res.status(200).json({
      message: "gotten all head gear successfully",
      data: getAll,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get all hair gears",
      data: error,
    });
  }
};

//get one

const getOneGear = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getOne = await gearModel.findById(req.params.gearID);
    return res.status(200).json({
      message: "gotten single data ",
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get one hair gears",
      data: error,
    });
  }
};

//post

const newGear = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, price, status, views, image } = req.body;
    const newGear = await gearModel.create({
      name,
      price,
      status,
      views,
      image,
    });

    return res.status(201).json({
      messager: "new gear added successfully",
      data: newGear,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to create new hair gears",
      data: error,
    });
  }
};

const GearViews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const views = await gearModel.findByIdAndUpdate(
      req.params.gearID,
      {
        $push: { views: req.params.ip },
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Successfully got users views on this house",
      data: views,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Couldn't get users views",
      data: error,
    });
  }
};

export { getAllGear, getOneGear, newGear, GearViews };
