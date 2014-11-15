\$( document ).ready(function() {
  $$$
  var post, yakHandle, yakText, yakScore, commentBubble, totalYaks;

  createRows();
  loadYaks();

  //Generates  html posts
  function createRows() {
    \$('#posts .row').animate({opacity: 1}, 800);
    for(n=0; n<(argsList["numberOfYaks"]-1); n++) {
      \$('#posts .row:last').after('<div class="row faded-out"><div class="sm-col-2"><img id="clock" src="./static/images/clock.png"/><div class="time"></div><button class="comment-num"></button><div class="arrow-down"></div></div><div class="panel sm-col-8"><div class="panel-heading"><h4 class="panel-title"></h4></div><div class="panel-body"></div></div><div class="votes"><a href="#" class="up-arrow">&#9650;</a><div class="yak-score"></div><a href="#" class="down-arrow">&#9660;</a></div></div>').animate({
        opacity: 1
      }, 800 );
    \$('#posts .row:last').animate({opacity: 1}, 800);
    }
  }

  function loadYaks() {

    //Adds content to each post
    for (i=0; i<argsList["numberOfYaks"]; i++){
      //post = \$("#posts .row:eq(" + i + ")"); //adding space before eq only selects panel
      commentBubble = \$("#posts .comment-num:eq(" + i + ")");
      commentArrow = \$("#posts .arrow-down:eq(" + i + ")");
      yakHandle = \$("#posts .panel-heading:eq(" + i + ")");
      yakHandle.text("This still works!").addClass("panel-title").css("font-size", "1.5em");
      yakText = \$("#posts .panel-body:eq(" + i + ")");
      yakScore = \$("#posts .yak-score:eq(" + i + ")");
      yakTime = \$("#posts .time:eq(" + i + ")");
      yakTime.text(argsList["yaks"][i]["time"]);
      yakHandle.text(argsList["yaks"][i]["handle"]);
      commentBubble.text(argsList["yaks"][i]["numberOfComments"]);
      yakScore.text(argsList["yaks"][i]["likes"]);
      yakText.text(argsList["yaks"][i]["text"]);

      if(argsList["yaks"][i]["numberOfComments"] == 0) {
        commentBubble.css("background", "#6B6B6B");
        commentArrow.css("border-top", "10px solid #6B6B6B");
      }

      if(yakHandle.text() == "") {
        \$("#posts .panel-heading:eq(" + i + ")").remove();
      }
    }
  }


});
