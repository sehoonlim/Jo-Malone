$(function(){

  // 비밀번호 보기 안보기
  $('.crossed').click(function(){
    $('.crossed').hide()
    $('.notCrossed').show()
    $('#pw').attr("type","text")
  })
  $('.notCrossed').click(function(){
    $('.crossed').show()
    $('.notCrossed').hide()
    $('#pw').attr("type","password")
  })

  // 성별 선택 다운/업
  $('.down').click(function(){
    $('.down').hide()
    $('.options').show()
    $('.up').show()
  })
  $('.up').click(function(){
    $('.up').hide()
    $('.options').hide()
    $('.down').show()
  })

  // option외 클릭
  $(document).click(function(e){
    if (!$(e.target).closest('.down, .up, .options').length) {
      $('.up').hide()
      $('.options').hide()
      $('.down').show()
    }
  })

  // 옵션클릭
  $('.option').click(function() {
    var selectedOption = $(this).text()
    $('.selected').text(selectedOption)
    $('.up').hide()
    $('.options').hide()
    $('.down').show()
  })

  // form 유효성 검사
  $('form').submit(function(e){
    e.preventDefault()

    let name = $('#name').val()
    let email = $('#email').val()
    let password = $('#pw').val()
    let phone = $('#phone').val()
    let year = $('#year').val().trim()
    let month = $('#month').val().trim()
    let date = $('#date').val().trim()

    const namePattern = /^[가-힣]{2,4}$/
    const emailPattern = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-z]{2,3}$/
    const phoneRule = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/
    const phoneReg = /^\d{3}-\d{3,4}-\d{4}$/
    const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-+=\[\]{};:'",.<>/?`~\\])(?!.*\s).{8,}$/
    const yearRule = /^(19|20)\d{2}$/
    const monthRule = /^(0[1-9]|1[012])$/
    const dateRule = /^(0[1-9]|[12][0-9]|3[01])$/


    // 이름
    if(!namePattern.test(name)){
      alert("이름을 다시 입력해 주세요.")
      $('#name').val("")
      return false
    }
    // 이메일 주소가 입력되지 않은 경우
    if(!emailPattern.test(email)){
      alert("이메일을 다시 입력해 주세요.")
      $('#email').val("")
      return false
    }
    // 휴대폰 번호
    if (!phoneRule.test(phone) && !phoneReg.test(phone)){
      alert('알맞은 전화번호를 입력해 주세요')
      $('#phone').val("")
      return false
    } else if(!phone){
      alert('전화번호를 입력해 주세요.')
      $('#phone').val("")
      return false
    }
    // 비밀번호
    if(!passwordRule.test(password)){
      alert("비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.")
      $('#password').val("")
      return false
    }
    // 생일
    if(year != '' && !yearRule.test(year)){
      alert("잘못된 연도을 입력하셨습니다.")
      $('#year').val("")
      return false
    }
    if(month != '' && !monthRule.test(month)){
      alert("잘못된 월을 입력하셨습니다.")
      $('#month').val("")
      return false
    }
    if(date != '' && !dateRule.test(date)){
      alert("알맞은 일을 입력해주세요.")
      $('#date').val("")
      return false
    }
    // 필수 동의 사항
    if(!$('#required').is(':checked')){
      alert("이용 약관에 동의하셔야 회원가입이 가능합니다.")
      $('#required').prop('checked', true)
      return false
    }

    alert("회원가입되었습니다.")
    this.submit()
  })
})