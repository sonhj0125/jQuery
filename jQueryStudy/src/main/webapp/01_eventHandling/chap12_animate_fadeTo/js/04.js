
const arrImg = ["parkbyLarge.jpg","kimthLarge.jpg","iyouLarge.jpg"]; 
const arrNewImg = [];

$(document).ready(function() {
	
		// == 물고기 사진 3개를 만들기 시작 == //
		let html = ``;
		for(let i=0; i<arrImg.length; i++) {
			html += `<img class='fish' src='images/fish.jpg' />`;
		}
		
		$("div#div1").html(html);
		// == 물고기 사진 3개를 만들기 끝 == //
		

		////////////////////////////////////////////////////////

		/*
		   == 0 부터 2까지 의 난수를 발생시키기 ==
		      공식 :  Math.floor( Math.random()*(max-min+1) ) + min;
		*/
		
		const arrOld = []; // 뽑은 난수번호를 기억시켜둘 장소 (동일한 난수를 뽑았는지 아닌지를 비교하려고) 
		for(let i=0; i<2; i++) {
			arrOld[i] = -1;
		}
		//  arrOld ==> [-1, -1]
		
		const arrRndIndex = [];
	
   //	for(let i=0; i<3; i++) {
   //   또는 	
		for(let i=0; i<arrImg.length; i++) {
			const nRandom = Math.floor( Math.random()*(2-0+1) ) + 0;
			// nRandom 은 0 ~ 2 까지 중 하나이다.
			
			let bFlag = false;
			for(let j=0; j<arrOld.length; j++) {
				if(arrOld[j] == nRandom) { // arrOld[0] -1 == 2      arrOld[0] 2 == 2    arrOld[0]  2 == 1    arrOld[0]  2 == 0           
					bFlag = true;          // arrOld[1] -1 == 2                          arrOld[1] -1 == 1    arrOld[1]  1 == 0
					break;
				}
			}// end of for---------------------
			
			if(!bFlag) {
				arrOld[i] = nRandom;      // arrOld[0] = 2   ====> arrOld : [2, -1]
                                          // arrOld[1] = 1   ====> arrOld : [2,  1]
				                          // arrOld[2] = 0   ====> arrOld : [2,  1,  0] 
				
				arrRndIndex[i] = nRandom; // arrRndIndex[0] <== 2 , arrRndIndex[1] <== 1 ,  arrRndIndex[2] <== 0 
			}
			else {
				// nRandom 값이 조금전에 나왔던 nRandom 값과 동일한 경우
				i--;
				continue;  // continue; 는 반복문의 증감식으로 올라간다. 즉, for문의 i++ 에 올라간다. 
			}
			
		}// end of for---------------------------------
		
		// console.log("확인용 : " + arrRndIndex.join(",") );
		// 확인용 : 1,2,0
		// 확인용 : 0,2,1
		// 확인용 : 2,0,1
		
		for(let i=0; i<arrRndIndex.length; i++) { 
			let j = arrRndIndex[i];
			arrNewImg[i] = arrImg[j];
		}// end of for--------------------------
		
		// console.log("확인용 : " + arrNewImg.join(", "));
		// 확인용 : iyouLarge.jpg, parkbyLarge.jpg, kimthLarge.jpg
		// 확인용 : iyouLarge.jpg, kimthLarge.jpg, parkbyLarge.jpg
		// 확인용 : parkbyLarge.jpg, kimthLarge.jpg, iyouLarge.jpg
		
		////////////////////////////////////////////////////////
		
		$(document).on("click", "img.fish", (event) => {
		    
			const $target = $(event.target);
			
			// 몇번째 물고기를 클릭했는지 알아온다. 즉, 물고기 이미지의 index를 알아온다.
			const indexFish = $("img.fish").index($target);
		//  alert("확인용 indexFish : " + indexFish);
		  //  확인용 indexFish : 0
		  //  확인용 indexFish : 1
		  //  확인용 indexFish : 2
			
			let html = ``;
			for(let i=0; i<arrNewImg.length; i++) {
				html += `<img class='person' src='images/${arrNewImg[i]}' width='150' height='120' />`;
			}// end of for---------------
			
			$("div#div1").html(html).hide().fadeIn(5000);
						
			// 클릭한 곳에 테두리를 두도록 한다.
			$("div#div1 > img.person").eq(indexFish).css('border','solid 2px blue');
			// ---------------------------------------------- //
			
			// === 당첨 유무(김태희이라면 당첨)를 알아오도록 한다 === //
		//	alert("확인용 : " + arrNewImg[indexFish]);
			// 확인용 : iyouLarge.jpg
			// 확인용 : kimthLarge.jpg
			
			const result = (arrNewImg[indexFish] == "kimthLarge.jpg")?"당첨!!":"다음 기회에...";
			$("div#result").html(result).css({'color':'red', 'font-size':'16pt'}).hide().fadeIn(5000);

		/*	== 참고 == 
			$target.prop("src","images/");
			$target.prop("width","150");  // 150px 하면 안됨
			$target.prop("height","120"); // 120px 하면 안됨
		*/	
		}); // end of $(document).on("click", "img.fish", function(event){});-------------	
	
}); // end of $(document).ready(function() {})-------------

