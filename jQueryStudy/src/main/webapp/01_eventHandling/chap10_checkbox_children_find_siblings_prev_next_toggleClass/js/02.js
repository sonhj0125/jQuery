$(document).ready(function(){

    /* 
        $("div#firstDiv span.buttons > label").click( e => {
            alert("헤헤헤");    
        });
    */

    $("div#firstDiv").find("label").click( e => {
        // alert("호호호");

        /*   
            선택자.toggleClass("클래스명1");
            ==> 이것은 선택자에 "클래스명1" 이 이미 적용되어 있으면 선택자에 "클래스명1" 을 제거해주고, 
                만약에 선택자에 "클래스명1" 이 적용되어 있지 않으면 선택자에 "클래스명1" 을 추가해주는 것.
                
            한마디로 addClass("클래스명1") 와 removeClass("클래스명1") 를 합친것 이라고 보면 된다.     
        */  
        
        $(e.target).toggleClass("changeCSSname");
        // label 태그에 클릭을 했을때에 label 태그에 CSS 클래스 changeCSSname 이 
        // 적용이 안되어진 상태이라면 label 태그에 CSS 클래스 changeCSSname 을 적용시켜주고,
        // 이미 적용이 되어진 상태이라면 label 태그에 CSS 클래스 changeCSSname 을 해제시켜준다.
    });


    // === 체크박스  전체선택/전체해제 === //
    /*
    $("div#firstDiv input:checkbox[id='checkall']").click( (e) => {
        alert("확인용1");
    });
    
    
    $("div#firstDiv input#checkall").click( (e) => {
        alert("확인용2");
    }) 

       
    $("div#firstDiv").find("input#checkall").click( (e) => {
        alert("확인용3");
    });
    */
   
    
   /*
        === 선택자의 class 알아오기 === 
            선택자.attr('class')  또는  선택자.prop('class') 
             
        === 선택자의 id 알아오기 === 
            선택자.attr('id')     또는  선택자.prop('id') 
             
        === 선택자의 name 알아오기 ===     
            선택자.attr('name')   또는  선택자.prop('name')
             
        >>>> .prop() 와 .attr() 의 차이 <<<<            
          .prop() ==> form 태그내에 사용되어지는 엘리먼트의 disabled, selected, checked 의 속성값 확인 또는 변경하는 경우에 사용함. 
         .attr() ==> 그 나머지 엘리먼트의 속성값 확인 또는 변경하는 경우에 사용함.    
    */


    $("div#firstDiv input:checkbox[id='checkall']").click( (e) => {
        
        // const bool = $(e.target).is(":checked");
        // 또는
        const bool = $(e.target).prop("checked");

        // console.log("확인용 bool => ", bool);
        // 전체선택/전체해제 체크박스에 클릭을 했을때에 체크가 되어진 클릭이라면 bool 은 true 를 가지고,
        // 전체선택/전체해제 체크박스에 클릭을 했을때에 체크를 해제하는 클릭이라면 bool 은 false 를 가진다.

        $("div#firstDiv input:checkbox[name='person']").prop("checked", bool);

        if(bool) {
            // "전체선택/전체해제 체크박스" 에 체크를 한 경우라면

            // $(e.target).prev().addClass("changeCSSname");
            // 선택자.prev() 는 선택자의 바로 앞의 형제요소(형제태그)를 가리키는 것이다.
            
            $("div#firstDiv").find("label").addClass("changeCSSname");
          
        }
        else {
            // "전체선택/전체해제 체크박스" 에 체크를 해제한 경우라면
            $(e.target).prev().removeClass("changeCSSname");
            $("div#firstDiv").find("label").removeClass("changeCSSname");
        }
       
    }); // end of $("div#firstDiv input:checkbox[id='checkall']").click( (e) => {} )



    $("div#firstDiv input:checkbox[name='person']").click( e => {
        // name 이 person 인 체크박스에 대해서 클릭하면

        const bool = $(e.target).prop("checked");
        // 클릭한 체크박스의 체크유무를 알아온다.

        if(bool) {
            // 클릭한 체크박스가 체크가 되어진 상태이면
            
            $(e.target).prev().addClass("changeCSSname")
            // 선택자.prev() 는 선택자의 바로 앞의 형제요소(형제태그)를 가리키는 것이다.

            // === name 이 person 인 모든 체크박스를 검사해서 모두 체크가 되어진 상태인지 알아온다. === //
            let b_all_checked = true;
            $("div#firstDiv input:checkbox[name='person']").each( (index, elmt) => {
                // $(elmt) 이 $("div#firstDiv input:checkbox[name='person']") 중 반복되어지는 하나의 요소(element)이다.
                const b_checked = $(elmt).prop("checked");
                // 반복을 돌면서 해당 체크박스에 체크가 되어져 있는지 확인함

                if(!b_checked) { // 체크가 되어있지 않다면
                    b_all_checked = false;
                    return false;   // each를 break 한다. 빠져나옴
                }  

            }); // end of $("div#firstDiv input:checkbox[name='person']").each( (index, elmt) => {} )

            if(b_all_checked) {
                // name 이 person 인 모드 체크박스를 하나하나씩 체크유무 검사를 마쳤을때 
                // 모든 체크박스가 체크가 되어진 상태이라면 

                $("div#firstDiv input:checkbox[id='checkall']").prop("checked", true);
                // "전체선택/전체해제 체크박스" 에 체크를 한다.
                $("div#firstDiv input:checkbox[id='checkall']").prev().addClass("changeCSSname")
                // "전체선택/전체해제 체크박스" 의 한단계 앞에 있는 형제엘리먼트(형제태그)인 모두 체크/해제 label 태그에 CSS changeCSSname 을 준다.

            }

        }
        else {
            // 클릭한 체크박스가 체크가 되어지지 않은 상태이면
            $(e.target).prev().removeClass("changeCSSname")
            // 선택자.prev() 는 선택자의 바로 앞의 형제요소(형제태그)를 가리키는 것이다.

            $("div#firstDiv input:checkbox[id='checkall']").prop("checked", false);
            // "전체선택/전체해제 체크박스" 에 체크를 해제한다.
            $("div#firstDiv input:checkbox[id='checkall']").prev().removeClass("changeCSSname")
            // "전체선택/전체해제 체크박스" 의 한단계 앞에 있는 형제엘리먼트(형제태그)인 모두 체크/해제 label 태그에 CSS changeCSSname 을 해제 시켜준다.
        }

    }); // end of $("div#firstDiv input:checkbox[name='person']").click( e => {} )



    // ======= 확인 버튼을 클릭하면 ======= //
    $("button#btnOK").click( e => {

        // === name 이 person 인 체크박스의 개수 === //






        // === name 이 person 인 체크박스중 체크가 되어진 체크박스의 개수 === //



        

    }); // end of $("button#btnOK").click( e => {} )













}); // end of $(document).ready(function(){}