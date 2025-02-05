$(function(){
  $('form').submit(function(e){
    e.preventDefault()

    const email = $('#email').val()

    const emailPattern = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-z]{2,3}$/

    // 이메일 주소가 입력되지 않은 경우
    if(!emailPattern.test(email)){
      alert("이메일을 다시 입력해 주세요.")
      $('#email').val("")
      return false
    }

    alert("전송되었습니다.")
    this.submit()
  })
})