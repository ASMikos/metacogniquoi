/* eslint-env es6 */
/* eslint-disable no-console */

// Définition des cartes de scénario, connaissance et stratégie
const scenarios = [
    { id: 1, text: "Vous venez de commencer à apprendre un nouveau chapitre en physique. Comment allez-vous vous y prendre pour acquérir les notions de base et bien comprendre ces nouveaux concepts, qui sont très différents de ce que vous connaissez déjà ?" },
    { id: 2, text: "En cours de français, vous étudiez un texte de Molière rempli de vocabulaire ancien que vous ne connaissez pas. Quelle méthode allez-vous utiliser pour mémoriser ces mots et être capable de les utiliser lors de vos examens ou dans vos rédactions ?" },
	{ id: 3, text: "Votre professeur de mathématiques vient de vous enseigner une nouvelle méthode pour résoudre des équations. Comment allez-vous organiser les étapes de cette méthode pour ne pas vous tromper et bien l'appliquer lors des contrôles ?" },
	{ id: 4, text: "En cours de SVT, vous devez suivre un protocole expérimental pour observer la mitose au microscope. Comment allez-vous vous assurer que vous suivez correctement chaque étape pour ne rien manquer et obtenir des résultats précis ?" },
	{ id: 5, text: "Vous avez une dissertation à rédiger. Vous connaissez différentes méthodes pour structurer votre essai, mais voud n’êtes pas sûr de laquelle choisir. Comment allez-vous déterminer laquelle est la plus adaptée à votre sujet et à la question posée par l’énoncé ?" },
	{ id: 6, text: "En cours d'anglais, vous avez une longue lecture à faire. Certaines parties du texte sont plus complexes et nécessitent une lecture approfondie, alors que d’autres sont plus simples. Comment allez-vous adapter votre vitesse de lecture en fonction de la difficulté des passages ?" },
	{ id: 7, text: "Vous avez un dossier à rendre en histoire-géographie dans un mois. Comment allez-vous planifier les différentes étapes de votre travail, comme la recherche d'informations, la rédaction et la relecture, pour être sûr de finir dans les temps sans tout faire à la dernière minute ?" },
	{ id: 8, text: "Un contrôle de mathématiques important est prévu dans deux semaines. Comment allez-vous organiser vos révisions pour couvrir tout le programme et vous assurer que vous comprennez bien les notions, tout en gérant votre emploi du temps et les autres devoirs ?" },
	{ id: 9, text: "En cours de littérature, vous devez lire un extrait d'une pièce de théâtre complexe. Comment allez-vous surveiller votre compréhension tout au long de la lecture et vérifier si vous saisissez bien les enjeux du texte ?" },
	{ id: 10, text: "Vous travaillez sur un projet artistique pour votre cours d'arts plastiques. Comment allez-vous suivre l’avancement de votre projet et vous assurer que vous êtes sur la bonne voie, en tenant compte des critères de l'enseignant et de votre propre vision artistique ?" },
	{ id: 11, text: "Vous révisez un chapitre de physique pour un contrôle, mais vous vous rendez compte que votre méthode de révision habituelle (relire les notes) n'est pas très efficace. Comment allez-vous adapter votre stratégie pour mieux mémoriser les formules et comprendre les concepts ?" },
	{ id: 12, text: "Vous devez voud concentrer pour finir un devoir d’histoire, mais vous êtes sans cesse distrait par votre téléphone et les réseaux sociaux. Quelle stratégie allez-vous utiliser pour rester concentré et terminer votre travail sans perdre trop de temps ?" },
	{ id: 13, text: "Vous venez de finir une dissertation pour le cours de français. Avant de la rendre, vous voulez vous assurer que votre argumentation est bien construite et que votre orthographe est correcte. Comment allez-vous évaluer votre travail pour corriger les éventuelles erreurs et l'améliorer avant de le rendre ?" },
	{ id: 14, text: "Après avoir terminé un projet en binôme pour votre cours de sciences économiques, vous voulez analyser ce qui s'est bien passé et ce qui pourrait être amélioré pour les futurs projets. Comment allez-vous faire une évaluation rétrospective de votre collaboration et du travail fourni ?" },
	{ id: 15, text: "À la fin du trimestre, vous vous rendez compte que vous avez eu des difficultés en cours de maths avec certains concepts. Comment allez-vous réfléchir à votre manière d'apprendre et identifier ce qui pourrait être amélioré pour mieux réussir au prochain trimestre ?" },
	{ id: 16, text: "Après un test de physique, vous vous rendez compte que vous avez fait plusieurs erreurs dans les exercices. Comment allez-vous analyser ces erreurs et adapter vos révisions pour ne pas les reproduire lors du prochain contrôle ?" },
	{ id: 17, text: "Vous commencez un nouveau semestre et vous voulez améliorer vos résultats dans certaines matières. Comment allez-vous définir des objectifs précis et réalistes pour organiser vos études de manière plus efficace ?" },
	// Ajouter plus de cartes ici...
];

