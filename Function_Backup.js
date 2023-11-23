// 초기값 설정
let countValues = [0,0,0,0,0];
let totalClicks = 0;

// HTML 요소를 조작하여 카운트 값을 업데이트하는 함수
function updateCount(index) {
    document.getElementById(`count${index}`).innerText = countValues[index - 1];
}

// HTML 요소를 조작하여 총 클릭 수를 업데이트하는 함수
function updateTotalClicks() {
    document.getElementById("totalClicks").innerText = totalClicks;
}

// HTML 요소를 조작하여 확률을 업데이트하는 함수
function updatePercent() {
    for (let i = 1; i <= 4; i++) {
      const percent = totalClicks > 0 ? (countValues[i - 1] / totalClicks) * 100 : 0;
              document.getElementById(`percent${i}`).innerText = percent.toFixed(2) + "%";
    }
}

// 증가 또는 감소 버튼 클릭 시 호출되는 함수
function updateCounter(index, change) {
    // if:변수 값이 음수가 되지 않게 하기
    if (countValues[index - 1] + change >= 0) {
        countValues[index - 1] += change;
        totalClicks += change;
        updateCount(index);
        updateTotalClicks();
        updatePercent();
  }
}

// 초기화 버튼 클릭 시 호출되는 함수
function reset() {
    countValues = [0, 0, 0, 0, 0];
    totalClicks = 0;
    for (let i = 1; i <= 4; i++) {
        updateCount(i); // 각 카운트를 초기화
    }
    updateTotalClicks();
    updatePercent();
}

// 페이지 로드 시 초기 카운트 값 설정
for (let i = 1; i <= 4; i++) {
    updateCount(i);
}
