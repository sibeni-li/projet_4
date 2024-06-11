$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

$(document).ready(function() {
    var currentUrl = window.location.href; // Récupère l'URL actuelle

    // Met à jour les meta tags avec l'URL actuelle
    $('#og-url').attr('content', currentUrl);
    $('#twitter-url').attr('content', currentUrl);
});