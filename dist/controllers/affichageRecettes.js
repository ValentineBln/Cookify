import { supprimerRecette } from "./ajoutRecette.js";
// Fonction pour afficher les recettes
export function afficherRecettes(recettes) {
    const container = document.querySelector(".recette-cards");
    if (container) {
        container.innerHTML = ""; // Réinitialise le conteneur
        recettes.forEach((recette) => {
            const card = document.createElement("div");
            card.classList.add("recette-card");
            card.innerHTML = `
                <img src="assets/images/${recette.image}" alt="${recette.titre}">
                <h3>${recette.titre}</h3>
                <p>Catégorie : ${recette.categorie}</p>
                <p>Temps : ${recette.temps} min</p>
                <button class="supprimer-recette" data-id="${recette.id}">Supprimer</button>
            `;
            container.appendChild(card);
        });
        // Ajoute les événements de clic pour supprimer les recettes
        const boutonsSupprimer = document.querySelectorAll(".supprimer-recette");
        boutonsSupprimer.forEach((bouton) => {
            bouton.addEventListener("click", (event) => {
                const id = event.target.dataset.id;
                if (id) {
                    supprimerRecette(parseInt(id));
                }
            });
        });
    }
}
