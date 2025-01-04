import { Recette } from "../models/Recette.js";
import { afficherRecettes } from "./affichageRecettes.js";
// Fonction pour sauvegarder les recettes dans le Local Storage
function sauvegarderRecettesDansLocalStorage(recettes) {
    localStorage.setItem("recettes", JSON.stringify(recettes));
}
// Fonction pour charger les recettes depuis le Local Storage
function chargerRecettesDepuisLocalStorage() {
    const data = localStorage.getItem("recettes");
    if (data) {
        return JSON.parse(data).map((recette) => new Recette(recette.id, recette.titre, recette.categorie, recette.ingredients, recette.etapes, recette.temps, recette.portions, recette.image));
    }
    return [];
}
export function ajouterRecette() {
    const form = document.getElementById("form-ajout-recette");
    let recettes = chargerRecettesDepuisLocalStorage();
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Récupérer les données du formulaire
        const titre = document.getElementById("titre").value;
        const categorie = document.getElementById("categorie").value;
        const ingredients = document.getElementById("ingredients").value.split(",");
        const etapes = document.getElementById("etapes").value.split(",");
        const temps = parseInt(document.getElementById("temps").value);
        const portions = parseInt(document.getElementById("portions").value);
        const image = document.getElementById("image").value;
        // Créer une nouvelle recette
        const nouvelleRecette = new Recette(Date.now(), titre, categorie, ingredients, etapes, temps, portions, image);
        // Ajouter la nouvelle recette à la liste et l'afficher
        recettes.push(nouvelleRecette);
        afficherRecettes([nouvelleRecette]);
        // Sauvegarder les recettes dans le Local Storage
        sauvegarderRecettesDansLocalStorage(recettes);
        // Réinitialiser le formulaire
        form.reset();
    });
}
export function supprimerRecette(id) {
    // Charger les recettes depuis le Local Storage
    let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");
    // Filtrer la recette à supprimer
    recettes = recettes.filter((recette) => recette.id !== id);
    // Sauvegarder les recettes mises à jour dans le Local Storage
    localStorage.setItem("recettes", JSON.stringify(recettes));
    // Mettre à jour l'affichage
    afficherRecettes(recettes);
}
