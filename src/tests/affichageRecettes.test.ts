import { afficherRecettes } from "../controllers/affichageRecettes";
import { Recette } from "../models/Recette";

describe("afficherRecettes", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="recette-cards"></div>`;
  });

  test("Devrait ajouter des cartes de recettes au DOM", () => {
    const recettes = [
      new Recette(1, "Tarte aux pommes", "Dessert", ["pommes"], ["Cuire"], 45, 4, "tarte.jpg"),
    ];

    afficherRecettes(recettes);

    const cards = document.querySelectorAll(".recette-card");
    expect(cards.length).toBe(1);
    expect(cards[0].querySelector("h3")?.textContent).toBe("Tarte aux pommes");
  });
});