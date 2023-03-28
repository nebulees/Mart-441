var ThingSelector = "#things";
var allThings = new Array();
class thingInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var Things = new thingInfo("#thing", "images/tiny robin.png", "images/tiny aetthus again.png");
    allThings.push(Things);

}
$(document).ready(function(){
    initializeArray();
    console.log(allThings.length);
    console.log(allThings[0].toString());
    console.log(allThings[0].theSelector);
    console.log(allThings[0].theImagePath);

    $(allThings[0].theSelector).attr("src", allThings[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveCircle, 1000);
        
        $(allThings[1].theSelector).fadeOut().fadeIn();
        
    });
    
});                          

function moveCircle()
{
    $("#circle").animate({left:250}).animate({top:500}).animate({left:0}).animate({top:400});
}

