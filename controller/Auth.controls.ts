import authModel from "../model/auth.model";
import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { AppError, HttpCodes } from "../utils/AppError";

//register

export const register = asyncHandler(
  async (
    req: Request,
    res: Response,
    next : NextFunction
  ): Promise<Response> => {
    
      const { name, email, password, isAdmin } = req.body;
      const user = await authModel.create({
        name,
        email,
        password,
        isAdmin,
      });

      if (!user){
        next(
          new AppError({
            message : "couldn't create user",
            name : AppError.name,
            httpcode : HttpCodes.BAD_REQUEST
          })
        )
      }
  
      return res.status(201).json({
        message: "user has been registered",
        data: user,
      });
    
    
    
  }
)

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
export const login = asyncHandler(
  async (req: Request, res: Response , next : NextFunction): Promise<Response> => {
  
    const { email } = req.body;
    if (!email) {
 next(
  new AppError ({
    message : "invalid Email",
    name : AppError.name,
    httpcode : HttpCodes.BAD_REQUEST
  })
 )
    }
    const user = await authModel.findOne({ email });
    if (!user) {
    next(
      new AppError({
        message : "user not found",
        name : AppError.name,
        httpcode : HttpCodes.NOT_FOUND
        
      })
    )
    }

    return res.status(201).json({
      message: "user found",
      data: user,
    });
  
  
}

)