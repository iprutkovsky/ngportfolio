$(window).scroll(function () {
    // scroll-up button show/hide        
    let e = $('html')[0];
    window.scrollY > 500 ? $('.scroll-up-btn').addClass("show") : $('.scroll-up-btn').removeClass("show");
    document.querySelector('#progress-bar-output').innerHTML = parseInt(`${e.scrollTop / (e.scrollHeight - e.clientHeight) * 100}%`);
});

// slide-up
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar 
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});