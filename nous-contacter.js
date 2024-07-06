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

document.addEventListener('DOMContentLoaded', function () {
    // Modal links and modals
    var modalLinks = document.querySelectorAll('.modal-link');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');

    // Open modal on link click
    modalLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var modalId = link.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    // Close modal on close button click
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    // Close modal on outside click
    window.addEventListener('click', function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

