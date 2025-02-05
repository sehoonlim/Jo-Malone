$(function(){ // * 유효성 검사
  $(".payButton").click(function(e){
          e.preventDefault()
          e.stopPropagation()

        let payChk = false
        
        for(let pm of  $(".pay")){
            if($(pm).is(":checked")){
                  payChk = true
              }
        }

        if(!payChk){    // 결제하기 방법 미 선택시 메시지 팝업 및 넘어가지 못함
              alert("결제 방법을 선택하여 주시기 바랍니다.")
              $(".pay").eq(0).attr("checked", true)   // 기본체크 신용카드 체크
              return false
        }

        window.location.href = "payment3.html";
  })
})