$(function () {
    $('.has-child').on('click', function () {
        $('.submenu', this).slideToggle();
        $(this).toggleClass('active');
    })
});

$(function () {
    $('.menu-trigger').on('click', function () {
        $('.nav').slideToggle(alertFunc);
        $(this).toggleClass('active');
    })
});

// ハンバーガーメニュー開閉で文字変化（メニュー⇔とじる）
function alertFunc() {
    if ($(this).css('display') == 'block') {
        $(".text-menu").text("とじる");
    } else {
        $(".text-menu").text("めにゅー");
    }
};

// ページ下部top戻るボタンのアニメーション
$('.f-more').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

// ヘッダーのロゴをタップするとtopに戻る
$('.header h1 img').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

// PC表示のみ背景にスライダーを表示させる
if (window.matchMedia("(min-width: 600px)").matches) {
    $(function () {
        $('.background-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
        });
    });
}

// スクロールすると表示される
$(function () {
    $(window).scroll(function () {
        $('.h-event,.event,.limited,.h-news,.news,.h-animal,.animal,.more,.h-park,.park,.sns').each(function () {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

// 読み込む度にどうぶつをランダム表示
$(function () {
    const randomContent = [];
    $('.m-animal').each(function () {
        randomContent.push($(this).html());
    });

    randomContent.sort(function () {
        return Math.random() - Math.random();
    });

    $('.m-animal').empty();
    i = 0;
    $('.m-animal').each(function () {
        $(this).append(randomContent[i]);
        i++;
    });
});

// 読み込む度にゆうぐをランダム表示
$(function () {
    const randomContent = [];
    $('.m-park').each(function () {
        randomContent.push($(this).html());
    });

    randomContent.sort(function () {
        return Math.random() - Math.random();
    });

    $('.m-park').empty();
    i = 0;
    $('.m-park').each(function () {
        $(this).append(randomContent[i]);
        i++;
    });
});



