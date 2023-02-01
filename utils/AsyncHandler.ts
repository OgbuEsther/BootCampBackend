import { Request  , Response , NextFunction} from "express";


export const asyncHandler = (fn:any) =>{
async(req:Request , res:Response , next:NextFunction):Promise<void> =>{
    Promise.resolve(fn(req, res, next)).catch(next)
}
}


