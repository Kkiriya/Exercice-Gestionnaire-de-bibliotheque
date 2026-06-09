import prisma from "../utils/prisma";

// emprunter un livre
export async function emprunterLivre(livreId: number, parQui: string) {
  // Creer l'emprunt
  const emprunt = await prisma.emprunt.create({
    data: { livreId, empruntePar: parQui },
  });

  await prisma.livre.update({
    where: { id: livreId },
    data: { disponible: false },
  });

  return emprunt;
}

// Lister tous les emprunts avec les infos du livre
export async function listerEmprunts() {
  return prisma.emprunt.findMany({
    include: { livre: true },
  });
}

// Retourner un livre (rendre l'emprunt)
export async function rendreLivre(empruntId: number) {
  const emprunt = await prisma.emprunt.delete({
    where: { id: empruntId },
  });
  await prisma.livre.update({
    where: { id: emprunt.livreId },
    data: { disponible: true },
  });
  return emprunt;
}
