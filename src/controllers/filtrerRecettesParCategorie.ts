import { afficherRecettes } from "./affichageRecettes.js";
import { Recette } from "../models/Recette.js";

export function filtrerRecettesParCategorie(recettes: Recette[]): void {
    const liens = document.querySelectorAll("nav ul li a");

    liens.forEach((lien) => {
        lien.addEventListener("click", (event) => {
            event.preventDefault();

            const target = event.currentTarget as HTMLAnchorElement;
            const categorie = target.dataset.categorie;

            if (!categorie) return;

            liens.forEach((l) => l.classList.remove("active"));
            target.classList.add("active");

            const recettesFiltrees = categorie === "Toutes"
                ? recettes
                : recettes.filter((recette) => recette.categorie === categorie);

            afficherRecettes(recettesFiltrees);
        });
    });
}
