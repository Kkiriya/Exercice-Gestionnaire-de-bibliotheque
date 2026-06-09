# Exercice-Gestionnaire-de-bibliotheque

## Membres de l'equipe: 
Émile Valade
Jean-Simon Cyr

## Description

Cette application est un mini-backend développé avec **Node.js, TypeScript, Prisma et PostgreSQL (Neon)**. Elle permet de gérer un catalogue de livres ainsi que leurs emprunts.

Le projet démontre l'utilisation des opérations CRUD (Create, Read, Update, Delete) à l'aide de Prisma et d'une base de données PostgreSQL hébergée sur Neon.

### Fonctionnalités

Ajouter des livres au catalogue
Consulter tous les livres
Rechercher des livres par identifiant ou auteur
Filtrer les livres disponibles
Modifier les informations d'un livre
Supprimer un livre
Gérer les emprunts de livres
Consulter les emprunts avec les informations du livre associé

## Pour Installer le projet

```bash
// Cloner le git 
git clone https://github.com/Kkiriya/Exercice-Gestionnaire-de-bibliotheque.git
cd Exercice-Gestionnaire-de-bibiliotheque Exercice-Gestionnaire-de-bibliotheque/biblio-api

// Initialiser le projet
npm init

// Installer les dependances
npm install -D prisma typescript tsx @types/node
npm install @prisma/client @prisma/adapter-neon dotenv

// Initialiser TypeScript et Prisma
npx tsc --init
npx prisma init
```

### Connection a la database
Pour connecter le projet a votre db Neon ajouter votre DATABASE_URL a votre .env
```.env
// Example de .env
DATABASE_URL="postgresql://neondb_owner:******************************************************************
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://neondb_owner:*******************************************************
```

## Pour executer le projet
```bash
// Remplir la db
npx prisma migrate dev --name init

// Executer le projet
npm run dev

// Voir les resultat
npm run db:studio
```

## Example d'affichage studio
<img width="1915" height="924" alt="image" src="https://github.com/user-attachments/assets/6e29bb8f-c923-4d49-8236-f800d4a55a9f" />
