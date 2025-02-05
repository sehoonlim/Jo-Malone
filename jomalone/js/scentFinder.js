$(function(){
  let modals = $('.modalItem')
  let currentIndex = 0

  // 모달을 열기 위한 함수
  function openModal(){
    $('.modalBg').css("display","block")
    $('#modal').css("display","block")
    modals.eq(currentIndex).show()
  }

  // 모달을 닫기 위한 함수
  function closeModal(){
    $('.modalBg').hide()
    $('#modal').hide()
    modals.hide()
    currentIndex = 0
  }

  // 다음 모달로 넘어가는 함수
  function nextModalItem(){
    modals.eq(currentIndex).hide()

    currentIndex = (currentIndex + 1) % modals.length

    modals.eq(currentIndex).show()

  }
  function prevModalItem(){
    modals.eq(currentIndex).hide()

    currentIndex = (currentIndex - 1 + modals.length) % modals.length

    modals.eq(currentIndex).show()

  }

  // 첫 모달 시작
  $('.nextBtn').click(function(){
    nextModalItem()
  })

  // 이전버튼 눌렀을 때
  $('.prevIcon').click(function(){
    prevModalItem()
  })

  // 닫기버튼 눌렀을 때
  $('.closeIcon').click(function() {
    closeModal()
  })

  // 다시하기 버튼 눌렀을 때
  $('#return').click(function(){
    modals.hide()
    currentIndex = 0
    modals.eq(currentIndex).show()
  })

  // 모달을 처음 열 때 호출
  $('.startBtn').click(openModal)
  
})