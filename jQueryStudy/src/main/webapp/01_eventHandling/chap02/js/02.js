$(document).ready(function(){

    const man = "서강준,공유,윤두준,손석구,장기용,강동원";
    const woman = "아이유,카리나,김다미,박보영,이나영,윈터"; 

    $("span.man").bind('click', function(){
        $("div#result").html( func_friend(man) );
    });

    $("span.woman").bind('click', function(){
        $("div#result").html( func_friend(woman) );
    });

    $("span.clear").bind('click', function(){
        $("div#result").html("");
    });
    
}); // end of $(document).ready(function()



function func_friend(names) {

    let html = `<ol>`;

    names.split(",").forEach(item => {
        html += `<li>${item}</li>`;
    });

    html += `</ol>`;

    return html;
} // end of function func_friend(names)