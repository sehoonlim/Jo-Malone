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

  $('form').submit(function(e){
    e.preventDefault()

    const email = $('#email').val()
    const password = $('#pw').val().trim()

    const emailPattern = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-z]{2,3}$/


    // 이메일 주소가 입력되지 않은 경우
    if(!emailPattern.test(email)){
      alert("이메일을 다시 입력해 주세요.")
      $('#email').val("")
      return false
    }

    if(!password || password.length < 8){
      alert('비밀번호를 다시 입력해 주세요.')
      $('#pw').val("")
      return false
    }

    this.submit()
  })
})