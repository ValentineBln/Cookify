import { Recette } from "../models/Recette.js";
import { supprimerRecette } from "./ajoutRecette.js";

export function afficherRecettes(recettes: Recette[]): void {
    const container = document.querySelector(".recette-cards") as HTMLElement;
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

            // Afficher les détails de la recette
            card.addEventListener("click", () => {
                const ajoutRecetteSection = document.getElementById("ajout-recette") as HTMLElement;
            
                detailsContenu.innerHTML = `
                    <img src="assets/images/${recette.image}" alt="${recette.titre}">
                    <h2>${recette.titre}</h2>
                    <p><strong>Catégorie :</strong> ${recette.categorie}</p>
                    <p><strong>Temps estimé :</strong> ${recette.temps} minutes</p>
                    <p><strong>Portions :</strong> ${recette.portions}</p>
                    <h3>Ingrédients</h3>
                    <ul>${recette.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
                    <h3>Étapes</h3>
                    <ol>${recette.etapes.map(etape => `<li>${etape}</li>`).join("")}</ol>
                `;
            
                // Masquer la section des cartes et le formulaire
                container.style.display = "none";
                ajoutRecetteSection.style.display = "none";
            
                // Afficher la section des détails
                detailsSection.style.display = "block";
            });
                        
        });

        // Attache les événements de suppression
        const boutonsSupprimer = document.querySelectorAll(".supprimer-recette");
        boutonsSupprimer.forEach((bouton) => {
            bouton.addEventListener("click", (event) => {
                event.stopPropagation(); // Empêche le clic sur la carte de déclencher l'affichage des détails
                const id = (event.target as HTMLButtonElement).dataset.id;
                if (id) {
                    supprimerRecette(parseInt(id));
                }
            });
        });
    }
}