$(".gnb li").hover(
    function(){
        $(".sub").stop().fadeIn();
    },
    function(){
        $(".sub").stop().fadeOut();
    },

);


$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }
);


$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
);