document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments nécessaires
    let background = document.getElementById("background")
    let partageButton = document.getElementById("partage")
    let EnvoyermailButton = document.getElementById("Envoyermail")
    let nomInput = document.getElementById("nom");
let emailInput = document.getElementById("email");

    // Fonction pour afficher le pop-up
    function showPopup() {
        background.classList.remove("hidden")  // Retirer la classe 'hidden' pour afficher le pop-up
        background.classList.add("active")    // Ajouter la classe 'active' pour rendre le pop-up visible
    }

    // Fonction pour masquer le pop-up
    function hidePopup() {
        background.classList.remove("active") // Retirer la classe 'active' pour cacher le pop-up
        background.classList.add("hidden")   // Ajouter la classe 'hidden' pour masquer le pop-up
    }

    // Afficher le pop-up lorsque l'utilisateur clique sur "Partager"
    partageButton.addEventListener("click", () => {
        showPopup();  // Afficher le pop-up
    });

    // Masquer le pop-up lorsque l'utilisateur clique en dehors du formulaire
    background.addEventListener("click", (event) => {
        if (event.target === background) {
            hidePopup();  // Masquer le pop-up
        }
    });

    // Gérer l'envoi du formulaire
    EnvoyermailButton.addEventListener("click", (event) => {
        event.preventDefault();  // Empêcher la soumission du formulaire par défaut

// Récupération des valeurs dans le formulaire
let nom = nomInput.value.trim();
let email = emailInput.value.trim();
let score = document.getElementById("score").innerText.split(":")[1].trim(); // Récupère le score affiché

if (nom && email) {
    // Création du lien mailto pour envoyer un email avec les données
    let mailtoLink = `mailto:${email}?subject=Partage de score Azerty&body=Salut, je suis ${nom} et je viens de réaliser un score de ${score} dans le jeu Azerty Type.`;

 // Ouvrir l'application de messagerie avec l'URL mailto
            window.location.href = mailtoLink;

            // Masquer le pop-up après l'envoi
            hidePopup()
        } else {
            alert("Veuillez remplir tous les champs.")
        }
    });
});
