// Script pour contrôler le curseur
document.addEventListener('DOMContentLoaded', function() {
  var cursor = document.getElementById('customCursor');

  document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', function() {
      cursor.style.animation = 'cursorClick 0.3s ease';
  });

  document.addEventListener('mouseup', function() {
      cursor.style.animation = '';
  });

  // Ouvrir la modal
  document.querySelectorAll('.modal-link').forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          var modalId = this.getAttribute('data-modal');
          document.getElementById(modalId).style.display = 'block';
          document.body.style.overflow = 'hidden'; // Empêche le défilement de la page en arrière-plan
      });
  });

  // Fermer la modal
  document.querySelectorAll('.close').forEach(function(closeBtn) {
      closeBtn.addEventListener('click', function() {
          var modal = this.closest('.modal');
          modal.style.display = 'none';
          document.body.style.overflow = 'auto'; // Restaure le défilement de la page
      });
  });

  // Fermer la modal en cliquant en dehors de la modal
  window.addEventListener('click', function(event) {
      document.querySelectorAll('.modal').forEach(function(modal) {
          if (event.target == modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto'; // Restaure le défilement de la page
          }
      });
  });
});