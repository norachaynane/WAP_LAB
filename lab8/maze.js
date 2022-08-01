'use strict';

var maze = (function()
{

    var ismousedown;
    var srcX;
    var srcY;
    var boundaries,start,end;
    var mousedown = function(event)
    {
        srcX = event.pageX;
        srcY = event.pageY;
        ismousedown = true;
        $(boundaries).each(function(index,item){
            $(item).removeClass("youlose");
            console.log(index);
        });
    };
    var reset = function()
    {
        $(start).css("left","0px");
        $(start).css("top","210px");
        $("#status").text("Click and drag \"S\" square to \"E\" square ");
        $(".example").removeClass("youwin");
    };
    var collission = function ($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;
        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) { return false; }
        return true;
    };
    var checkCollisions = function()
    {
        $(boundaries).each(function(index,item){

            if(collission(start,$(item)))
            {
                $(boundaries).addClass("youlose");
                reset();
                console.log(index);
            }
        });
    };
    var move  = function(event)
    {
        var diffX = event.pageX - srcX;
        var diffY = event.pageY - srcY;
        srcX = event.pageX;
        srcY = event.pageY;
        console.log(diffX,diffY);
        var l = $(start).css("left");
        var t = $(start).css("top");
        var oldLeft = parseInt(l,10);
        var oldTop  = parseInt(t,10);
        if(oldLeft === "NaN")
        {
            console.log("oldLeft");
            oldLeft = 0;
        }
        if(oldTop === "NaN")
        {
            console.log("oldTop");
            oldTop = 250;
        }
        var top = oldTop + diffY;
        var left = oldLeft+ diffX;
        if(top >= 0){
            $(start).css('top', top+'px');
        }

        if(left >= 0){
            $(start).css('left', left+'px');
        }

    };
    var mousemove = function()
    {
        if(ismousedown){

            move(event);
            checkCollisions();
            if(collission(start,end))
            {
                $("#status").text("Congrats! You won! ");
                $(".example").addClass("youwin");
                $(start).css("left","0px");
                $(start).css("top","210px");
            }
        }
    };


    var mouseup = function() {
        ismousedown = false;
    };
    var initialize = function(mazeContainer)
    {
        ismousedown = false;
        start     = $(mazeContainer).find("#start");
        end   	  = $(mazeContainer).find("#end");
        boundaries = $(mazeContainer).find(".boundary");
        $(start).css('z-index',"100");
        start.bind("mousedown",mousedown);
        start.bind("mousemove",mousemove);
        $(window).bind('mouseup', mouseup);
        //start.bind("mouseclick",mouseclick);
    };


    return {
        init : function(mazeContainer)
        {
            initialize(mazeContainer);
        }
    };

}());
$(function(){

    maze.init("#maze");
});
