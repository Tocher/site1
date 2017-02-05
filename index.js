var shareTmp = $('.share-tmp');

$(document).on('ready', function() {
    //$('.carousel').carousel();
});

// портфолио
$(document).on('click', '.portfolio a', function(event) {
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

    shareTmp.html(VK.Share.button(data));

    try {
        shareTmp.find('a')[0].click();
    } catch (e) {}
});

var portfolioItem = '<div class="col-md-3 col-sm-4 col-6 portfolio-item portfolio-hidden">' +
        '<a href="portfolio/1.jpg">' +
            '<img src="portfolio/1.jpg" class="img-fluid">' +
            '<div class="portfolio-caption text-center lato-light">' +
                '<div class="portfolio-title">PLAN X</div>' +
                '<div class="portfolio-subtitle">клуб Galaxy (Гродно)</div>' +
                '<div class="portfolio-date">19 ноября</div>' +
            '</div>' +
        '</a>' +
    '</div>';

$('.portfolio-more').click(function() {
    $('.portfolio-row').append(portfolioItem);
    $('.portfolio-row').append(portfolioItem);
    $('.portfolio-row').append(portfolioItem);
    $('.portfolio-row').append(portfolioItem);

    setTimeout(function() {
        $('.portfolio-hidden').removeClass('portfolio-hidden');
    }, 100);
});

var section1Height = $('.section1').innerHeight(),
    info = $('.info'),
    infoFixed = $('.info_fixed');

$(document).on('scroll', function(e) {
    if (section1Height < window.scrollY) {
        infoFixed.show();
    } else {
        infoFixed.hide();
    }
});