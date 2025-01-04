import { afficherRecettes } from "./affichageRecettes.js";
import { Recette } from "../models/Recette.js";
import { filtrerRecettesParCategorie } from "./filtrerRecettesParCategorie.js";

export function ajouterRecette(): void {
    const form = document.getElementById("form-ajout-recette") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Charger les recettes actuelles depuis le Local Storage
        let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");

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

        // Ajouter la nouvelle recette à la liste complète
        recettes.push(nouvelleRecette);

        // Sauvegarder les recettes mises à jour dans le Local Storage
        localStorage.setItem("recettes", JSON.stringify(recettes));

        // Mettre à jour l'affichage avec toutes les recettes
        afficherRecettes(recettes);

        // Réinitialiser le formulaire
        form.reset();

        // Réactiver le filtrage par catégories avec la liste mise à jour
        filtrerRecettesParCategorie(recettes);
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