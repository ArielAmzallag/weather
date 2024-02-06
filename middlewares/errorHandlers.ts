import { NextFunction, Request, Response } from "express";

export class WeatherError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    console.log(err.stack);
    if (err instanceof WeatherError) {
        const errorMessage = err.message;
        res.status(500).json({ error: errorMessage });
    } else {
        res.status(500).json({ error: "Une erreur inattendue s'est produite" });
    }
}