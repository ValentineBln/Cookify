import { Recette } from "./models/Recette.js";
import { afficherRecettes } from "./controllers/affichageRecettes.js";
import { ajouterRecette } from "./controllers/ajoutRecette.js";
import { filtrerRecettesParCategorie } from "./controllers/filtrerRecettesParCategorie.js";

function chargerRecettes(): void {
    fetch("recipes.json")
        .then((response) => response.json())
        .then((data) => {
            // Charger les recettes depuis le Local Storage
            const recettesStockees = localStorage.getItem("recettes");
            let recettes: Recette[] = [];

            // Si des recettes sont déjà dans le Local Storage, les récupérer
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

            // Ajouter les recettes du fichier JSON qui ne sont pas déjà dans le Local Storage
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

            // Afficher les recettes et les sauvegarder dans le Local Storage
            afficherRecettes(recettes);
            filtrerRecettesParCategorie(recettes);
            localStorage.setItem("recettes", JSON.stringify(recettes));
        })
        .catch((error) => console.error("Erreur lors du chargement des recettes :", error));
}

// Charger les recettes initiales
chargerRecettes();

// Activer le formulaire d'ajout de recette
ajouterRecette();

document.getElementById("retour-liste")?.addEventListener("click", () => {
    const recettesSection = document.getElementById("recettes") as HTMLElement;
    const detailsSection = document.getElementById("recette-details") as HTMLElement;
    const ajoutRecetteSection = document.getElementById("ajout-recette") as HTMLElement;

    // Réafficher la liste des recettes et le formulaire
    recettesSection.style.display = "block";
    ajoutRecetteSection.style.display = "block";

    // Masquer la section des détails
    detailsSection.style.display = "none";
});
