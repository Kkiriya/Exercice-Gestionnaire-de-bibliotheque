import prisma from "../utils/prisma";

export async function supprimerLivre(id: number) {
  return prisma.livre.delete({
    where: { id },
  });
}

export async function supprimerAnciens(avantAnne: number) {
  return prisma.livre.deleteMany({
    where: { annee: { lt: avantAnne } },
  });
}
