$(document).on('ready', function() {
    //$('.carousel').carousel();
});

// портфолио
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
