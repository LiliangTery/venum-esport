/*Script pour contrôler le curseur*/

document.addEventListener('mousemove', function(e) {
    var cursor = document.getElementById('customCursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function() {
    var cursor = document.getElementById('customCursor');
    cursor.style.animation = 'cursorClick 0.3s ease';
});

document.addEventListener('mouseup', function() {
    var cursor = document.getElementById('customCursor');
    cursor.style.animation = '';
});


/*Carrousel images */
let currentRotation = 0;
    const gameTitle = document.getElementById('game-title');
    const gameDescription = document.getElementById('game-description');

    const gameDetails = [
        {
            title: 'ROCKET LEAGUE',
            description: 'ROCKET LEAGUE est un jeu d\'action sportive développé par Psyonix et lancé en 2015. Il offre une expérience unique en combinant le football avec des courses effrénées de voitures sur des terrains clos. L\'objectif est simple mais intense : marquer plus de buts que ses rivaux en cinq minutes de jeu. En cas d\'égalité à la fin du temps réglementaire, une prolongation à suspense appelée "But en or" détermine le vainqueur. Les compétitions professionnelles se déroulent souvent en séries de 2 à 4 manches décisives, ajoutant une dimension stratégique à chaque affrontement.'
        },
        {
            title: 'VALORANT',
            description: 'VALORANT représente un jeu vidéo multijoueur stratégique, offert gratuitement par Riot Games depuis le 2 juin 2020. Dans Valorant, chaque participant incarne un agent doté de capacités uniques qui influencent le déroulement des affrontements. Le jeu principal se déroule avec deux équipes de cinq joueurs, chacune planifiant stratégiquement l\'achat d\'armes et d\'outils via un marché virtuel. Une équipe assume le rôle d\'attaquants tandis que l\'autre défend : les attaquants ont pour mission de placer un objet appelé "spike" sur un site spécifique et de le protéger jusqu\'à son explosion pour marquer un point. En revanche, les défenseurs tentent de désamorcer la spike ou de faire échouer les attaquants dans leur entreprise pour gagner le round. Une victoire est également possible en éliminant tous les membres de l\'équipe adverse. La partie se joue en plusieurs rounds, la première équipe à atteindre 13 points remporte la partie, ce qui nécessite à la fois habileté tactique et cohésion d\'équipe.'
        }
    ];

    function rotateCarousel(rotation) {
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = `rotateY(${rotation}deg)`;
        updateGameDetails();
    }

    function prevPage() {
        currentRotation += 180;
        rotateCarousel(currentRotation);
    }

    function nextPage() {
        currentRotation -= 180;
        rotateCarousel(currentRotation);
    }

    function updateGameDetails() {
        const index = (Math.abs(currentRotation / 180) % 2);
        gameTitle.textContent = gameDetails[index].title;
        gameDescription.textContent = gameDetails[index].description;
    }

// Sélectionner tous les éléments avec la classe 'modal-link'
const modalLinks = document.querySelectorAll('.modal-link');

// Ajouter un gestionnaire d'événement pour chaque lien modal
modalLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault(); // Empêcher le comportement par défaut du lien
const modalId = this.getAttribute('data-modal'); // Obtenir l'ID du modal à partir de l'attribut data-modal
const modal = document.getElementById(modalId); // Sélectionner le modal par son ID
modal.style.display = 'block'; // Afficher le modal
});
});

// Sélectionner tous les éléments avec la classe 'close'
const closeButtons = document.querySelectorAll('.close');

// Ajouter un gestionnaire d'événement pour chaque bouton de fermeture
closeButtons.forEach(button => {
button.addEventListener('click', function() {
const modalId = this.getAttribute('data-modal'); // Obtenir l'ID du modal à partir de l'attribut data-modal
const modal = document.getElementById(modalId); // Sélectionner le modal par son ID
modal.style.display = 'none'; // Cacher le modal
});
});

// Cacher le modal si l'utilisateur clique en dehors du contenu du modal
window.addEventListener('click', function(e) {
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
if (e.target === modal) {
  modal.style.display = 'none';
}
});
});