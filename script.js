$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'right',
        trigger : 'hover',
        html : true,
    });
});