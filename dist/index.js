import { Recette } from "./models/Recette.js";
import { afficherRecettes } from "./controllers/affichageRecettes.js";
import { ajouterRecette } from "./controllers/ajoutRecette.js";
// Fonction pour fusionner les recettes JSON et celles du Local Storage
function chargerRecettes() {
    fetch("recipes.json")
        .then(response => response.json())
        .then(data => {
        // Charger les recettes du Local Storage
        const recettesStockees = localStorage.getItem("recettes");
        let recettes = [];
        if (recettesStockees) {
            recettes = JSON.parse(recettesStockees).map((recette) => new Recette(recette.id, recette.titre, recette.categorie, recette.ingredients, recette.etapes, recette.temps, recette.portions, recette.image));
        }
        // Ajouter les recettes JSON qui ne sont pas déjà dans le Local Storage
        data.forEach((recetteJSON) => {
            if (!recettes.some(recette => recette.id === recetteJSON.id)) {
                recettes.push(new Recette(recetteJSON.id, recetteJSON.titre, recetteJSON.categorie, recetteJSON.ingredients, recetteJSON.etapes, recetteJSON.temps, recetteJSON.portions, recetteJSON.image));
            }
        });
        // Afficher les recettes et les sauvegarder dans le Local Storage
        afficherRecettes(recettes);
        localStorage.setItem("recettes", JSON.stringify(recettes));
    })
        .catch(error => console.error("Erreur lors du chargement des recettes :", error));
}
// Charger les recettes
chargerRecettes();
// Activer le formulaire d'ajout de recette
ajouterRecette();
