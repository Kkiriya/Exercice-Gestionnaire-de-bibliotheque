import { Router, Request, Response } from "express";

const routerUser = Router();

//htpp://localhost:3000/livre/50/test
routerUser.get("/users/:id/:salut", (req: Request, res: Response) => {
  res.json();
});

// http://localhost:3000/Livres?auteur=Hugo
routerUser.get("/users", (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});

routerUser.post("/", (req: Request, res: Response) => {
  console.log("Hello");
});

export default routerUser;
