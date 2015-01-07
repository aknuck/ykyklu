<!DOCTYPE html>
<html>
<head>

  <!-- Basic Page Needs
  ================================================== -->
  <meta charset="utf-8">
  <title>Hawk Yak | FAQ</title>
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
        <h1><big><big>FAQ</big></big></h1>
      </div>
    </div>
  </header>

  <section class="section">
    <div class="container">
      <h2>What is Hawk Yak?</h2>
      <p>It is a browser version of the Lehigh Yak feed, viewable only when connected to the Lehigh wifi network. Also, Javascript must be enabled in your browser.</p>
      <hr>
      <h2>What can it do?</h2>
      <p>It is currently view only, but we are planning on adding the ability to post yaks and comments. We are also planning to allow you filter all yaks with certain hashtags, as well as add images to yaks.</p>
      <hr>



      <h2>Who made this?</h2>
      <p>Woah! Everything about Yik Yak is supposed to be anonymous... but we'll let you know who we are. We're two roommates, <a href="http://www.github.com/aknuck">Adam Knuckey</a> and <a href="http://www.github.com/deepsheth">Deep Sheth</a>, who started this project in November of 2014. The frontend is written by Deep in HTML, CSS, and Javascript with the framework <a href="https://github.com/shetharp/CobbleStone">CobbleStone</a>. The backend is written by Adam in Python using the <a href="http://webpy.org/">web.py</a> web framework. The design is a collaboration from both of us.</p>
      <hr>


      <h2>Have any suggestions? <small>Give us feedback!</small></h2>
      <form method="post" action="result.php" id="form-contact">
        <p>
          <label for="email">Email (optional, but allows us to reply back)</label>
          <div class="row">
            <input type="email" placeholder="email@example.com" name="email" class="col-4">
          </div>
        </p>

        <p>
        <label for="comment">Comment</label>
        <div class="row">
          <textarea placeholder="Provide us suggestions..." name="comment" class="col-8" val="" id="text-feedback" required></textarea>
          <button class="btn btn-primary" type="submit"><a id="url" href="" target="_blank" >Send Message</a></button>
        </div>
        </p>
      </form>
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
