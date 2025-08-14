const rejouerBtn = document.getElementById('rejouer');
function reinitialiserJeu() {
    scoreJoueur = 0;
    scoreOrdinateur = 0;
    score.textContent = "Score : Joueur 0 - 0 Ordinateur";
    message.textContent = "Le premier à 3 points gagne la partie.";

    // On réactive les boutons
    pierreBtn.disabled = false;
    feuilleBtn.disabled = false;
    ciseauxBtn.disabled = false;

    // On cache le bouton rejouer
    rejouerBtn.style.display = 'none';
}
// On récupère les éléments de la page
const pierreBtn = document.getElementById('pierre');
const feuilleBtn = document.getElementById('feuille');
const ciseauxBtn = document.getElementById('ciseaux');
const message = document.getElementById('message');
const score = document.getElementById('score');

// On initialise les scores
let scoreJoueur = 0;
let scoreOrdinateur = 0;
const options = ["pierre", "feuille", "ciseaux"];

// Fonction pour déterminer le gagnant
function determinerGagnant(choixJoueur, choixOrdinateur) {
    if (choixJoueur === choixOrdinateur) {
        return "Égalité !";
    }
    if ((choixJoueur === "pierre" && choixOrdinateur === "ciseaux") ||
        (choixJoueur === "feuille" && choixOrdinateur === "pierre") ||
        (choixJoueur === "ciseaux" && choixOrdinateur === "feuille")) {
        scoreJoueur++;
        return "Vous avez gagné !";
    } else {
        scoreOrdinateur++;
        return "Vous avez perdu !";
    }
}

// Fonction pour mettre à jour l'affichage
function mettreAJourAffichage(choixJoueur, choixOrdinateur, resultat) {
    message.textContent = `Vous avez choisi ${choixJoueur}, l'ordinateur a choisi ${choixOrdinateur}. ${resultat}`;
    score.textContent = `Score : Joueur ${scoreJoueur} - ${scoreOrdinateur} Ordinateur`;
}

// Fonction pour vérifier si la partie est terminée
function verifierFinDePartie() {
    if (scoreJoueur === 3 || scoreOrdinateur === 3) {
        let gagnant = scoreJoueur === 3 ? "Vous" : "l'ordinateur";
        message.textContent = `La partie est terminée ! ${gagnant} a gagné la partie.`;
        
        // On désactive les boutons
        pierreBtn.disabled = true;
        feuilleBtn.disabled = true;
        ciseauxBtn.disabled = true;
    }
}

// On ajoute les "écouteurs d'événements"
// Quand le joueur clique sur un bouton, le code s'exécute
pierreBtn.addEventListener('click', () => {
    const choixOrdinateur = options[Math.floor(Math.random() * options.length)];
    const resultat = determinerGagnant("pierre", choixOrdinateur);
    mettreAJourAffichage("pierre", choixOrdinateur, resultat);
    verifierFinDePartie();
});

feuilleBtn.addEventListener('click', () => {
    const choixOrdinateur = options[Math.floor(Math.random() * options.length)];
    const resultat = determinerGagnant("feuille", choixOrdinateur);
    mettreAJourAffichage("feuille", choixOrdinateur, resultat);
    verifierFinDePartie();
});

ciseauxBtn.addEventListener('click', () => {
    const choixOrdinateur = options[Math.floor(Math.random() * options.length)];
    const resultat = determinerGagnant("ciseaux", choixOrdinateur);
    mettreAJourAffichage("ciseaux", choixOrdinateur, resultat);
    verifierFinDePartie();
});
// La fonction vérifie la fin de la partie
function verifierFinDePartie() {
    if (scoreJoueur === 3 || scoreOrdinateur === 3) {
        let gagnant = scoreJoueur === 3 ? "Vous" : "l'ordinateur";
        message.textContent = `La partie est terminée ! ${gagnant} a gagné la partie.`;
        
        // On désactive les boutons pour ne plus jouer
        pierreBtn.disabled = true;
        feuilleBtn.disabled = true;
        ciseauxBtn.disabled = true;

        // On affiche le bouton rejouer
        rejouerBtn.style.display = 'block'; 
    }
}

// On programme le bouton "Rejouer"
rejouerBtn.addEventListener('click', () => {
    reinitialiserJeu();
});