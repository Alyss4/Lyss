<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Récupérer le bouton de bascule et la barre latérale
        var sidebarToggle = document.getElementById('sidebarToggle');
        var layoutSidenav = document.getElementById('layoutSidenav');

        // Ajouter un gestionnaire d'événement au bouton de bascule
        sidebarToggle.addEventListener('click', function () {
            // Basculer la classe "active" de la barre latérale
            if (layoutSidenav.classList.contains('active')) {
                layoutSidenav.classList.remove('active');
            } else {
                layoutSidenav.classList.add('active');
            }
        });
    });
</script>
