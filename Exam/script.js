$(document).ready(function () {

    //Smooth scrolling
    var $anchors = $('a[href^="#"]').not('[href="#"]');

    $anchors.click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 900);
    });

    //Slick-slider
    $('.slider').slick({
        autoplay: true,
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        speed: 2000,
        infinite: true
    });

    //Isotope
    var $isotopeGrid = $('.isotop_container');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true
    });

    $('.all_isotop_container .filter a').click(function () {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });
    $('.links').on('click', function(e){
        e.preventDefault();})

    //Google-map
    var mapHolder = document.getElementById('map'),
        lat = 49.568583,
        lon = 34.585416;

    displayMap(mapHolder, lat, lon);

    function displayMap(mapHolder, lat, lon) {
        var center = new google.maps.LatLng(lat, lon),
            marker = new google.maps.Marker({
                position: center,
                icon: {url: "js/Marker.png"}
            }),
            mapProp= {
                center: center,
                zoom: 16,
                disableDefaultUI: true
            };

        var map = new google.maps.Map(mapHolder, mapProp);

        marker.setMap(map);
        $(mapHolder).show();
    }
});
