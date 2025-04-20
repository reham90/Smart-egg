$(window).on('load', function () {
    $(".preloader").hide();
  });
$(document).ready(function() {
    //////////////////////////////////////// password verefication  /////////////////////////////
$(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });
    //phone size menu onclick
    if ($(window).width() <= 991) {
        $(".menu-id").click(function(e) {
            e.preventDefault();

            $(".navgition").toggleClass("reset-left");

            $("body").toggleClass("overflow");
          

        });
      
    };
    //////////////////////////////////////// password verefication  /////////////////////////////
    $(".inputs").keyup(function() {
        if (this.value.length == this.maxLength) {
            $(this).next('.inputs').focus();
        }
    });

//////////////////////////// delete row from table ////////////////////////////////
$('.delete-product').on('click', function(){
    $(this).closest(".table-record").remove();
  });


 




    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1500
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });


    //////////////////////////////// add to cart counter  /////////////////////////////////////////

    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




});