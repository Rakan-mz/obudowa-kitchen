// close menubar after click

$(document).ready(function () {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  // $('div').on('click', '.closeMenu', function () {
  //     $('div').removeClass('show');

  // })

  $("#service").click(function () {
    $('div').removeClass('show');
    $("html, body").animate({ scrollTop: $(document).height() }, 2000);
    return false;
  });

  $("#us").click(function () {
    $('div').removeClass('show');
    $("html, body").animate({ scrollTop: 10 }, 900);
    return false;
  });



});

