$(function(){
  $('main input[type="search"]').on('keypress', function(e){
    if(e.which == 13){ // enter가 13
      e.preventDefault()
      let word = $(this).val()

      const wordPattern = /^[가-힣]+(\s[가-힣]+)*$/

      if(!wordPattern.test(word)){
        alert('정확한 위치를 입력해 주세요.')
      } else{
        $('.mapImg').css("display","block")
      }
    }
  })

  $('main input[type="search"]').on('input', function(){
    let word = $(this).val().trim()
  
    if(word == ""){
      $('.mapImg').css("display","none")
    }
  })

  $('.place').on('click', function(){
    $('main input[type="search"]').val("서울시 강남구")
  })

  $('.searchBtn').on('click', function(){
    $('.mapImg').css("display","block")
  })
})