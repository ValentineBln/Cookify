import { ajouterRecette } from "../controllers/ajoutRecette";

// Mock du localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("ajouterRecette", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="form-ajout-recette">
        <input id="titre" value="Tarte aux fraises">
        <select id="categorie">
          <option value="Dessert" selected>Dessert</option>
        </select>
        <textarea id="ingredients">fraises, sucre</textarea>
        <textarea id="etapes">Couper les fraises, Cuire</textarea>
        <input id="temps" value="60">
        <input id="portions" value="4">
        <input id="image" value="tarte_fraises.jpg">
        <button type="submit">Ajouter</button>
      </form>
    `;
  });

  test("Devrait ajouter une recette au localStorage", () => {
    const form = document.getElementById("form-ajout-recette") as HTMLFormElement;

    // Simule la soumission du formulaire
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      ajouterRecette();
    });

    form.dispatchEvent(new Event("submit"));

    // Vérifie le contenu du localStorage
    const recettes = JSON.parse(localStorage.getItem("recettes") || "[]");
    expect(recettes.length).toBe(1);
    expect(recettes[0].titre).toBe("Tarte aux fraises");
  });
});
