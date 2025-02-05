$(function(){
  // header menu

  // 메뉴보이게
  $('.hamIcon').click(function(e){
    e.stopPropagation()
    $('#hamMenu').show()
    $('.hamBg').show()
  })


  // 메뉴말고 다른곳 클릭시
  $(document).click(function(e){
    if (!$(e.target).closest('#hamMenu, .hamburgerIcon').length){
        $('#hamMenu').hide()
        $('.hamBg').hide()
    }
  })

  // 서브메뉴들 동작
  $('.hMenu > li > a').click(function(e){
      let submenu = $(this).next('.hSubmenu')

      if(submenu.length > 0){
        e.preventDefault()
        e.stopPropagation()

        $('.hSubmenu').not(submenu).slideUp()

        submenu.slideToggle()
      }
  })

  $('.hSubmenu > li > a').click(function(e){
    var subitem = $(this).next('.hSubitem')

    if (subitem.length > 0) {
      e.preventDefault()
      e.stopPropagation()
      $('.hSubitem').not(subitem).slideUp()

      subitem.slideToggle()
    }
  })



  // footer
  $('.footerSite .down').click(function(){
    $(this).hide()
    $(this).siblings('.up').show()
    $(this).closest('.tt').siblings('a').css("display","block")
  })
  $('.footerSite .up').click(function(){
    $(this).hide()
    $(this).siblings('.down').show()
    $(this).closest('.tt').siblings('a').css("display","none")
  })
})