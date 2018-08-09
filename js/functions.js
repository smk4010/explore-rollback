$( document ).ready(function() {

        //HTML5 VALIDATOR

          function hasHtml5Validation () {
            return typeof document.createElement('input').checkValidity === 'function';
          }

          if (hasHtml5Validation()) {
            $('.validate-form').submit(function (e) {
              if (!this.checkValidity()) {
                e.preventDefault();
                $(this).addClass('invalid');
                $('#status').html('invalid');
              } else {
                $(this).removeClass('invalid');
                $('#status').html('submitted');
              }
            });
          }

        //SMOOTH SCROLLING

        $.fn.scrollView = function () {
            return this.each(function () {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 60
                }, 600);
            });
        }

        // SCROLL TO ANCHORS

        $('nav li a').click(function(event) {
          sectionId = $(this).attr('href');
          $(sectionId).scrollView();
        });

        $('a.navbar-brand').click(function(event) {
          $('body').scrollView();
        });

        // PULL VARS FROM URL

        function getQueryVariable(variable) {
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
          }
          return(false);
        }

      //Hide Form at load
        $('#slate-form').hide();
        $( window ).load(function() {

		  // Reveal form
  		$('#slate-form').delay(600).slideDown(1000);

  	   });

        // TOGGLE ACADEMICS ARTICLES WITH HIDDEN CLASS

        function chooseComponent(articleId) {

          if ( articleId === undefined ) {
            articleId = '#school-arts-sciences';
          }

          $('#academics > article:not(' + articleId + ')').addClass('hidden');
          $( articleId ).removeClass('hidden');
          $('.school-menu a:not([href="' + articleId + '"])').removeClass('hidden')
          $('.school-menu a[href="' + articleId + '"]').addClass('hidden', 1000, 'linear');

        }

        // Swap Academics articles

        $('.school-menu a').click(function(event) {
          articleId = $(this).attr('href');
          chooseComponent(articleId);
          $(articleId).scrollView();
        });

        // Scroll to anchor links - NOT READY UNTIL NEW MENU COMPLETE

        $('#banner nav a, .cta a').click(function(event) {
          sectionId = $(this).attr('href');
          $(sectionId).scrollView();
        });

        $('.home a#logo').click(function(event) {
          $('body').scrollView();
        });

        // Choose academics component and hide the others - NOT READY UNTIL NEW SLATE FORM COMPELTE

        var academics = getQueryVariable('school');
        if (academics) {
        if (academics.startsWith('a')) academics='arts-sciences';
        if (academics.startsWith('n')) academics='nursing';
        if (academics.startsWith('w')) academics='wharton-business';
        if (academics.startsWith('e')) academics='engineering';
        }

        if ( ( academics == 'arts-sciences' ) || ( academics == 'nursing' ) || ( academics == 'wharton-business' ) || ( academics == 'engineering' ) ) {
          academics = '#school-' + academics;
          chooseComponent(academics);
        } else {
          chooseComponent();
        }

        // Run on load
        $( window ).load(function() {
          // Reveal form
          $('#slate-form').delay(600).slideDown(1000);
        });

});
