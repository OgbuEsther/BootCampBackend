import authModel from "../model/auth.model";
import { Request, Response } from "express";

//register

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const user = await authModel.create({
      name,
      email,
      password,
      isAdmin,
    });

    return res.status(201).json({
      message: "user has been registered",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//get

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await authModel.find();

    return res.status(200).json({
      message: "all users has been  gotten",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//login
export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(401).json({
        message: "invalid email",
      });
    }
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: " please enter a valid email",
      });
    }

    return res.status(201).json({
      message: "user found",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};
