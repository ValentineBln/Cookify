import { supprimerRecette } from "./ajoutRecette.js";
export function afficherRecettes(recettes) {
    const container = document.querySelector(".recette-cards");
    if (container) {
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
        });
        // Attache les événements de suppression
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
