$(function(){
  let events = $('.event')
  let currentIndex = 0

  function topShowEvent(index){
    events.fadeOut(500).removeClass('active') // 이벤트 초기화

    if(index < events.length){
      events.eq(index).fadeIn(500).addClass('active')
    }

    topSetTime = setTimeout(function(){
      currentIndex = (index + 1)%events.length
        topShowEvent(currentIndex)
    }, 3000)
  }
  topShowEvent(currentIndex) // 이벤트 호출
  
  // 닫기버튼 이벤트
  $('.close').on('click',function(){
    $('.events').fadeOut(500)
    clearTimeout(topSetTime)
  })

  // 검색창에 검색했을때
$('#search input[type="text"]').on('input', function(){
  let word = $(this).val().trim()

  if(word == ""){
    $('.defContent').css("display", "block")
    $('.activeContent').css("display", "none")
  }
})

// 엔터 키가 눌렸을 때 처리
$('#search input[type="text"]').on('keypress', function(e){
  if(e.which == 13){
    e.preventDefault()

    let word = $(this).val().trim()

    let searchPattern = /^[가-힣a-zA-Z\s]+$/

    if(!searchPattern.test(word)){
      alert("검색어를 다시 입력해 주세요.")
      return false
    } else{
      // 검색어가 있을 때 activeContent 보여주기
      $('.defContent').css("display", "none")
      $('.activeContent').css("display", "block")
    }
  }
})

  // 검색버튼 이벤트
  $('.searchIcon').on('click', function(){ //search 버튼 클릭시
    $('#search').addClass("active")
    $('.searchBg').show()
  })

  $('.searchClose').on('click', function(e){ //닫기 버튼 클릭시
    e.stopPropagation() // 버블링 방지
    $('#search').removeClass("active")
    $('.searchBg').hide()
  })


})