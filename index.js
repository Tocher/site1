$(document).on('ready', function() {
    //$('.carousel').carousel();
});

// портфолио
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();

    var exit = $('.modal-content')[0];

    $(document).on('click', '.modal', function(event) {
        if (event.target === exit) $('.modal').modal('hide');
    });
});
