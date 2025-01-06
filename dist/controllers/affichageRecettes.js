import { supprimerRecette } from "./ajoutRecette.js";
export function afficherRecettes(recettes) {
    const container = document.querySelector(".recette-cards");
    const detailsSection = document.getElementById("recette-details");
    const detailsContenu = document.getElementById("details-contenu");
    if (container && detailsSection && detailsContenu) {
        container.innerHTML = "";
        recettes.forEach((recette) => {
            const card = document.createElement("div");
            card.classList.add("recette-card");
            card.innerHTML = `
                <img src="assets/images/${recette.image}" alt="${recette.titre}">
                <h3>${recette.titre}</h3>
                <p>${recette.categorie}</p>
                <p>Temps estimé : ${recette.temps} minutes</p>
                <button class="supprimer-recette" data-id="${recette.id}">Supprimer</button>
            `;
            container.appendChild(card);
            card.addEventListener("click", () => {
                console.log("Carte cliquée :", recette);
                const ajoutRecetteSection = document.getElementById("ajout-recette");
                const recettesSection = document.getElementById("recettes");
                console.log("Section des recettes :", recettesSection);
                console.log("Section d'ajout :", ajoutRecetteSection);
                detailsContenu.innerHTML = `
                    <img src="assets/images/${recette.image}" alt="${recette.titre}">
                    <h3>${recette.titre}</h3>
                    <p><strong>Catégorie :</strong> ${recette.categorie}</p>
                    <p><strong>Temps estimé :</strong> ${recette.temps} minutes</p>
                    <p><strong>Portions :</strong> ${recette.portions}</p>
                    <h4>Ingrédients</h4>
                    <ul>${recette.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
                    <h4>Étapes</h4>
                    <ol>${recette.etapes.map(etape => `<li>${etape}</li>`).join("")}</ol>
                `;
                recettesSection.style.display = "none";
                ajoutRecetteSection.style.display = "none";
                detailsSection.style.display = "block";
            });
        });
        const boutonsSupprimer = document.querySelectorAll(".supprimer-recette");
        boutonsSupprimer.forEach((bouton) => {
            bouton.addEventListener("click", (event) => {
                event.stopPropagation();
                const id = event.target.dataset.id;
                if (id) {
                    supprimerRecette(parseInt(id));
                }
            });
        });
    }
}
