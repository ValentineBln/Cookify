import { creerRecetteDepuisFormulaire } from "../controllers/ajoutRecette";
// Mock du localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value;
        },
        clear: () => {
            store = {};
        },
    };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });
describe("creerRecetteDepuisFormulaire", () => {
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
        // Appelle directement la fonction
        creerRecetteDepuisFormulaire();
        // Vérifie le contenu du localStorage
        const recettes = JSON.parse(localStorage.getItem("recettes") || "[]");
        expect(recettes.length).toBe(1);
        expect(recettes[0].titre).toBe("Tarte aux fraises");
    });
});
