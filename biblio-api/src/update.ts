import prisma from "../utils/prisma";

// Marquer un livre comme indisponible
export async function marquerIndisponible(id: number) {
  return prisma.livre.update({
    where: { id },
    data: { disponible: false },
  });
}

// Corriger l'annee d'un livre
export async function corrigerAnnee(id: number, nouvelleAnnee: number) {
  return prisma.livre.update({
    where: { id },
    data: { annee: nouvelleAnnee },
  });
}
