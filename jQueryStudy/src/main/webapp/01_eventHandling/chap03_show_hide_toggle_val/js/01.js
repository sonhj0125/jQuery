$(document).ready(function(){

    $("div.answerCheck").hide();
    $("input#answer").focus();

    // "정답확인" 버튼을 클릭했을 경우
    $("button#btnOK").bind('click', function(){

        const user_answer = $("input#answer").val().trim(); // 입력되어진 값을 읽어서(val) 공백이 있으면 지우기(trim)
        
        if(user_answer == "") { // 내가 입력한 값이 텅 비었다면
            if( confirm("정답을 미기입 하셨는데, 정말로 진행하시겠습니까?") ) {
                $("div.ok").hide();
                $("div.no").show();
            }
            else {
                $("input#answer").focus();
            }
        }
        else {  // 공백이 아니고 적음
            //if(user_answer === "17") { // 정답을 적음
            if(user_answer == 17) { // 정답을 적음. 타입은 다르고 값은 같다
                $("div.ok").show();
                $("div.no").hide();
            }
            else {  // 오답을 적음
                $("div.ok").hide();
                $("div.no").show();
            }
        }

    }); // end of $("button#btnOK").bind('click', function(){})



    // "다시시작" 버튼을 클릭했을 경우
    $("button#btnRestart").bind('click', function(){

        $("input#answer").val("").focus();
        $("div.answerCheck").hide();

    });



}); // end of $(document).ready(function(){})