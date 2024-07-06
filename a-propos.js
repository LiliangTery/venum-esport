/* Curseur */
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

// JavaScript pour gérer l'animation
const lines = document.querySelectorAll('.line-by-line');

lines.forEach((line, index) => {
    const spans = line.querySelectorAll('span');
    spans.forEach((span, idx) => {
        span.style.animationDelay = `${index * 1.5}s`;
    });
});

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