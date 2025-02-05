$(document).ready(function(){
  //실행될 코드

  // 모든 아코디언 아이템을 선택
  const accordionItems = document.querySelectorAll('.accordion-item');

  // 각 아코디언 아이템에 클릭 이벤트 추가
  accordionItems.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
      // 클릭한 아이템의 활성화 상태를 토글
      item.classList.toggle('active');

      // 다른 아코디언 아이템이 열려있다면 닫기
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });

});