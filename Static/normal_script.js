$( document ).ready(function() {


      $('#url').mouseover(function() {
        var emailBody = document.getElementById("text-feedback").value;
        console.log(emailBody);

        $('form a').attr('href', 'mailto:suggestions@hawkyak.com?&subject=[Lehigh%20Yak]%20Feedback&body='+emailBody);
      });
});