import { Recette } from "./models/Recette.js";
import { afficherRecettes } from "./controllers/affichageRecettes.js";
import { ajouterRecette } from "./controllers/ajoutRecette.js";
import { filtrerRecettesParCategorie } from "./controllers/filtrerRecettesParCategorie.js";

function chargerRecettes(): void {
    fetch("recipes.json")
        .then((response) => response.json())
        .then((data) => {

            const recettesStockees = localStorage.getItem("recettes");
            let recettes: Recette[] = [];

            if (recettesStockees) {
                recettes = JSON.parse(recettesStockees).map((recette: any) => new Recette(
                    recette.id,
                    recette.titre,
                    recette.categorie,
                    recette.ingredients,
                    recette.etapes,
                    recette.temps,
                    recette.portions,
                    recette.image
                ));
            }

            data.forEach((recetteJSON: any) => {
                if (!recettes.some((recette) => recette.id === recetteJSON.id)) {
                    recettes.push(new Recette(
                        recetteJSON.id,
                        recetteJSON.titre,
                        recetteJSON.categorie,
                        recetteJSON.ingredients,
                        recetteJSON.etapes,
                        recetteJSON.temps,
                        recetteJSON.portions,
                        recetteJSON.image
                    ));
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

document.getElementById("retour-liste")?.addEventListener("click", () => {
    const recettesSection = document.getElementById("recettes") as HTMLElement;
    const detailsSection = document.getElementById("recette-details") as HTMLElement;
    const ajoutRecetteSection = document.getElementById("ajout-recette") as HTMLElement;

    recettesSection.style.display = "block";
    ajoutRecetteSection.style.display = "block";

    detailsSection.style.display = "none";
});