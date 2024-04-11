$(document).ready(function(){

    $("input#answer").focus();

    // "정답확인" 버튼을 클릭했을 경우
    $("button#btnOK").bind('click', function(){

        const user_answer = $("input#answer").val().trim(); // 입력되어진 값을 읽어서(val) 공백이 있으면 지우기(trim)
        
        if(user_answer == "") { // 내가 입력한 값이 텅 비었다면
            if( confirm("정답을 미기입 하셨는데, 정말로 진행하시겠습니까?") ) {
                func_check(user_answer);    // 채점한다.
            }
            else {
                $("input#answer").val("").focus();
            }
        }
        else {  // 공백이 아니고 적음
            func_check(user_answer);    // 채점한다.
        }

    }); // end of $("button#btnOK").bind('click', function(){})



    // "다시시작" 버튼을 클릭했을 경우
    $("button#btnRestart").bind('click', function(){

        $("input#answer").val("").focus();
        $("div.answerCheck").hide();

    }); // end of $("button#btnRestart").bind('click', function(){})

}); // end of $(document).ready(function(){})



    // Function Declaration
    function func_check(user_answer) {

        if(user_answer == 23) { // 정답이라면
            $("div.ok").html("<img src = 'images/ok.png' />");
            $("div.ok").show();
            $("div.no").hide();
            
        }
        else {  // 정답이 아니라면
            $("div.no").html("<img src = 'images/no.png' />");
            $("div.no").show();
            $("div.ok").hide();
        }

} // end of function func_check(user_answer) {}