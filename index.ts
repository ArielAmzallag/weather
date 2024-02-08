import express, {NextFunction, Request, Response} from "express";
import { WeatherController } from "./controllers/weatherController";
import { errorHandler } from "./middlewares/errorHandlers";
import { API_KEY } from "./constantes/config";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const weatherController = new WeatherController(API_KEY);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Route pour tester que notre api est sur la bonne voie :)
app.get("/testApi",  (req: Request, res: Response) => {
  res.send("Coucou, je suis dans l'API météo");
})

app.get("/weather/:city", async (req: Request, res: Response, next: NextFunction) => {
  await weatherController.getWeather(req, res, next);
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Le server est en cours d'execution sur le port ${PORT}`);
});