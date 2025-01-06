import { filtrerRecettesParCategorie } from "../controllers/filtrerRecettesParCategorie";
import { Recette } from "../models/Recette";

describe("filtrerRecettesParCategorie", () => {
  test("Devrait filtrer les recettes par catégorie", () => {
    const recettes = [
      new Recette(1, "Tarte aux pommes", "Dessert", ["pommes"], ["Cuire"], 45, 4, "tarte.jpg"),
      new Recette(2, "Salade verte", "Entrée", ["laitue"], ["Préparer"], 10, 2, "salade.jpg"),
    ];

    document.body.innerHTML = `
      <nav>
        <ul>
          <li><a href="#" data-categorie="Dessert">Desserts</a></li>
        </ul>
      </nav>
      <div class="recette-cards"></div>
    `;

    filtrerRecettesParCategorie(recettes);

    const liens = document.querySelectorAll("nav ul li a");
    (liens[0] as HTMLElement).click();

    const cards = document.querySelectorAll(".recette-card");
    expect(cards.length).toBe(1);
    expect(cards[0].querySelector("h3")?.textContent).toBe("Tarte aux pommes");
  });
});
