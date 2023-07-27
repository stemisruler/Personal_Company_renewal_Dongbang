document.addEventListener('DOMContentLoaded', function() {
    // service-box 요소들을 가져옵니다.
    const serviceBoxes = document.querySelectorAll('.service-box');

    //1. service 박스 클릭됐을 때
    serviceBoxes.forEach(function(box) {
        // 각각의 service-box 요소에 'click' 이벤트 리스너를 추가합니다.
        box.addEventListener('click', function() {
            // 현재 클릭된 요소가 아닌 다른 요소들에서 'selected' 클래스를 제거합니다.
            serviceBoxes.forEach(function(otherBox) {
                if (otherBox !== box) {
                    otherBox.classList.remove('selected');
                }
            });

            // 현재 클릭된 요소에 'selected' 클래스를 추가합니다.
            box.classList.add('selected');
        });
    });

    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileList = document.getElementById('fileList');

    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        fileList.innerHTML = '';
        if (fileInput.files.length > 0) {
            const files = Array.from(fileInput.files);
            files.forEach((file, index) => {
                fileList.innerHTML += `<p>File ${index+1}: ${file.name}</p>`;
            });
        } else {
            uploadButton.textContent = '등록하기';
        }
    });
});