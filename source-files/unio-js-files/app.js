/*! ------------------------------------------------
 * Project Name: Unio Coming Soon & Landing Page Template
 * Project Description: Unio - colorful and stylish coming soon & landing page template to kick-start your project
 * Tags: mix_design, unio, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
 * Version: 2.0.0
 * Build Date: March 2020
 * Last Update: July 2022
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * Author URI: https://themeforest.net/user/mix_design/portfolio
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  2. SVG Fallback
 *  3. Chrome Smooth Scroll
 *  4. Images moving ban
 *  5. PhotoSwipe Gallery Images Replace
 *  6. Main Menu & Sections Behavior
 *  7. Popups Behavior
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

 $(function() {

   // SVG Fallback
   if(!Modernizr.svg) {
     $("img[src*='svg']").attr("src", function() {
       return $(this).attr("src").replace(".svg", ".png");
     });
   };

   // Chrome Smooth Scroll
   try {
     $.browserSelector();
     if($("html").hasClass("chrome")) {
       $.smoothScroll();
     }
   } catch(err) {
   };

   // Images moving ban
   $("img, a").on("dragstart", function(event) { event.preventDefault(); });

   // PhotoSwipe Gallery Images Replace
   $('.my-gallery__link')
     // Background set up
     .each(function(){
     $(this)
     // Add a photo container
     .append('<div class="picture"></div>')
     // Set up a background image for each link based on data-image attribute
     .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
   });

   // Main Menu & Sections Behavior
   // Declaring Variables
   var menuTrigger        = $('#menu-trigger'),
       menuClose          = $('#menu-close'),
       menu               = $('#menu'),
       mainSection        = $('#main'),
       exploreTrigger     = $('#explore-trigger'),
       aboutSection       = $('#about'),
       worksSection       = $('#portfolio'),
       contactSection     = $('#contact'),
       homeTrigger        = $('#home-trigger'),
       aboutTrigger       = $('#about-trigger'),
       worksTrigger       = $('#portfolio-trigger'),
       contactTrigger     = $('#contact-trigger'),
       aboutClose         = $('#about-close'),
       worksClose         = $('#portfolio-close'),
       contactClose       = $('#contact-close'),
       fullscreenBg       = $('.fullscreen-bg');

   // Menu Open - Explore Trigger
   exploreTrigger.on('click', function(event) {
     event.preventDefault();
     $('.active').addClass('animate-out');
     menuTrigger.addClass('menu-opened');
     setTimeout(function(){
       menu.addClass('animate-in');
     }, 600);
     setTimeout(function(){
       $('.active').removeClass('animate-out animate-in');
     }, 1200);
   });

   // Menu Open - Menu Trigger
   menuTrigger.on('click', function(event){
     event.preventDefault();

     if (menu.hasClass('animate-in')) {
       menuTrigger.removeClass('menu-opened');
       menu.addClass('animate-out');
       setTimeout(function(){
         $('.active').addClass('animate-in');
         menu.removeClass('animate-in animate-out');
       }, 600);

     } else {
       $('.active').addClass('animate-out');
       menuTrigger.addClass('menu-opened');
       setTimeout(function(){
         menu.addClass('animate-in');
       }, 600);
       setTimeout(function(){
         $('.active').removeClass('animate-out animate-in');
       }, 1200);
     }

     // Notify & Say Hello Close
     if ($('#notify').hasClass('animate-in')) {
       notify.addClass('animate-out');
       setTimeout(function(){
         mainSection.removeClass('notify-is-visible');
         notify.removeClass('animate-in animate-out');
         notifyClose.removeClass('popup-opened');
       }, 600);
     }
     if ($('#writealine').hasClass('animate-in')) {
       writealine.addClass('animate-out');
       setTimeout(function(){
         contactSection.removeClass('popup-is-visible');
         writealine.removeClass('animate-in animate-out');
         writealineClose.removeClass('popup-opened');
       }, 600);
     }

   });

   // Menu items click action
   $('.navigation__item').on('click', function(event){
     $('.active').removeClass('active');
     $('.active-link').removeClass('active-link');
     menu.addClass('animate-out');
     menuTrigger.removeClass('menu-opened');
   });

   // Home Section Open
   homeTrigger.on('click', function(event) {
     event.preventDefault();

     setTimeout(function(){
       if(fullscreenBg.length){
         $('.gradient-layer-dark').addClass('fade-dark');
       };
       mainSection.addClass('active animate-in');
       homeTrigger.addClass('active-link');
       menu.removeClass('animate-in animate-out');
     }, 600);
   });

   // About Section Open
   aboutTrigger.on('click', function(event) {
     event.preventDefault();

     setTimeout(function(){
       if(fullscreenBg.length){
         $('.gradient-layer-dark').addClass('fade-dark');
       };
       aboutSection.addClass('active animate-in');
       aboutTrigger.addClass('active-link');
       menu.removeClass('animate-in animate-out');
     }, 600);
   });

   // Portfolio Section Open
   worksTrigger.on('click', function(event) {
     event.preventDefault();

     setTimeout(function(){
       if(fullscreenBg.length){
         $('.gradient-layer-dark').addClass('fade-dark');
       };
       worksSection.addClass('active animate-in');
       worksTrigger.addClass('active-link');
       menu.removeClass('animate-in animate-out');
     }, 600);
   });

   // Contact Section Open
   contactTrigger.on('click', function(event) {
     event.preventDefault();

     setTimeout(function(){
       if(fullscreenBg.length){
         $('.gradient-layer-dark').addClass('fade-dark');
       };
       contactSection.addClass('active animate-in');
       contactTrigger.addClass('active-link');
       menu.removeClass('animate-in animate-out');
     }, 600);
   });

   // Popups Behavior
   var notify             = $('#notify'),
       headline           = $('#headline'),
       writealine         = $('#writealine'),
       notifyTrigger      = $('#notify-trigger'),
       notifyClose        = $('#notify-close'),
       writealineTrigger  = $('#writealine-trigger'),
       writealineClose    = $('#writealine-close');

   // Contact Forms Open/Close Start
   // Notify Form Open
   notifyTrigger.on('click', function(event){
     event.preventDefault();
     mainSection.addClass('notify-is-visible');
     setTimeout(function(){
       notify.addClass('animate-in');
     }, 800);
     setTimeout(function(){
       notifyClose.addClass('popup-opened');
     }, 2000);
   });
   // Notify Form Close
   notifyClose.on('click', function(event){
     event.preventDefault();
     notify.addClass('animate-out');
     setTimeout(function(){
       mainSection.removeClass('notify-is-visible');
       notify.removeClass('animate-in animate-out');
       notifyClose.removeClass('popup-opened');
     }, 800);
   });

   // Write a Line Form Open
   writealineTrigger.on('click', function(event){
     event.preventDefault();
     contactSection.addClass('popup-is-visible');
     setTimeout(function(){
       writealine.addClass('animate-in');
     }, 800);
     setTimeout(function(){
       writealineClose.addClass('popup-opened');
     }, 2000);
   });
   // Write a Line Form Close
   writealineClose.on('click', function(event){
     event.preventDefault();
     writealine.addClass('animate-out');
     setTimeout(function(){
       contactSection.removeClass('popup-is-visible');
       writealine.removeClass('animate-in animate-out');
       writealineClose.removeClass('popup-opened');
     }, 800);
   });

});
