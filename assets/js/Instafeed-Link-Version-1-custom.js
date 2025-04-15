$(document).ready(function() {


 var userFeed = new Instafeed({
        get: 'user',
        userId: '1489124166',
        limit: 40,
        resolution: 'standard_resolution',
        accessToken: '1489124166.1677ed0.e1c0797ee3ed4efdb8e8493255483d8b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 col-6 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});