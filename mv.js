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

function showPage(pageNumber) {
    // Vérification des champs requis avant de passer à la page suivante
    if (pageNumber === 2) {
        var accept = document.getElementById('accept').value;
        var ticketNumber = document.getElementById('ticket-number').value;
        if (accept === '' || ticketNumber === '') {
            alert('Veuillez remplir tous les champs avant de passer à la page suivante.');
            return;
        }
    } else if (pageNumber === 3) {
        var genre = document.getElementById('genre').value;
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var age = document.getElementById('age').value;
        var birthdate = document.getElementById('birthdate').value;
        if (genre === '' || nom === '' || prenom === '' || age === '' || birthdate === '') {
            alert('Veuillez remplir tous les champs avant de passer à la page suivante.');
            return;
        }
    } else if (pageNumber === 4) {
        var discord = document.getElementById('discord').value;
        var methods = document.getElementById('methods').value;
        var platform = document.getElementById('platform').value;
        var tools = document.getElementById('tools').value;
        var time = document.getElementById('time').value;
        var style = document.getElementById('style').value;
        if (discord === '' || methods === '' || platform === '' || tools === '' || time === '' || style === '') {
            alert('Veuillez remplir tous les champs avant de passer à la page suivante.');
            return;
        }
    }

    // Masquer toutes les pages sauf celle sélectionnée
    document.querySelectorAll('.form-page').forEach(function(page) {
        page.classList.add('hidden');
    });
    document.getElementById('page' + pageNumber).classList.remove('hidden');
}

function submitForm() {
    var accept = document.getElementById('accept').value;
    var ticketNumber = document.getElementById('ticket-number').value;
    var genre = document.getElementById('genre').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var age = document.getElementById('age').value;
    var birthdate = document.getElementById('birthdate').value;
    var discord = document.getElementById('discord').value;
    var methods = document.getElementById('methods').value;
    var platform = document.getElementById('platform').value;
    var tools = document.getElementById('tools').value;
    var time = document.getElementById('time').value;
    var style = document.getElementById('style').value;
    var experience = document.getElementById('experience').value;
    var hearAbout = document.getElementById('hear-about').value;
    var ambition = document.getElementById('ambition').value;
    var pknous = document.getElementById('pknous').value;
    var pkvous = document.getElementById('pkvous').value;
    var apporter = document.getElementById('apporter').value;
    var acceptInterview = document.getElementById('accept-interview').value;

    var emailBody = "Acceptez-vous les points ci-dessus ? : " + accept + "\n\n";
    emailBody += "Numéro de ticket discord : " + ticketNumber + "\n\n";
    emailBody += "Genre : " + genre + "\n";
    emailBody += "Nom : " + nom + "\n";
    emailBody += "Prénom : " + prenom + "\n";
    emailBody += "Âge : " + age + "\n";
    emailBody += "Date de naissance : " + birthdate + "\n";
    emailBody += "Pseudo discord : " + discord + "\n";
    emailBody += "Méthodes de travail : " + methods + "\n";
    emailBody += "Plateforme de travail : " + platform + "\n";
    emailBody += "Outils utilisés : " + tools + "\n";
    emailBody += "Temps moyen pour finaliser les projets : " + time + "\n";
    emailBody += "Style de monteur : " + style + "\n";
    emailBody += "Expérience : " + experience + "\n";
    emailBody += "Comment avez-vous entendu parler de nous : " + hearAbout + "\n";
    emailBody += "Ambition : " + ambition + "\n";
    emailBody += "Pourquoi nous avoir choisi : " + pknous + "\n";
    emailBody += "Pourquoi devrait-on vous prendre : " + pkvous + "\n";
    emailBody += "Que pouvez-vous nous apporter : " + apporter + "\n";
    emailBody += "Acceptation entretien : " + acceptInterview + "\n";

    var subject = "Nouvelle candidature Staff";

    var mailToLink = "mailto:vesport5213@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(emailBody);

    // Ouvrir le client de messagerie par défaut
    window.location.href = mailToLink;
}

// Fonction pour vérifier si une URL est valide
function isValidUrl(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(url);
}