let tabContent = document.getElementsByClassName('webzine-box');
let tablinks = document.getElementsByClassName('tablinks');

function hideAllTabContent() {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
}

function showTabContent(tabName) {
    let selectedTabContent = document.getElementsByClassName(tabName);
    for (let i = 0; i < selectedTabContent.length; i++) {
        selectedTabContent[i].style.display = "block";
    }
}

function modifyGridLayout(tabName) {
    let webzineInner = document.getElementsByClassName('webzine-inner')[0];
    webzineInner.classList.remove('column-tab', 'news-tab');
    webzineInner.classList.add(`${tabName}-tab`);
}

function deactivateAllTabButtons() {
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('tab-active');
    }
}

function activateTabButton(tabName) {
    document.querySelector(`.tablinks[onclick="switchTab('${tabName}')"]`).classList.add('tab-active');
}

function switchTab(tabName) {
    hideAllTabContent();
    showTabContent(tabName);
    modifyGridLayout(tabName);
    deactivateAllTabButtons();
    activateTabButton(tabName);
}

window.onload = function() {
    if(window.innerWidth <= 1280) {
        document.getElementById("default-tab").click();
    }
}

window.onresize = function() {
    if(window.innerWidth > 1280) {
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "block";
        }
  
        let webzineInner = document.getElementsByClassName('webzine-inner')[0];
        webzineInner.classList.remove('column-tab', 'news-tab');
    } else {
        document.getElementById("default-tab").click();
    }
}
