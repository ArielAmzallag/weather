import { NextFunction, Request, Response } from "express";
import { UNKNOWN_ERROR, WEATHER_API_ERROR } from "../constantes/errorCodes";
import { CustomError } from "../errors/CustomError";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    console.log(err.stack);
    if (err instanceof CustomError) {
        const errorMessage = err.message;
        const errorCode = err.errorcode;
        res.status(500).json({ error: errorMessage, errorCode: errorCode });
    } else {
        res.status(500).json({ error: "Une erreur inattendue s'est produite" });
    }
}