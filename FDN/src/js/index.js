$(document).ready(function () {
    var body = document.getElementsByTagName('body')[0],
        navBtn = document.querySelector('.btn-nav'),
        siteNavWrapper = document.querySelector('.site-nav-wrapper'),
        closeMenuBtn = document.querySelector('.site-nav__close');

    navBtn.onclick = function () {
        if(siteNavWrapper.classList.contains('push')){
            body.classList.remove('blocked');
            siteNavWrapper.classList.remove('push');

        } else {
            body.classList.add('blocked');
            siteNavWrapper.classList.add('push');
        }
    };

    closeMenuBtn.onclick = function () {
        body.classList.remove('blocked');
        siteNavWrapper.classList.remove('push');
    };

    //accordion in site-nav
    var siteNavFirstLevelLinks = document.querySelectorAll('.site-nav-item--second-leveled > a');

    function showSubnav(e) {
        var targetLink = $(e.target);
        var targetLinkParent = $(e.target).closest("li");

        if(!targetLink.hasClass('active')){
            targetLink.addClass('active');
            targetLinkParent.addClass('active').siblings().removeClass('active');

        }else {
            targetLink.removeClass('active');
            targetLinkParent.removeClass('active');
        }
        for(var i= 0; i<siteNavFirstLevelLinks.length; i++){
            if(siteNavFirstLevelLinks[i] !== e.target){
                siteNavFirstLevelLinks[i].classList.remove('active');
            }
        }
    }

    for(var i = 0; i < siteNavFirstLevelLinks.length; i++){
        siteNavFirstLevelLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            showSubnav(e);
        });
    }

    $('.posts-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.review-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    $('.date-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
    $('.blog-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });


    //video custom controls
    $(".video__play-pause").click(function () {
        if($("#video1").get(0).paused){
            $("#video1").get(0).play();
            $(".video__play-pause").addClass("play");
        }else{
            $("#video1").get(0).pause();
            $(".video__play-pause").removeClass("play");
        }
    });
    $("#video1").on("ended", function() {
        $(".video__play-pause").removeClass("play");
    });

    //validation of form
    jQuery.validator.addMethod("validate_email",function(value, element) {
        if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ))
        {
            return true;
        }
        else
        {
            return false;
        }
    },"E-mail is wrong!");

    $(".comment-form").validate({
        rules: {
            email: {
                email: true,
                required: true,
                validate_email: true
            },
            name: {
                required: true,
                minlength: 2,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            message: {
                required: true,
                minlength: 5,
                normalizer: function(value) {
                    return $.trim(value);
                }
            }
        },
        messages: {
            email:{
                required: "This field is required",
                email: "E-mail is wrong!"
            },
            name: {
                required: "This field is required",
                minlength: "Enter at least 3 characters"
            },
            message: {
                required: "Please write a message",
                minlength: "Enter at least 5 characters"
            }
        }
    });


});
