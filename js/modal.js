$(document).ready(function(){
    let modal = $('#myModal');
    let modalBackground = $('#modal-background');

    function showModal(){
        modalBackground.css('display', 'block');
        if ($(window).width() <= 840) {
            modal.animate({left: '30%'}, 500); /* 화면의 30% 위치까지 애니메이션하며 나옴 */
        } else {
            modal.css('display', 'block');
        }
    }

    function hideModal(){
        if ($(window).width() <= 840) {
            modal.animate({left: '100%'}, 500); /* 왼쪽으로 100%만큼 이동하여 화면 밖으로 나가는 애니메이션 */
        } else {
            modal.css('display', 'none');
        }
        modalBackground.css('display', 'none');
    }

    $('.sitemap').click(function(){
        showModal();
    });

    $('#modal-quit').click(function(){
        hideModal();
    });

    // 창 크기가 변경될 때 이벤트 추가
    $(window).resize(function() {
        if ($(window).width() > 840) {
            modal.css({
                "position": "fixed",
                "margin-top": "20px",
                "padding": "20px",
                "background": "#eee",
                "text-align": "left",
                "top": "50%",
                "left": "50%",
                "transform": "translate(-50%, -50%)",
                "border": "1px solid #CCCCCC",
                "border-radius": "1rem",
                "box-shadow": "0px 0px 10px rgba(0, 0, 0, 0.349)",
                "z-index": "111",
                "width": "800px",
                "height": "340px",
                "display": "none"
        });
        }
        else {
            modal.css({
                'top': '0',
                'left': '100%',
                'transform': 'none',
                'width': '70%', 
                'height': '100%', 
                'display': 'block',
            });
        }
    });
});
