$(document).ready(function(){

    $("span.bold").bind('click', function(){
        $("div#result").html("<span id = 'result_bold'>" + $(this).text() + "버튼을 클릭하셨군요</span>");
    });

    $("span.clear").bind('click', function(){
        $("div#result").html("");
    });

    $("span.italic").bind('click', function(){
        $("div#result").html("<span id = 'result_italic'>" + $(this).text() + "버튼을 클릭하셨군요</span>");
    });
});