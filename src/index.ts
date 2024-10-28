import express, { Request, Response } from "express";

const app = express();
const port = 6310;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});