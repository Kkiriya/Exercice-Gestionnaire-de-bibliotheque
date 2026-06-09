import prisma from "../utils/prisma";

// 1) tous les livres
export async function getTousLesLivres() {
  return prisma.livre.findMany();
}

// 2) Seulement les livres disponibles
export async function getLivresDisponibles() {
  return prisma.livre.findMany({
    where: { disponible: true },
  });
}

// 3) un livre par son id
export async function getLivreParId(id: number) {
  return prisma.livre.findUnique({
    where: { id },
  });
}

// 4) Recherche partielle par auteur
export async function chercherParAuteur(motcle: string) {
  return prisma.livre.findMany({
    where: {
      auteur: { contains: motcle, mode: "insensitive" },
    },
  });
}
