import { Recette } from "../models/Recette";
describe("Recette", () => {
    test("Devrait créer une nouvelle recette avec les bonnes propriétés", () => {
        const recette = new Recette(1, "Tarte aux pommes", "Dessert", ["pommes", "sucre"], ["Couper les pommes", "Cuire"], 45, 4, "tarte.jpg");
        expect(recette.id).toBe(1);
        expect(recette.titre).toBe("Tarte aux pommes");
        expect(recette.categorie).toBe("Dessert");
        expect(recette.ingredients).toContain("pommes");
        expect(recette.etapes).toContain("Couper les pommes");
    });
});