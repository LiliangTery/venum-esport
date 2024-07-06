document.addEventListener('DOMContentLoaded', function() {
    // Script pour le curseur personnalisé
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

    /// Données des équipes
    const teams = [
        {
          name: "Naja",
          logo: "https://rocketleague.gankster.gg/static/media/grand-champion1.958bf688.webp",
          members: [
            "Joueur : SNKZZE",
            "Joueur : CANEKO",
            "Joueur : NOROXO",
            "Joueur Sub : N/A",
            "Manager : N/A",
            "Coach : N/A"
          ]
        },
        {
          name: "Natrix",
          logo: "https://rocketleague.gankster.gg/static/media/grand-champion1.958bf688.webp",
          members: [
            "Joueur : VXRZEN",
            "Joueur : ELOU2312",
            "Joueur : KXSH.",
            "Joueur Sub : GORGIL22",
            "Manager : COCOLECOCOPOPS",
            "Coach : N/A"
          ]
        },
        {
            name: "Couleuvre",
            logo: "https://rocketleague.gankster.gg/static/media/grand-champion1.958bf688.webp",
            members: [
              "Joueur : SIXKO",
              "Joueur : TENSHINOUU",
              "Joueur : SNOWYZ",
              "Joueur Sub : N/A",
              "Manager : N/A",
              "Coach : N/A"
            ]
          },
          {
            name: "Cobra",
            logo: "https://rocketleague.gankster.gg/static/media/grand-champion2.e8b8bf1d.webp",
            members: [
              "Joueur : MAGESTHIK.",
              "Joueur : FANATICK",
              "Joueur : MURO",
              "Joueur Sub : SASORI",
              "Manager : N/A",
              "Coach : N/A"
            ]
          },
          {
            name: "Cobra Royal",
            logo: "https://rocketleague.gankster.gg/static/media/grand-champion2.e8b8bf1d.webp",
            members: [
              "Joueur : Sysco",
              "Joueur : Salmane",
              "Joueur : Eza-Prime",
              "Joueur Sub : MaYzen",
              "Manager : Number3Swata",
              "Coach : N/A"
            ]
          },
          {
            name: "Cacaspiste",
            logo: "https://amboosting.com/imgs/rank-icons/rocket-league/GrandChampion3.png",
            members: [
              "Joueur : ! Jay",
              "Joueur : ! zenvy",
              "Joueur : Usagi_Link",
              "Joueur Sub : N/A",
              "Manager : N/A",
              "Coach : N/A"
            ]
          },
          {
            name: "SSL",
            logo: "https://th.bing.com/th/id/OIP.krXK8neaw7B2N5IYZDypaAAAAA?rs=1&pid=ImgDetMain",
            members: [
              "Joueur : Shaxi",
              "Joueur : N/A",
              "Joueur : N/A",
              "Joueur Sub : N/A",
              "Manager : N/A",
              "Coach : N/A"
            ]
          },
        // Ajoutez les autres équipes de la même manière
      ];
      
      // Fonction pour générer le HTML pour une équipe
      function generateTeamHTML(team) {
        let html = `
            <div class="lineup">
                <div class="lineup-title">Line Up ${team.name}</div>
                <img src="${team.logo}" alt="Logo ${team.name}" class="lineup-logo">
                <ul class="lineup-members">
        `;
    
        team.members.forEach(member => {
            let className = "lineup-member";
            if (member.includes("Joueur : N/A") || member.includes("Sub : N/A") || member.includes("Coach : N/A")) {
                className += " strikethrough";
            } else if (member.includes("Manager : N/A")) {
                className += " manager strikethrough";
            }
    
            html += `<li class="${className}">${member}</li>`;
        });
    
        html += `
                </ul>
            </div>
        `;
    
        return html;
    }    

    function displayTeams() {
        const container = document.getElementById("lineup-container");
        teams.forEach(team => {
            const teamHTML = generateTeamHTML(team);
            container.innerHTML += teamHTML;
        });

        // Ajoutez la classe 'active' pour déclencher l'animation
        const lineups = document.querySelectorAll('.lineup');
        lineups.forEach((lineup, index) => {
            setTimeout(() => {
                lineup.classList.add('active');
            }, index * 200); // Déclenche chaque animation avec un léger décalage
        });
    }

    displayTeams();
});