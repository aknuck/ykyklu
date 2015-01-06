$( document ).ready(function() {

  // $('#url').mouseover(function() {
  //   var emailBody = document.getElementById("text-feedback").value;
  //   console.log(emailBody);
  //
  //   $('form a').attr('href', 'mailto:suggestions@hawkyak.com?&subject=[Lehigh%20Yak]%20Feedback&body='+emailBody);
  // });

    $('.votes').click(function() {
      $(this).css("color", "#572D14");
    });

    $('#posts').on('click', '.comment-num', function() {
        console.log((this).closest('.individual-post')); 
        $(this).closest('.individual-post').children('.comments').slideToggle();
    });
   console.log("opened");
});
