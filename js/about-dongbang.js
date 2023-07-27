window.addEventListener('scroll', () => {
    const aboutDongbang = document.querySelector('.about-dongbang');
    const rect = aboutDongbang.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if(rect.top <= (windowHeight * 1 / 4) && rect.bottom >= (windowHeight * 1 / 4)) {
        const nums = document.querySelectorAll('.num');

        nums.forEach(num => {
            const maxNum = Number(num.getAttribute('data-num'));
            let currentNum = Number(num.innerText);

            if(currentNum < maxNum) {
                // 전체 애니메이션 시간을 5000ms로 설정하고, 숫자 하나당 걸리는 시간을 계산합니다.
                const intervalTime = 5000 / maxNum;

                const intervalId = setInterval(() => {
                    currentNum++;
                    num.innerText = currentNum;

                    if(currentNum === maxNum) {
                        clearInterval(intervalId);
                    }
                }, intervalTime);
            }
        });
    }
});
