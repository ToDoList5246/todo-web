const input = document.getElementById("input");
const add = document.getElementById("add");
const liste = document.getElementById("liste");

// Ajouter une tâche en appuyant sur Entrée
document.getElementById("input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        document.getElementById("add").click();
    }
});

// Charger les tâches sauvegardées
let taches = JSON.parse(localStorage.getItem("taches")) || [];

function afficherTaches() {
    liste.innerHTML = "";
    taches.forEach((t, index) => {
        const li = document.createElement("li");
        li.textContent = t;

        const btn = document.createElement("button");
        btn.textContent = "X";
        btn.onclick = () => supprimerTache(index);

        li.appendChild(btn);
        liste.appendChild(li);
    });
}

function ajouterTache() {
    const texte = input.value.trim();
    if (texte === "") return;

    taches.push(texte);
    localStorage.setItem("taches", JSON.stringify(taches));

    input.value = "";
    afficherTaches();
}

function supprimerTache(index) {
    taches.splice(index, 1);
    localStorage.setItem("taches", JSON.stringify(taches));
    afficherTaches();
}

add.onclick = ajouterTache;

// Afficher les tâches au chargement
afficherTaches();
