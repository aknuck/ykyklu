<!DOCTYPE html>

<?php

  $email_from = $_POST['email'];
  $comment = $_POST['comment'];
  $comment_entered = true;

  //Validate first
  if(empty($comment))
      $comment_entered = false;

  if(IsInjected($email_from))
  {
      echo "Bad email value";
      exit;
  }


  $email_subject = "Yik Yak Feedback";
  $email_body = $comment;

  $to = "suggestions@hawkyak.com";//<== update the email address
  $headers = "From: $email_from \r\n";
  //Send the email!

  if ($comment_entered) {
    mail($to,$email_subject,$email_body,$headers);
    $mailed = true;
  }

  // Function to validate against any email injection attempts
  function IsInjected($str)
  {
    $injections = array('(\n+)',
                '(\r+)',
                '(\t+)',
                '(%0A+)',
                '(%0D+)',
                '(%08+)',
                '(%09+)'
                );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
      {
      return true;
    }
    else
      {
      return false;
    }
  }

?>

<html>
<head>

  <!-- Basic Page Needs
  ================================================== -->
  <meta charset="utf-8">
  <title>Hawk Yak | Feedback</title>
  <meta name="description" content="Yik Yak feed of Lehigh University">
  <meta name="author" content="Deep Sheth & Adam Knuckey">

  <!-- CSS
  ================================================== -->
  <link href='http://fonts.googleapis.com/css?family=Cabin:500|Exo:800' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="./static/cobblestone.css">
  <link rel="stylesheet" href="./static/style.css">

  <!-- JS
  ================================================== -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="./Static/normal_script.js"></script>

  <!-- Favicons
  ================================================== -->
  <link rel="icon" href="" />

  <!-- Mobile Specific Metas
  ================================================== -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <!-- Analytics
  ================================================== -->
</head>

<body id="faq">
  <a id="top-icon" href="index.html">Yak Feed</a>
  <header id="top">
    <div class="container">
      <div class="row">
        <h1><big><big>Feedback</big></big></h1>
      </div>
    </div>
  </header>

  <section class="section">
    <div class="container">
      <hr>

      <?php
      if (!$comment_entered) {
        echo ('<h2>ERROR. The comment box was empty.</h2>');
      } elseif ($mailed) {
        echo ('<h2>Thank you! Your feedback has been sent.</h2>');
      } else {
        echo ('<h2>ERROR. No feedback was submitted.</h2>');
      }
      ?>

      <hr>
      <div class="section">
        <a href="faq.php" class="btn btn-large btn-primary btn-block pull-center col-3">Back to FAQ</a>
      </div>


    </div>
  </section>

  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56753882-1', 'auto');
  ga('send', 'pageview');
  </script>

</body>
</html>
