function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value.trim();
    const orderNum = document.getElementById("order-number").value;
    //const phoneNumber = document.getElementById("phone-number").value.trim();
    const inquiryType = document.getElementById("inquiry-type").value;
    const checkbox = document.getElementById("checkbox1").checked;


    
    // 문의 유형 선택 검사
    if (!inquiryType) {
        alert("먼저 문의 유형을 선택해 주세요.");
        return false;
    }

    // 정규식 패턴
    // const namePattern = /^[가-힣\s]{2,4}$/; // 한글 2~4자
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/; // 이메일 유효성 검사
   // const phonePattern = /^010\d{7,8}$/; // 휴대전화 형식: 010으로 시작하고 7자리 또는 8자리 숫자
    const orderNumPattern = /^\d{5,10}$/; // 5자리~10자리의 숫자
    const namePattern = /^[가-힣]{2,4}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
    //const phonePattern = /^010\d{7,8}$/;
    // const phonePattern = /^[^\s]010\d{8}[^\s]$/;

    
// 주문번호 검사 (선택 사항일 경우)
if (orderNum){
    if(!orderNumPattern.test(orderNum))  {
    alert("주문번호는 5자리 이상 10자리 이하의 숫자여야 합니다.");
    return false;
    }
}


    // 이름 검사
    if (!namePattern.test(name)) {
        alert("이름은 2~4글자의 한글만 가능합니다.");
        return false;
    }

    // 이메일 검사
    if (!emailPattern.test(email)) {
        alert("올바른 이메일 형식이 아닙니다.");
        return false;
    }

    
    // // 전화번호 검사
    // if (!phonePattern.test(phoneNumber)) {
    //     alert("휴대전화 번호는 010 **** **** 형식이어야 합니다.");
    //     return false;
    // }

    
//유효성검사 핸드폰 버전
if($("#phone2").val().trim()==""){   // 휴대전화 번호 공백 불가
          alert("휴대전화 번호를 입력해주시기 바랍니다.")
          $("#phone2").val("")
          return false
     }  

if(!$("#phone2").val().match(/^\d{4}$/) // 정규식 : 휴대폰번호 앞자리는 숫자 4개로 입력
      ){
          alert("휴대전화 번호 앞자리는 숫자 4개만 입력가능합니다.")
          return false
     }

if($("#phone3").val().trim()==""){   // 휴대전화 번호 공백 불가
      alert("휴대전화 번호를 입력해주시기 바랍니다.")
      $("#phone3").val("")
      return false
      }

      if(!$("#phone3").val().match(/^\d{4}$/) // 정규식 : 휴대폰번호 앞자리는 숫자 4개로 입력
      ){
          alert("휴대전화 번호 뒷자리는 숫자 4개만 입력가능합니다.")
          return false
     }


    // 체크박스 확인
    if (!checkbox) {
        alert("개인정보 수집 및 이용에 동의해 주세요.");
        return false;
    }

    window.location.href = "02_csEmail.html";
  return true;
}
