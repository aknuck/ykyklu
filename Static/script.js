\$( document ).ready(function() {
    $$$
    var post, yakHandle, yakText, yakScore, commentBubble, commentArrow, yakTime, totalYaks;

    createRows();
    loadYaks();
    addComments();

    //Generates  html posts
    function createRows() {
        //Creates rows but will invisible
        for(n=0; n<(argsList["numberOfYaks"]); n++) {
            \$('#posts-begin').after('    <div class="individual-post"><div class="row yak-top"><div class="sm-col-3 col-2"><img id="clock" src="./static/images/clock.png"><div class="time">UNKNOWN</div><button class="comment-num">ERR</button><div class="arrow-down"></div></div><div class="panel sm-col-7 col-8"><div class="panel-body"><span class="label label-primary">Error fetching yak.</span><br><br>Please refresh the page. If this problem continues to exist, please <a href="./faq.php#form-contact">contact us.</a></div></div><div class="votes sm-col-1 col-2"><a href="#" class="up-arrow">▲</a><div class="yak-score text-center">ERROR</div><a href="#" class="down-arrow">▼</a></div></div></div>');
            \$('#posts .individual-post').fadeOut("fast");
        }

        //Slide in from right
        var n=1;
        setInterval(function() { 
            \$('#posts .individual-post:nth-of-type('+n+')').show("drop", 350);  
             n++;
        }, 150);   
    }
     
    function addComments() {
        for (n=0; n<argsList["numberOfYaks"]; n++){
            var numComments = argsList["yaks"][n]["numberOfComments"];
            for(i=0; i<numComments; i++) {
                \$('.individual-post:eq(' + n + ')').append('<div class="comments row"><div class="col-2 sm-col-4 time">UNKNOWN TIME</div><div class="lg-col-6 col-7 sm-col-5 comments-body"><p><span class="label label-alt"> ERROR FETCHING COMMENT </span><br>If problem persists, please<a href="./faq.php#form-contact">contact us.</a></p></div><p class="col-2 sm-col-2"><a href="#" class="up-arrow">▲</a><span class="yak-score text-center">ERROR</span><a href="#" class="down-arrow">▼</a></p></div>');
                //\$('.individual-post:eq(' + n + ')').children('.comments:eq(' + i +')').find('.time').text("TIME WORKS");
                \$('.individual-post:eq(' + n + ')').children('.comments:eq(' + i +')').find('.comments-body').html(argsList["yaks"][n]["comments"][i].text);
                \$('.individual-post:eq(' + n + ')').children('.comments:eq(' + i +')').find('.yak-score').text(argsList["yaks"][n]["comments"][i].likes);
                // ["yaks"][n]["comments"][i] is an object with text and likes
            }
        }
        
    }
            
    function loadYaks(){
        //Adds content to each post
        for (i=0; i<argsList["numberOfYaks"]; i++){
            //post = \$("#posts .individual-post:eq(" + i + ")"); //adding space before eq only selects panel
            // selectors
            commentBubble = \$(".yak-top .comment-num:eq(" + i + ")");
            commentArrow = \$(".yak-top .arrow-down:eq(" + i + ")");
            yakHandle = \$(".yak-top .panel-heading:eq(" + i + ")");
            yakText = \$(".yak-top .panel-body:eq(" + i + ")");
            yakScore = \$(".yak-top .yak-score:eq(" + i + ")");
            yakTime = \$(".yak-top .time:eq(" + i + ")");
            // adds content
            yakTime.text(argsList["yaks"][i]["time"]);
            yakHandle.text(argsList["yaks"][i]["handle"]);
            commentBubble.text(argsList["yaks"][i]["numberOfComments"]);
            yakScore.text(argsList["yaks"][i]["likes"]);
            yakText.text(argsList["yaks"][i]["text"]);

            //If comment exists, it colors comment bubble
            if(argsList["yaks"][i]["numberOfComments"] == 0) {
                commentBubble.css("background", "#6B6B6B");
                commentArrow.css("border-top", "10px solid #6B6B6B");
            }

            // Removes yak handle padding/text if it does not exist
            if(yakHandle.text() == "") {
                \$(".yak-top .panel-heading:eq(" + i + ")").remove();
            } 
        }//end for
      }//end function

    function loadHotYaks(){
        //Adds content to each post
        for (i=0; i<argsList["numberOfYaks"]; i++){
            // selectors
            commentBubble = \$("#posts .comment-num:eq(" + i + ")");
            commentArrow = \$("#posts .arrow-down:eq(" + i + ")");
            yakHandle = \$("#posts .panel-heading:eq(" + i + ")");
            yakText = \$("#posts .panel-body:eq(" + i + ")");
            yakScore = \$("#posts .yak-score:eq(" + i + ")");
            yakTime = \$("#posts .time:eq(" + i + ")");
            // adds content
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
        \$('#posts .individual-post').remove(); //completely removes all posts
        \$('nav li:first').addClass('active'); 
        \$('nav li:last').removeClass('active');
        createRows();
        loadYaks();
        addComments();
    });

    \$('#hot').click(function(){
        \$('#posts .individual-post').remove();
        \$('nav li:first').removeClass('active');
        \$('nav li:last').addClass('active');
        createRows();
        loadHotYaks();
        addComments();
    });
    
});
