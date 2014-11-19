\$( document ).ready(function() {
  $$$
  var post, yakHandle, yakText, yakScore, commentBubble, totalYaks;

  createRows();
  loadYaks();

  //Generates  html posts
  function createRows() {
    \$('#posts .row:first').animate({opacity: 1}, 500); //fades in first row on load
    //Creates rows
    for(n=0; n<(argsList["numberOfYaks"]-1); n++) {
      \$('#posts .row:last').after('<div class="row faded-out"><div class="sm-col-2"><img id="clock" src="./static/images/clock.png"/><div class="time"></div><button class="comment-num"></button><div class="arrow-down"></div></div><div class="panel sm-col-8"><div class="panel-heading"><h4 class="panel-title"></h4></div><div class="panel-body"></div></div><div class="votes"><a href="#" class="up-arrow">&#9650;</a><div class="yak-score"></div><a href="#" class="down-arrow">&#9660;</a></div></div>').animate({
        opacity: 1
      }, 500 );
    \$('#posts .row:last').animate({opacity: 1}, 500);
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
    }//end for
  }//end function

  function loadHotYaks(){

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
      yakTime.text(argsList["yaksHot"][i]["time"]);
      yakHandle.text(argsList["yaksHot"][i]["handle"]);
      commentBubble.text(argsList["yaksHot"][i]["numberOfComments"]);
      yakScore.text(argsList["yaksHot"][i]["likes"]);
      yakText.text(argsList["yaksHot"][i]["text"]);

      // Change comment box color depending on number of comments
      if(argsList["yaksHot"][i]["numberOfComments"] == 0) {
        commentBubble.css("background", "#6B6B6B");
        commentArrow.css("border-top", "10px solid #6B6B6B");
      }

      // Removes extra padding if there is not yak handle
      if(yakHandle.text() == "") {
        \$("#posts .panel-heading:eq(" + i + ")").remove();
      }
    }//end for
  }// end function

//////////////////////////
///// EVENT HANDLERS /////
//////////////////////////

  \$('#new').click(function(){
    \$('#posts .row:first').css("opacity", 0);
    \$('#posts .row:not(:first)').remove();

    \$('nav li:first').addClass('active');
    \$('nav li:last').removeClass('active');
    createRows();
    loadYaks();
  });

  \$('#hot').click(function(){
    \$('#posts .row:first').css("opacity", 0);
    \$('#posts .row:not(:first)').remove();

    \$('nav li:first').removeClass('active');
    \$('nav li:last').addClass('active');
    createRows();
    loadHotYaks();
  });









});
