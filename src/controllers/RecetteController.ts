import { Recette } from "../models/Recette.js";
import * as fs from "fs";

export class RecetteController {
  recettes: Recette[] = [];

  chargerRecettesDepuisJSON(fichier: string): void {
    const data = fs.readFileSync(fichier, "utf-8");
    const recettesJSON = JSON.parse(data);
    this.recettes = recettesJSON.map((recette: any) => new Recette(
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

  afficherToutesLesRecettes(): void {
    this.recettes.forEach((recette) => recette.afficherRecette());
  }
}
