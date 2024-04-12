$(document).ready(function(){

    const arr_person = [{name:"김태희", filename:"kimth.jpg", address:"서울 강동구", email:"kimth@gmail.com"}  
                       ,{name:"아이유", filename:"iyou.jpg", address:"서울 강서구", email:"iyou@gmail.com"}
                       ,{name:"박보영", filename:"parkby.jpg", address:"서울 강남구", email:"parkby@gmail.com"}]; 

    let html = ``;

    arr_person.forEach( item => { 
        html += `<span class='buttons'>${item.name}</span>`
    }); // end of arr_person.forEach(item => {})

    $("div#firstdiv").html(html);


    // $("div#container > div#firstdiv > span.buttons").bind('click', function(e){
    // 또는
    $("div#container > div#firstdiv > span.buttons").click(function(e){

        const i = $("div#container > div#firstdiv > span.buttons").index($(e.target));     // 0    1    2
        // 실제로 이벤트가 발생되어진 곳(마우스가 올라간 곳)의 인덱스

        // console.log(i);

        $("div#face").html(`<img src ="images/${arr_person[i].filename}"/>`);

        html = `<ol>
                <li><span>성명</span>${arr_person[i].name}</li>
                <li><span>주소</span>${arr_person[i].address}</li>
                <li><span>e메일</span>${arr_person[i].email}</li>
                </ol>`;

        $("div#comment").html(html);

        // $(elmt).css({'background-color':'navy', 'color':'white'});
        /*
            $("div#container > div#firstdiv > span.buttons").each(function(index, elmt) {
                if(index == i) {
                    $(elmt).css({'background-color':'navy', 'color':'white'});
                }
                else {
                    $(elmt).css({'background-color':'', 'color':''});
                }

            });
        */
        // 또는

        for(let index=0; index<arr_person.length; index++) {

            if(index == i) {
                $("div#container > div#firstdiv > span.buttons").eq(index).css({'background-color':'navy', 'color':'white'});
                // $("div#container > div#firstdiv > span.buttons")[1] 과 동일
            }
            else {
                $("div#container > div#firstdiv > span.buttons").eq(index).css({'background-color':'', 'color':''});
            }

        } // end of for(let index=0; index<arr_person.length; index++)
        
        /*
            선택자.eq(index값); 은 
            ==> 선택자(유사배열)중에서 index값에 해당하는 요소(선택자)를 얻어오는 것이다.
                마치 배열에서 특정 index에 해당하는 배열요소를 얻어오는 것과 같은 의미이다.
        */

        $("div#seconddiv").show();

    }); // end of $("div#container > div#firstdiv > span.buttons").click(function(e){


    // $("div#container > div#firstdiv > span.buttons").eq(0).click();

    // 또는
    /*
      선택자.trigger(event종류); -> jquery에만 존재
      ==> 문서가 로드되어진 다음에는 자동적으로 선택자에 event종류가 동작하도록 실행하는 것이다. 
    */

    $("div#container > div#firstdiv > span.buttons").eq(0).trigger('click');

    // 아래의 trigger()함수를 작동시키기 위해서는 파라미터에 반드시 event 를 넣어주어야만 $(event.target); 을 통해 타겟을 잡게된다.  
    // 파라미터에 event 를 안넣어주면 $(event.target); 을 쓰면 타켓을 올바르게 못잡는다.

    /*
        <javascript 참고 09_javascriptStandardObject - 01_Array_class - 06_객체배열class사용_selectedIndex >
        
        >>>> jQuery 에서 자동으로 select 태그에 change 이벤트 발생 시키기 <<<<
        $("select#select").val("아이유").trigger('change');
    */

    
}); // end of $(document).ready(function(){})