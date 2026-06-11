import { Router, Request, Response } from "express";
import prisma from "./../../utils/prisma.js";
import { error } from "node:console";

const router = Router();

//htpp://localhost:3000/livre/50/test
router.get("/", async (req: Request, res: Response) => {
  const livres = await prisma.Livre.findMany();
  res.json(livres);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const livre = await prisma.Livre.findUnique({ where: { id } });
  if (!livre) {
    return res.status(404).json({ error: "Utilisateur non existant" });
  }
  res.json(livre);
});

// http://localhost:3000/Livres?auteur=Hugo
router.get("/livres", (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { titre, auteur, annee } = req.body;
    const livre = await prisma.Livre.create({ data: { titre, auteur, annee } });
    res.status(201).json(livre);
  } catch (e) {
    res.status(400).json({ error: "Creation impossible" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const livre = await prisma.Livre.delete({ where: { id } });
    res.status(204).json(livre);
  } catch (e) {
    res.status(400).json({ error: "Supression impossible" });
  }
});

export default router;
