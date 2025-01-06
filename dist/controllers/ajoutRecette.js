import { afficherRecettes } from "./affichageRecettes.js";
import { Recette } from "../models/Recette.js";
import { filtrerRecettesParCategorie } from "./filtrerRecettesParCategorie.js";
export function ajouterRecette() {
    const form = document.getElementById("form-ajout-recette");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");
        const titre = document.getElementById("titre").value;
        const categorie = document.getElementById("categorie").value;
        const ingredients = document.getElementById("ingredients").value.split(",");
        const etapes = document.getElementById("etapes").value.split(",");
        const temps = parseInt(document.getElementById("temps").value);
        const portions = parseInt(document.getElementById("portions").value);
        const image = document.getElementById("image").value;
        const nouvelleRecette = new Recette(Date.now(), titre, categorie, ingredients, etapes, temps, portions, image);
        recettes.push(nouvelleRecette);
        localStorage.setItem("recettes", JSON.stringify(recettes));
        afficherRecettes(recettes);
        form.reset();
        filtrerRecettesParCategorie(recettes);
    });
}
export function supprimerRecette(id) {
    let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");
    recettes = recettes.filter((recette) => recette.id !== id);
    localStorage.setItem("recettes", JSON.stringify(recettes));
    afficherRecettes(recettes);
}
