Cookify - Site de Recettes de Cuisine

Cookify est un site web interactif permettant de gérer des recettes de cuisine. Les utilisateurs peuvent consulter des recettes, en ajouter de nouvelles et les filtrer par catégorie (Entrées, Plats, Desserts). Chaque recette peut être affichée en détail avec ses ingrédients, étapes, temps de préparation, et image associée.

📋 Introduction

Ce projet a été réalisé dans le cadre d'un cours de développement web. Il utilise les technologies modernes du web telles que TypeScript, HTML, CSS, et JSON pour le stockage des données.

L'objectif est de développer un site dynamique, bien structuré, et de comprendre les concepts clés de la programmation en TypeScript.

🚀 Fonctionnalités

Affichage dynamique des recettes sous forme de cartes.

Navigation par catégories (Entrées, Plats, Desserts).

Ajout de nouvelles recettes via un formulaire interactif.

Consultation détaillée de chaque recette.

Suppression des recettes.

Persistance des données grâce à un fichier JSON.

🛠 Technologies Utilisées

TypeScript : Langage principal utilisé pour la logique du site.

HTML/CSS : Structure et mise en forme du site.

JSON : Stockage persistant des recettes sous forme de fichier.

Jest : Utilisé pour les tests unitaires (non fonctionnels).

🧪 Instructions pour Lancer le Projet

🖥 Prérequis

Node.js installé sur votre machine.

📂 Étapes

Cloner le projet :

git clone https://github.com/votre-utilisateur/cookify.git

Naviguer dans le dossier du projet :

cd cookify

Installer les dépendances :

npm install

Compiler les fichiers TypeScript :

tsc

Ouvrir le fichier index.html dans votre navigateur pour voir le site.

📂 Structure des Fichiers
Cookify
├── src
│   ├── models
│   │   └── Recette.ts
│   ├── controllers
│   │   ├── affichageRecettes.ts
│   │   ├── ajoutRecette.ts
│   │   └── filtrerRecettesParCategorie.ts
│   └── index.ts
├── dist
│   └── (fichiers compilés)
├── assets
│   ├── style.css
│   └── images
├── recipes.json
└── index.html