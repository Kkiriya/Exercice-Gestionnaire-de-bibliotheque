import prisma from "../utils/prisma";
import {
  getTousLesLivres,
  getLivresDisponibles,
  getLivreParId,
  chercherParAuteur,
} from "./lecture.ts";

import { marquerIndisponible, corrigerAnnee } from "./update.ts";

async function seed() {
  const livres = await prisma.livre.createMany({
    data: [
      {
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        annee: 1943,
        disponible: true,
      },
      {
        titre: "1984",
        auteur: "George Orwell",
        annee: 1949,
        disponible: true,
      },
      {
        titre: "Supermarket",
        auteur: "Bobby Hall",
        annee: 2019,
        disponible: false,
      },
      {
        titre: "The Midnight Library",
        auteur: "Matt Haig",
        annee: 2020,
        disponible: true,
      },
      {
        titre: "Royal",
        auteur: "Jean-Philippe Baril Guérard",
        annee: 2016,
        disponible: false,
      },
    ],
  });
  console.log("Créé :", livres);
}

async function main() {
  await seed();

  console.log("\n--- Tous les livres ---");
  console.log(await getTousLesLivres());

  console.log("\n--- Livres disponible ---");
  console.log(await getLivresDisponibles());

  console.log("\n--- Livre #1 ---");
  console.log(await getLivreParId(1));

  console.log("\n--- Recherche : 'saint' ---");
  console.log(await chercherParAuteur("saint"));

  console.log("\n--- Test des updates ---");
  console.log(await marquerIndisponible(1));
  console.log(await corrigerAnnee(2, 2024));

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
