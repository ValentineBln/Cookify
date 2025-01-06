import { afficherRecettes } from "./affichageRecettes.js";
import { Recette } from "../models/Recette.js";
import { filtrerRecettesParCategorie } from "./filtrerRecettesParCategorie.js";

export function ajouterRecette(): void {
    const form = document.getElementById("form-ajout-recette") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");

        const titre = (document.getElementById("titre") as HTMLInputElement).value;
        const categorie = (document.getElementById("categorie") as HTMLSelectElement).value;
        const ingredients = (document.getElementById("ingredients") as HTMLTextAreaElement).value.split(",");
        const etapes = (document.getElementById("etapes") as HTMLTextAreaElement).value.split(",");
        const temps = parseInt((document.getElementById("temps") as HTMLInputElement).value);
        const portions = parseInt((document.getElementById("portions") as HTMLInputElement).value);
        const image = (document.getElementById("image") as HTMLInputElement).value;

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

        recettes.push(nouvelleRecette);

        localStorage.setItem("recettes", JSON.stringify(recettes));

        afficherRecettes(recettes);

        form.reset();

        filtrerRecettesParCategorie(recettes);
    });
}

export function supprimerRecette(id: number): void {

    let recettes = JSON.parse(localStorage.getItem("recettes") || "[]");

    recettes = recettes.filter((recette: any) => recette.id !== id);

    localStorage.setItem("recettes", JSON.stringify(recettes));

    afficherRecettes(recettes);
}