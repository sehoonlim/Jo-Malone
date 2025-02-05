$(function(){
  // 신고 모달
  $('.delete').click(function(){
    $('#deleteModal').show()
    $('.modal').show()
  })
  $('.closeModalBtn').click(function(){
    $('#deleteModal').hide()
  })

  // 신고 모달 유효성
  $('.commentForm').submit(function(e){
    e.preventDefault()

    let email = $('#email').val()
    let comment = $('#comment').val()

    const emailPattern = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-z]{2,3}$/
    const commentPattern = /^[가-힣0-9\s]{5,30}$/

    if(!emailPattern.test(email)){
      alert("이메일을 다시 입력해 주세요.")
      $('#email').val("")
      return false
    }
    if(!commentPattern.test(comment)){
      alert("내용을 다시 입력해 주세요.")
      $('#email').val("")
      return false
    }

    $('.deleteEnd').click(function(){
      $('#deleteModal').hide()
      alert("신고되었습니다.")
    })
    
  })

  // 더보기 클릭 시
  $('.more').click(function(){
    $(this).closest('.reviewCnt').find(".reviewList").show()
    $(this).hide()
    $(this).closest('.reviewCnt').find(".hide").show()
  })

  // 숨기기 버튼 클릭 시
  $('.hide').click(function(){
    $(this).closest('.reviewCnt').find(".reviewList").hide()
    $(this).hide()
    $(this).closest('.reviewCnt').find(".more").show()
  })

  $('.content #yes').click(function(){
    let confirmAction = confirm("추천하시겠습니까?")
    if(confirmAction){
      let currentValue = parseInt($(this).text()) // 정수화
      $(this).text(currentValue + 1)
    } else{}
  })
  $('.content #no').click(function(){
    let confirmAction = confirm("비추천하시겠습니까?")
    if(confirmAction){
      let currentValue = parseInt($(this).text())
      $(this).text(currentValue + 1)
    } else{}
  })
})