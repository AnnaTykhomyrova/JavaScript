$(document).ready(function () {

    //Smooth scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    //Slick-slider
    $('#slider').slick({
        autoplay: true,
        arrows: false,
        mobileFirst: true
    });
});
//     //Isotope
//     var $isotopeGrid = $('.portfolio-images');
//
//     $isotopeGrid.isotope({
//         itemSelector: '.img-wrapper',
//         percentPosition: true
//     });
//
//     $('.portfolio .filters button').click(function () {
//         var filterValue = $(this).data('filter');
//
//         $isotopeGrid.isotope({
//             filter: filterValue
//         });
//     });
//
//     //Google-Map
//     showMap(document.getElementById("map"), 50, 20);
//
//     function showMap(mapElement, lat, lon) {
//         var center = new google.maps.LatLng(lat, lon);
//
//         var marker = new google.maps.Marker({
//             position: center,
//             animation: google.maps.Animation.BOUNCE,
//             label: "I am draggable!",
//             draggable: true
//         });
//
//         var mapProp= {
//             center: center,
//             zoom: 10,
//             disableDefaultUI: true,
//             mapTypeId: 'terrain'
//         };
//         var map =new google.maps.Map(mapElement, mapProp);
//         marker.setMap(map);
//     }
// });