$(document).ready(function() {
    let reviews = $('.rr-body');
    reviews.find('.rr-card').each(displayRate)
});

function displayRate() {
    let rate = parseFloat($(this).find('.rr-rate').val());
    let rateContainer = $(this).find('.rr-rateContainer');
    
    rateContainer.find('span').each(function(index) {
        // Vérifie si rate n'est pas un entier
        const isDecimal = rate % 1 !== 0;

        // Si l'index est inférieur à la partie entière, on met une étoile pleine
        if (index < Math.floor(rate)) {
            $(this).html(`<img class="starIcon" src="/assets/img/fullStar.png" alt="Étoile pleine">`);
        }
        // Si c'est un demi et que l'index correspond à la partie entière, on place une demi-étoile
        else if (isDecimal && index === Math.floor(rate)) {
            $(this).html(`<img class="starIcon" src="/assets/img/halfStar.png" alt="Étoile moitié">`);
        }
        // Sinon, on place une étoile vide
        else {
            $(this).html(`<img class="starIcon" src="/assets/img/emptyStar.png" alt="Étoile vide">`);
        }
    });
}
