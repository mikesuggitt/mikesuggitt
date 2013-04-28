var down_x = null;
var up_x = null;

function do_work()
{
    if ((down_x - up_x) > 50)
    {
        slide_right();
    }
    if ((up_x - down_x) > 50)
    {
        slide_left();
    }
}


var currentContent = 0;
var currentElement;

function slide_right()
{
    var oldContent = currentContent;
    if( currentContent+1 > 3 ) {
	currentContent = 0;
    }
    else {
	currentContent++;
    }
    currentElement = $('.content-header')[currentContent];
    
    $('#main-body').scrollTo($(currentElement), 800);
    setPosition($(currentElement).attr('href').replace('#',''), '#cloud1', '0px', '400px', '800px', '1200px');
    
    
    
    //$('a.link').removeClass('selected');  
    //$(this).addClass('selected');
}


function slide_left()
{
  
    var oldContent = currentContent;
    if( currentContent-1 < 0 ) {
	currentContent = 1;
    }
    else {
	currentContent--;
    }
    
    currentElement = $('.content-header')[currentContent];
    
    $('#main-body').scrollTo($(currentElement), 800);
    setPosition($(currentElement).attr('href'), '#cloud1', '0px', '400px', '800px', '1200px');
    
    
    $('a.link').removeClass('selected');  
    $(this).addClass('selected');
}
  
function setPosition(check, div) {
    var scrollTo = currentContent * 400;
    $(div).scrollTo(scrollTo, 800);
};


$(document).ready(function ()
{
    $(".main-body").mousedown(function (e)
    {
        e.preventDefault();
        down_x = e.pageX;
    });
    $(".main-body").mouseup(function (e)
    {
        up_x = e.pageX;
        do_work();
    });
    $(".main-body").bind('touchstart', function (e)
    {
        down_x = e.originalEvent.touches[0].pageX;
    });
    $(".main-body").bind('touchmove', function (e)
    {
        e.preventDefault();
        up_x = e.originalEvent.touches[0].pageX;
    });
    $(".main-body").bind('touchend', function (e)
    {
        do_work();
    });
});


/*
$("#mask > li").bind('touchstart', function(e){
    down_x = e.originalEvent.touches[0].pageX;
  });
  $("#mask > li").bind('touchmove', function(e){
    e.preventDefault();
    up_x = e.originalEvent.touches[0].pageX;
  });
  $("#mask > li").bind('touchend', function(e){
  do_work();
  });
  */