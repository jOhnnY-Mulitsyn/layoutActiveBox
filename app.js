$(function() {
        
        let header = $("#header");
        let intro = $("#intro");
        let introH = intro.innerHeight();
        let scrollPos = $(window).scrollTop();
        let nav = $("#nav");
        let navToggle = $("#navToggle");

        // Fixed Header 
        fixedHeader(scrollPos, introH);  //при обновлении страницы шапка висит

        $(window).on("scroll resize", function() {
                scrollPos = $(this).scrollTop();
                introH = intro.innerHeight();
                fixedHeader(scrollPos, introH);
        });

        function fixedHeader (scrollPos, introH) {
                if (scrollPos > introH) {
                        header.addClass("fixed");
                } else {
                        header.removeClass("fixed");
                }
        };

        // Smooth Scroll 
        $("[data-scroll]").on("click", function(event) {
                event.preventDefault();
                
                let elementID = $(this).data('scroll');
                let elementOffset = $(elementID).offset().top;

                nav.removeClass("show");
                
                $("html, body").animate({
                        scrollTop: elementOffset - 58
                }, 700);
        });

        // Nav Toggle
        navToggle.on("click", function(event) {
                event.preventDefault();
                nav.toggleClass("show")
        });

        // Testimonials Slider https://kenwheeler.github.io/slick/
        let slider = $("#testimonialsSlider");
        slider.slick ({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: false,
                dots:true,
        });
});