

/* 주요 사업 소개 */
/* 주요 사업 마우스 올리면 - p태그 보이기 */

const areas = document.querySelectorAll(".biz-area");

for (const area of areas) {
  area.addEventListener("mouseover", (event) => {
    const targetArea = event.target.closest('.biz-area');
    const image = targetArea.getAttribute("data-image");
    changeBackground(image);

    const pElement = targetArea.querySelector('p');
    pElement.classList.add('on');
  });

  area.addEventListener("mouseout", () => {
    const pElement = area.querySelector('p');
    pElement.classList.remove('on');
  });
}

function changeBackground(image) {
  const section01 = document.querySelector(".primary-business");
  section01.style.background = `url('${image}') no-repeat center 60% / cover`;
}

/* Webzine 섹션 */

// 모든 웹진 박스 요소 선택
const webzineBoxes = document.querySelectorAll('.webzine-box');

// 각 웹진 박스에 대해 이벤트 리스너 추가
webzineBoxes.forEach(function(box) {

  box.addEventListener('mouseover', function() {
    this.style.boxShadow = "0 0 5px 1px grey";
  });

  box.addEventListener('mouseout', function() {
    this.style.boxShadow = "none";
  });

  // 각 박스 클릭했을 때, data-url을 받아서 이동할 수 있게 하기.
  box.addEventListener('click', function() {
    const url = this.dataset.url;
    window.location.href = url;
  });
});
