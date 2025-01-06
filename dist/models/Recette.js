export class Recette {
    constructor(id, titre, categorie, ingredients, etapes, temps, portions, image) {
        this.id = id;
        this.titre = titre;
        this.categorie = categorie;
        this.ingredients = ingredients;
        this.etapes = etapes;
        this.temps = temps;
        this.portions = portions;
        this.image = image;
    }
    afficherRecette() {
        console.log(`${this.titre} (${this.categorie}) - ${this.temps} min`);
        console.log(`Ingrédients: ${this.ingredients.join(", ")}`);
        console.log(`Étapes: ${this.etapes.join(" -> ")}`);
    }
}
