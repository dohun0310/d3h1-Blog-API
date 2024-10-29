import express, { Request, Response } from "express";

const app = express();
const port = 6310;

app.get("/", (req: Request, res: Response) => {
  res.send("If you see this message, server is very healthy.");
});

app.get("/post", (req: Request, res: Response) => {
  res.send("This is a post request.");
});

app.get("/categories", (req: Request, res: Response) => {
  res.send("This is a category request.");
});

app.listen(port, () => {
  console.log(`Your app is running at http://localhost:${port}`)
})