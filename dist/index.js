var _a;
import { Recette } from "./models/Recette.js";
import { afficherRecettes } from "./controllers/affichageRecettes.js";
import { ajouterRecette } from "./controllers/ajoutRecette.js";
import { filtrerRecettesParCategorie } from "./controllers/filtrerRecettesParCategorie.js";
function chargerRecettes() {
    fetch("recipes.json")
        .then((response) => response.json())
        .then((data) => {

        const recettesStockees = localStorage.getItem("recettes");
        let recettes = [];

        if (recettesStockees) {
            recettes = JSON.parse(recettesStockees).map((recette) => new Recette(recette.id, recette.titre, recette.categorie, recette.ingredients, recette.etapes, recette.temps, recette.portions, recette.image));
        }

        data.forEach((recetteJSON) => {
            if (!recettes.some((recette) => recette.id === recetteJSON.id)) {
                recettes.push(new Recette(recetteJSON.id, recetteJSON.titre, recetteJSON.categorie, recetteJSON.ingredients, recetteJSON.etapes, recetteJSON.temps, recetteJSON.portions, recetteJSON.image));
            }
        });

        afficherRecettes(recettes);
        filtrerRecettesParCategorie(recettes);
        localStorage.setItem("recettes", JSON.stringify(recettes));
    })
        .catch((error) => console.error("Erreur lors du chargement des recettes :", error));
}

chargerRecettes();

ajouterRecette();
(_a = document.getElementById("retour-liste")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const recettesSection = document.getElementById("recettes");
    const detailsSection = document.getElementById("recette-details");
    const ajoutRecetteSection = document.getElementById("ajout-recette");

    recettesSection.style.display = "block";
    ajoutRecetteSection.style.display = "block";

    detailsSection.style.display = "none";
});