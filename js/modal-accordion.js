$(document).ready(function() {
    let menuItems = $('.modal-menu > li');

    // 페이지 로드시 모든 서브 메뉴를 숨깁니다.
    if ($(window).width() <= 840) {
        $('.modal-sub').hide(0);
    }

    menuItems.each(function() {
        let item = $(this);
        let subMenu = item.find('.modal-sub');

        item.click(function() {
            if ($(window).width() <= 840) {
                if (item.hasClass('active')) {
                    subMenu.slideUp(200);
                    item.removeClass('active');
                } else {
                    // 모든 메뉴 아이템을 개별적으로 검사합니다.
                    menuItems.each(function() {
                        if ($(this).hasClass('active')) {
                            $(this).find('.modal-sub').slideUp(200);
                            $(this).removeClass('active');
                        }
                    });
                    subMenu.slideDown(200);
                    item.addClass('active');
                }
            }
        });
    });

    $(window).resize(function() {
        if ($(window).width() > 840) {
            menuItems.removeClass('active');
            $('.modal-sub').show();
        } else {
            // 창 크기가 840px 이하로 변경되면 모든 서브 메뉴를 다시 숨깁니다.
            $('.modal-sub').hide(0);
        }
    });
});
