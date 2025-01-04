import { Recette } from "../models/Recette.js";
import { afficherRecettes } from "./affichageRecettes.js";

// Fonction pour sauvegarder les recettes dans le Local Storage
function sauvegarderRecettesDansLocalStorage(recettes: Recette[]): void {
    localStorage.setItem("recettes", JSON.stringify(recettes));
}

// Fonction pour charger les recettes depuis le Local Storage
function chargerRecettesDepuisLocalStorage(): Recette[] {
    const data = localStorage.getItem("recettes");
    if (data) {
        return JSON.parse(data).map((recette: any) => new Recette(
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
    return [];
}

export function ajouterRecette(): void {
    const form = document.getElementById("form-ajout-recette") as HTMLFormElement;

    let recettes = chargerRecettesDepuisLocalStorage();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Récupérer les données du formulaire
        const titre = (document.getElementById("titre") as HTMLInputElement).value;
        const categorie = (document.getElementById("categorie") as HTMLSelectElement).value;
        const ingredients = (document.getElementById("ingredients") as HTMLTextAreaElement).value.split(",");
        const etapes = (document.getElementById("etapes") as HTMLTextAreaElement).value.split(",");
        const temps = parseInt((document.getElementById("temps") as HTMLInputElement).value);
        const portions = parseInt((document.getElementById("portions") as HTMLInputElement).value);
        const image = (document.getElementById("image") as HTMLInputElement).value;

        // Créer une nouvelle recette
        const nouvelleRecette = new Recette(
            Date.now(),
            titre,
            categorie,
            ingredients,
            etapes,
            temps,
            portions,
            image
        );

        // Ajouter la nouvelle recette à la liste et l'afficher
        recettes.push(nouvelleRecette);
        afficherRecettes([nouvelleRecette]);

        // Sauvegarder les recettes dans le Local Storage
        sauvegarderRecettesDansLocalStorage(recettes);

        // Réinitialiser le formulaire
        form.reset();
    });
}

export function supprimerRecette(id: number): void {
    // Charger les recettes depuis le Local Storage
    let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");

    // Filtrer la recette à supprimer
    recettes = recettes.filter((recette: any) => recette.id !== id);

    // Sauvegarder les recettes mises à jour dans le Local Storage
    localStorage.setItem("recettes", JSON.stringify(recettes));

    // Mettre à jour l'affichage
    afficherRecettes(recettes);
}
