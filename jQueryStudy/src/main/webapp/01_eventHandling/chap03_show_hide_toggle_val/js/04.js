$(document).ready(function(){

    $("div.answerCheck").hide();

    // "정답확인" 버튼을 클릭했을 경우
    $("button#btnOK").bind('click', function(){

        let is_choice = false; 
        // 정답이든 오답이든 라디오를 선택했는지 선택을 아예 아무것도 안했는지 유무를 알아오는 용도
        let is_correct = false;
        // 정답을 선택했는지 오답을 선택했는지 알아오는 용도 

        $("input:radio[name='answer']").each(function(index, elmt){
            
            /*
            if(index > 1) {
                return false;
                // each 내에서 return false; 가 마치 for문 에서의 break; 와 같은 기능이다. 
                // each 내에서 return true; 가 마치 for문 에서의 continue; 와 같은 기능이다.
                
            }

            // console.log("index => ", index);
            /*
                index => 0
                index => 1
            */

                // console.log("라디오 value => ", $(this).val());
                // console.log("라디오 value => ", $(elmt).val());
                // $(this) 와 $(elmt) 은 동일한 엘리먼트를 가리키는 것이다.
                // 즉, $(this) 와 $(elmt) 은 같은 것이다.


        /*
            ==== jQuery 에서 라디오 또는 체크박스에 선택을 했는지를 알아오는 2가지 방법 ====
                
             1. $(라디오 또는 체크박스의 선택자).prop("checked") 
                ==> 선택을 했으면 true, 선택을 안했으면 false
                
             2. $(라디오 또는 체크박스의 선택자).is(":checked")   
                ==> 선택을 했으면 true, 선택을 안했으면 false
        */
            // console.log("라디오 선택여부 => ", $(this).prop("checked"));
            // 또는
            // console.log("라디오 선택여부 => ", $(this).is(":checked"));

            // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

            if( $(elmt).prop("checked") ) {
                // 라디오 4개중 아무거나 1개를 선택한 경우라면
                is_choice = true;

                if( (index+1) == 3 ) {
                    // 정답인 3번을 선택했다라면
                    is_correct = true;
                }

                return false;
            }

        }); // end of $("input:radio[name='answer']").each(function(index, elmt){

        //console.log("반복문을 빠져나옴");
       
        if(!is_choice) {    // 정답이든 오답이든 라디오 선택을 아예 아무것도 하지 않은 경우
            alert("정답을 선택하세요.!!");
        }
        else {  // 정답이든 오답이든 라디오 선택을 한 경우
            // $(this).hide(); 또는
            $("button#btnOK").hide();   // 버튼 숨기기

            if(is_correct) {
                $("div.ok").show();
            }
            else {  // 오답이라면
                $("div.no").show();
            }
            
        }

    }); // end of $("button#btnOK").bind('click', function(){})


    // "다시시작" 버튼을 클릭했을 경우
    $("button#btnRestart").bind('click', function(){

        $("button#btnOK").show();   // 버튼 보이기
        $("div.answerCheck").hide();    // 정답이든 오답이든 일단 감추기(초기화)

        $("input:radio[name='answer']").prop("checked", false);
        // name이 answer인 모든 라디오에 선택이 안되어지도록 만드는 것이다.

    }); // end of $("button#btnRestart").bind('click', function(){})




}); // end of $(document).ready = function(){})