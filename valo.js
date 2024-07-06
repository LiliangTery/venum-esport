// Script pour contrôler le curseur
document.addEventListener('DOMContentLoaded', function() {
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
});

document.addEventListener('DOMContentLoaded', function() {
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
        var platform = document.getElementById('platform').value;
        var valorantUsername = document.getElementById('valorant-username').value;
        var rank = document.getElementById('rank').value;
        var peakRank = document.getElementById('peak-rank').value;
        var valorantTracker = document.getElementById('valorant-tracker').value;
        if (discord === '' || platform === '' || valorantUsername === '' || rank === '' || peakRank === '' || valorantTracker === '') {
            alert('Veuillez remplir tous les champs avant de passer à la page suivante.');
            return;
        }
        // Vérification si le Tracker Valorant est un lien valide
        if (!isValidUrl(valorantTracker)) {
            alert('Le Tracker Valorant doit être un lien valide commençant par http:// ou https://');
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
    var platform = document.getElementById('platform').value;
    var valorantUsername = document.getElementById('valorant-username').value;
    var rank = document.getElementById('rank').value;
    var peakRank = document.getElementById('peak-rank').value;
    var valorantTracker = document.getElementById('valorant-tracker').value;
    var playtime = document.getElementById('playtime').value;
    var roles = document.getElementById('roles').value;
    var playStyle = document.getElementById('play-style').value;
    var teamExperience = document.getElementById('team-experience').value;
    var hearAbout = document.getElementById('hear-about').value;
    var motivations = document.getElementById('motivations').value;
    var acceptInterview = document.getElementById('accept-interview').value;

    var emailBody = "Acceptez-vous les points ci-dessus ? : " + accept + "\n\n";
    emailBody += "Numéro de ticket discord : " + ticketNumber + "\n\n";
    emailBody += "Genre : " + genre + "\n";
    emailBody += "Nom : " + nom + "\n";
    emailBody += "Prénom : " + prenom + "\n";
    emailBody += "Âge : " + age + "\n";
    emailBody += "Date de naissance : " + birthdate + "\n";
    emailBody += "Pseudo discord : " + discord + "\n";
    emailBody += "Plateforme : " + platform + "\n";
    emailBody += "Pseudo Valorant : " + valorantUsername + "\n";
    emailBody += "Rang actuel : " + rank + "\n";
    emailBody += "Peak rang : " + peakRank + "\n";
    emailBody += "Tracker Valorant : " + valorantTracker + "\n";
    emailBody += "Depuis combien de temps vous jouez : " + playtime + "\n";
    emailBody += "Vous jouez quels rôles : " + roles + "\n";
    emailBody += "Votre style de jeu : " + playStyle + "\n";
    emailBody += "Avez-vous déjà été dans une équipe esport : " + teamExperience + "\n";
    emailBody += "Comment avez-vous entendu parlé de nous : " + hearAbout + "\n";
    emailBody += "Quelles sont vos motivations : " + motivations + "\n";
    emailBody += "Acceptation entretien : " + acceptInterview + "\n";

    var subject = "Nouvelle candidature Valorant";

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