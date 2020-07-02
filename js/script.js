// close menubar after click

$(document).ready(function () {

    // $('div').on('click', '.closeMenu', function () {
    //     $('div').removeClass('show');

    // })

    $("#service").click(function() {
        $('div').removeClass('show');
        $("html, body").animate({ scrollTop: $(document).height() }, 2000);
        return false;
      });

    $("#us").click(function() {
        $('div').removeClass('show');
        $("html, body").animate({ scrollTop: 10 }, 900);
        return false;
      });


    
});

