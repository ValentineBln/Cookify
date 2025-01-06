export class Recette {
  id: number;
  titre: string;
  categorie: string;
  ingredients: string[];
  etapes: string[];
  temps: number;
  portions: number;
  image: string;
  
  constructor(
    id: number,
    titre: string,
    categorie: string,
    ingredients: string[],
    etapes: string[],
    temps: number,
    portions: number,
    image: string
  ) {
    this.id = id;
    this.titre = titre;
    this.categorie = categorie;
    this.ingredients = ingredients;
    this.etapes = etapes;
    this.temps = temps;
    this.portions = portions;
    this.image = image;
  }
  
  afficherRecette(): void {
    console.log(`${this.titre} (${this.categorie}) - ${this.temps} min`);
    console.log(`Ingrédients: ${this.ingredients.join(", ")}`);
    console.log(`Étapes: ${this.etapes.join(" -> ")}`);
  }
}