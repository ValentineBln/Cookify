import { Recette } from "../models/Recette.js";
import * as fs from "fs";
export class RecetteController {
    constructor() {
        this.recettes = [];
    }
    chargerRecettesDepuisJSON(fichier) {
        const data = fs.readFileSync(fichier, "utf-8");
        const recettesJSON = JSON.parse(data);
        this.recettes = recettesJSON.map((recette) => new Recette(recette.id, recette.titre, recette.categorie, recette.ingredients, recette.etapes, recette.temps, recette.portions, recette.image));
    }
    afficherToutesLesRecettes() {
        this.recettes.forEach((recette) => recette.afficherRecette());
    }
}
