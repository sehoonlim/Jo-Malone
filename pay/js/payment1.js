$(function(){ // * 회원 정보 유효성 검사
  $(".payButton").click(function(e){
          e.preventDefault()   // 자신의 기본 기능 중지--> 여기서 submit중지
          e.stopPropagation()  // 부모객체에게 작업 중지

          if($("#pname").val().trim()==""){   // 이름 공백 불가
              alert("이름을 입력해주시기 바랍니다.")
              $("#pname").val("")
              return false
          }

          if(!$("#pname").val().match(/^[가-힣\s]{2,4}$/i) // 정규식 : 이름인 2글자~4글자의 한글로 입력, 띄어쓰기 불가
           ){
              alert("이름은 2글자 이상의 한글로 입력해주시기 바랍니다.(띄어쓰기 제외)")
              return false
          }

         if($("#postC").val().trim()==""){    // 우편번호 공백 불가
              alert("우편번호를 입력해주시기 바랍니다.")
              $("#postC").val("")
              return false
         }

         if(!$("#postC").val().match(/^\d{5}$/) // 정규식 : 우편번호는 숫자 5개로 입력
          ){
              alert("우편번호는 숫자 5개를 입력해주시기 바랍니다.")
              return false
         }

         if($("#addr").val().trim()==""){   // 주소 공백 불가
              alert("주소를 입력해주시기 바랍니다.")
              $("#addr").val("")
              return false
         }

         if(!$("#blank").val().match(/^(?=.*[가-힣0-9]{3,})[가-힣0-9][가-힣0-9 ]{4,}$/) // 정규식 : 상세주소는 한글, 띄어쓰기 포함, 숫자 5자 이상
          ){
              alert("상세주소를 정확하게 입력해주시기 바랍니다. (첫 글자는 띄어쓰기가 불가, 한글 또는 숫자가 최소 3글자 이상)")
              return false
         }

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

     //     집전화
     /*    
     let phone = $('#telInput').val()
     const phoneReg = /^\d{3}-\d{3,4}-\d{4}$/
     if (!phoneRule.test(phone) && !phoneReg.test(phone)){
           alert('알맞은 전화번호를 입력해 주세요')
           $('#telInput').val("")
           return false
         } else if(!phone){
           alert('전화번호를 입력해 주세요.')
           $('#telInput').val("")
           return false
         }
           */

         window.location.href = "payment2.html";     // 유효성 검사 통과시 payment2로 이동
        })
})

