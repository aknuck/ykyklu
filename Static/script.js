\$( document ).ready(function() {
  $$$
  var yakId = 0;
  var post, yakHandle, yakText, yakScore, commentBubble, totalYaks;

  
  // commentBubble.text("1");
  // yakScore.text("9000");
  // yakHandle.text("This still works!").addClass("panel-title").css("font-size", "1.5em");
  // yakText.text("Yay! You are using javascript to modify the original text!");
  for (i=0; i<argsList["numberOfYaks"]; i++){
    post = \$("#posts .row:eq(" + i + ")"); //adding space before eq only selects panel
    commentBubble = \$("#posts .comment-num:eq(" + i + ")");
    yakHandle = \$("#posts .panel-heading:eq(" + i + ")");
    yakText = \$("#posts .panel-body:eq(" + i + ")");
    yakScore = \$("#posts .yak-score:eq(" + i + ")");
    yakTime = \$("#posts .time:eq(" + i + ")");
    yakTime.text(argsList["yaksHot"][i]["time"]);
    yakHandle.text(argsList["yaksHot"][i]["handle"]);
    commentBubble.text(argsList["yaksHot"][i]["numberOfComments"]);
    yakScore.text(argsList["yaksHot"][i]["likes"]);
    yakText.text(argsList["yaksHot"][i]["text"]);
  }


});