const knowledgeCards = [
    { id: 1, type: "Connaissance Déclarative", name: "Faits", description: "Savoir des faits spécifiques, informations et données précises sur un sujet." },
	{ id: 2, type: "Connaissance Déclarative", name: "Concepts", description: "Comprendre les concepts théoriques derrière les faits." },
	{ id: 3, type: "Connaissance Déclarative", name: "Vocabulaire", description: "Maîtrise des termes et définitions spécifiques à un domaine de connaissance." },
	{ id: 4, type: "Connaissance Conditionnelle", name: "Quand utiliser ?", description: "Savoir quand appliquer une stratégie ou une compétence en fonction du contexte." },
	{ id: 5, type: "Connaissance Conditionnelle", name: "Pourquoi utiliser ?", description: "Comprendre pourquoi une stratégie spécifique est appropriée dans une situation donnée." },
	{ id: 6, type: "Connaissance Conditionnelle", name: "Où utiliser ?", description: "Identifier le contexte ou l'environnement dans lequel une stratégie ou une compétence est la plus efficace." },
	{ id: 7, type: "Connaissance Procédurale", name: "Etapes", description: "Connaître les étapes nécessaires pour réaliser une tâche ou appliquer une stratégie." },
	{ id: 8, type: "Connaissance Procédurale", name: "Technique", description: "Maîtrise des techniques spécifiques pour accomplir une tâche donnée." },
	{ id: 9, type: "Connaissance Procédurale", name: "Méthodes", description: "Comprendre les méthodes et approches systématiques pour résoudre un problème." },
    // Ajouter plus de cartes ici...
];

const strategyCards = [
    { id: 1, type: "Stratégie", name: "Questionnement", description: "Pendant la tâche, posez-vous des questions pour vérifier votre compréhension." },
	{ id: 2, type: "Stratégie", name: "Résumé", description: "Après la tâche, résumez les principales idées pour vérifier votre compréhension." },
	{ id: 3, type: "Stratégie", name: "Prédiction", description: "Faites des hypothèses sur ce qui va se passer dans la tâche avant de commencer." },
	{ id: 4, type: "Stratégie", name: "Déduction", description: "Utilisez les indices présents pour arriver à une conclusion logique." },
	{ id: 5, type: "Stratégie", name: "Résolution de problèmes", description: "Trouvez une solution efficace à un problème complexe en décomposant le problème en parties plus petites." },
    // Ajouter plus de cartes ici...
];

let points = 0;
let T1 = false;
let T2 = false;
let T3 = false;
let TEnd = false;
let resultWin = false;
// Nombre de points de la partie

// Fonction pour tirer une carte de scénario aléatoire
function drawScenario() {
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    document.getElementById('scenario-card').innerHTML = `<p>${scenario.text}</p>`;
}

// Fonction pour afficher les cartes de connaissances
function displayKnowledgeCards() {
    let cardsHtml = '';
    knowledgeCards.forEach(card => {
        cardsHtml += `<div class="card">
                        <h3>${card.type} : ${card.name}</h3>
                        <p>${card.description}</p>
						<!-- <button id="${card.name}" onClick="selectCard()">Choisir ${card.name}</button> -->
                      </div>`;
    });
    document.getElementById('knowledge-cards').innerHTML = cardsHtml;
}

// Fonction pour afficher les cartes de stratégies
function displayStrategyCards() {
    let cardsHtml = '';
    strategyCards.forEach(card => {
        cardsHtml += `<div class="card">
                        <h3>${card.type} : ${card.name}</h3>
                        <p>${card.description}</p>
						<!-- <button id="${card.name}" onClick="selectCard()">Choisir ${card.name}</button> -->
                      </div>`;
    });
    document.getElementById('strategy-cards').innerHTML = cardsHtml;
}

function selectCard() {
	//let card.name = true;
}

// Fonction pour résoudre le scénario
function resolveScenario() {
	if (resultWin == true) {
		let result = "Le scénario a été résolu avec succès !";
		document.getElementById('results').innerHTML = `<p>${result}</p>`;
	}
}

// Fonctions pour gérer les points
function displayPoints () {
	document.getElementById('nb-points').innerHTML = `<h1>Vous avez ${points} points</h1>`;
}

function autoTrophy() {
	if (points >= 10) {
		document.getElementById('Trophy-1').innerHTML = '<h3>Connaissance</h3><br /><img src="assets/characters/Trophy1.png" alt="Trophé 1 - Connaissances" height=100>';
		T1 = true;
	}
	if (points >= 15) {
		TEnd = true;
	}
	if (T1 == true && T2 == true && T3 == true) {
		TEnd = true;
	}
	if (TEnd == true) {
		document.getElementById('nb-points').innerHTML = '<h3>Métacognitif</h3><br /><img src="assets/characters/TrophyEnd.png" alt="Trophé de fin - Vous avez gagné !" height=100><br /><h3>Vous avez gagné !</h3>';
	}
}

function add1Point () {
	points = points + 1;
	displayPoints();
	autoTrophy();
}

function add2Points () {
	points = points + 2;
	displayPoints();
	autoTrophy();
}

function add3Points () {
	points = points + 3;
	displayPoints();
	autoTrophy();
}

function trophy2() {
	document.getElementById('Trophy-2').innerHTML =  '<h3>Procédures</h3><br /><img src="assets/characters/Trophy2.png" alt="Trophé 2 - Procédures" height=100>';
	T2 = true;
	autoTrophy();
}

function trophy3() {
	document.getElementById('Trophy-3').innerHTML =  '<h3>Conditions</h3><br /><img src="assets/characters/Trophy3.png" alt="Trophé 3 - Conditiond" height=100>';
	T3 = true;
	autoTrophy();
}

// Lancement du jeu
window.onload = function() {
    drawScenario();
    displayKnowledgeCards();
    displayStrategyCards();
	displayPoints();
	autoTrophy();
	
};
