var shareTmp = $('.share-tmp');

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

$('.share').click(function(e) {
    e.preventDefault();

    if (!VK) return;

    var data = $(this).data();

    data.url = location.href + data.url;
    data.image = data.url;
    data.noparse = true;

    console.log(data);

    shareTmp.html(VK.Share.button(data, {text:'testtest'}));

    try {
        shareTmp.find('a')[2].click();
    } catch (e) {}
});