import prisma from "../utils/prisma";

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
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
