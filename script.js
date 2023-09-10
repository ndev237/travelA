$(function(){

    var $mainmenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainmenuItems.length,
    openedIndex = 1,

    init = function(){
        bindEvents();
            if(validIndex(openedIndex)){
                animateItem($mainmenuItems.eq(openedIndex), true, 500);
            }
    },
    bindEvents = function(){
        $mainmenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index(),
            $item = $mainmenuItems.eq(newIndex);
            if(openedIndex === newIndex){
                animateItem($item, false, 100);
                openedIndex =-1;
            }
            else{
                if(validIndex(newIndex)){
                    animateItem($mainmenuItems.eq(openedIndex), false, 200);
                    openedIndex =  newIndex;
                     animateItem($item, true, 200);
            }
        }

        });

        $(".button").hover(
            function(){
                $(this).addClass("hovered");
            },
            function(){
                $(this).removeClass("hovered");
            }
        );

        $(".button").click(function(){
            var newIndex =  $(this).index();
            $item = $mainmenuItems.eq(newIndex);

            if(openedIndex === newIndex){
                animateItem($item, false, 100);
                openedIndex =-1;
            }
            else{

                if(validIndex(newIndex)){
                    
                    animateItem($mainmenuItems.eq(openedIndex), false, 200);
                    openedIndex =  newIndex;
                     animateItem($item, true, 200);
            }
        }
        })
    }
    validIndex = function(indexToCheck){
        return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },

    animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"),
        itemPara = toOpen? {width:"420px"}:{width:"140px"} ,
        colorImageParam = toOpen?{left:"0px"}:{left:"140px"};
         $colorImage.animate(colorImageParam,speed);
        $item.animate(itemPara,speed);
    };
    init();
});
