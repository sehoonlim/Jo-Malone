$(function(){

  // 장점 직접추가
  $('#selfPlus').click(function(){
    $('.plusText').show()
    $('#addText2').val("")
    $('#addText1').prop("disabled", false)
  })
  $('.remove').click(function(){
    $('#addText1').val("")
    $('.plusText').hide()
  })
  $('.add').click(function(){
    $('#addText1').prop("disabled", true)
  })

  // 단점 직접추가
  $('#selfMinus').click(function(){
    $('.minusText').show()
    $('#addText2').prop("disabled", false)
  })
  $('.remove').click(function(){
    $('.minusText').hide()
  })
  $('.add').click(function(){
    $('#addText2').prop("disabled", true)
  })

  $(function() {
    // 마우스 오버 시에 fa-regular를 fa-solid로 변경
    $('.checkbox').hover(
      function() {
        $(this).find('.fa-regular').hide() // fa-regular 숨기기
        $(this).find('.fa-solid').show()   // fa-solid 보이기
      },
      function() {
        // 클릭된 상태가 아니면 다시 원래 상태로 되돌림
        if (!$(this).prev('input').is(':checked')) {
          $(this).find('.fa-solid').hide()
          $(this).find('.fa-regular').show()
        }
      }
    )
  
    // 체크박스를 클릭했을 때 해당 항목까지 모두 체크되도록 설정
    $('input[name="rating"]').click(function(){
      let selectedValue = $(this).val()
  
      $('input[name="rating"]').each(function(){
        if($(this).val() <= selectedValue){
          $(this).prop('checked', true)
          $(this).next('.checkbox').find('.fa-regular').hide()
          $(this).next('.checkbox').find('.fa-solid').show()
        } else {
          $(this).prop('checked', false)
          $(this).next('.checkbox').find('.fa-regular').show()
          $(this).next('.checkbox').find('.fa-solid').hide()
        }
      })
    })
  })

  // 파일업로드 버튼 클릭시 업로드창 뜨게
  $('#imgLoadBtn').click(function(){
    $('#imgLoad').click()
  })
  $('#videoLoadBtn').click(function(){
    $('#videoLoad').click()
  })



  // 유효성 검사
  $('form').submit(function(e){
    e.preventDefault()

    let pname = $("#pname").val()
    let headline = $('#headline').val()
    let content = $('#reviewCont').val()
    let address = $('#address').val()

    const pnamePattern = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/
    const titlePattern = /^[가-힣]+(\s[가-힣]+)*.{5,}$/
    const contentPattern = /^[가-힣\s]{10,50}$/
    const addressPattern = /^[가-힣]{2,}$/

    if($('input[name="rating"]:checked').length == 0){
      alert("리뷰 평점을 선택해 주세요.")
      return false
    }
    if(!pnamePattern.test(pname)){
      alert("닉네임을 다시 입력해 주세요.")
      return false
    }
    if(!titlePattern.test(headline)){
      alert("제목을 다시 입력해 주세요.")
      $('#title').val("")
      return false
    }
    if(!contentPattern.test(content)){
      alert("내용을 다시 입력해 주세요.")
      return false
    }
    if(!addressPattern.test(address)){
      alert("거주지역을 입력해 주세요.")
      $('#address').val("")
      return false
    }

    this.submit()
  })
})