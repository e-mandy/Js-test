function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score} / ${nbMotsProposes}`;
  spanScore.innerText = affichageScore;
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

function lancerJeu() {
  initAddEventListenerPopup();
  let score = 0;
  let i = 0;
  let listeProposition = listeMots;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");

  afficherProposition(listeProposition[i]);

  btnValiderMot.addEventListener("click", () => {
      if (inputEcriture.value === listeProposition[i]) {
          score++;
      }
      i++;
      afficherResultat(score, i);
      inputEcriture.value = '';
      if (listeProposition[i] === undefined) {
          afficherProposition("Le jeu est fini");
          btnValiderMot.disabled = true;
      } else {
          afficherProposition(listeProposition[i]);
      }
  });

  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
      listeBtnRadio[index].addEventListener("change", (event) => {
          i = 0;
          score = 0;
          if (event.target.value === "1") {
              listeProposition = listeMots;
          } else {
              listeProposition = listePhrases;
          }
          afficherProposition(listeProposition[i]);
          
      });
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();
      let baliseNom = document.getElementById("nom");
      let nom = baliseNom.value;
      let baliseEmail = document.getElementById("email");
      let email = baliseEmail.value;
      let scoreEmail = `${score}/${i}`;

      afficherEmail(nom, email, scoreEmail);
  });

  afficherResultat(score, i)
}
