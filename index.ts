import express, {NextFunction, Request, Response} from "express";
import { WeatherController } from "./weatherController";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const API_KEY = "8f7764f30c914759951151004240602";
const weatherController = new WeatherController(API_KEY);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Route pour tester que notre api est sur la bonne voie :)
app.get("/testApi",  (req: Request, res: Response) => {
  res.send("Coucou, je suis dans l'API météo");
})

app.get("/weather/:city", async (req: Request, res: Response, next: NextFunction) => {
  await weatherController.getWeather(req, res, next);
})


app.listen(PORT, () => {
  console.log(`Le server est en cours d'execution sur le port ${PORT}`);
});