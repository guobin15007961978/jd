var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项 垂直(vertical)
    loop: true, // 循环模式选项
    // 自动轮播
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

var header = document.querySelector('#header');
    var slide = document.querySelector('#slide');
    window.addEventListener('scroll', changeAlpha);

    function changeAlpha() {
        var getScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var getHeight = slide.offsetHeight;


        var opacity = getScroll / getHeight;

        if (opacity < 1) {
            header.style.background = "rgba(255,0,0, " + opacity + ")";
        } else {
            header.style.background = "rgba(255,0,0, 1)";
        }
    }

    // 定义指定时间
    var futureTitme = new Date(2018, 10, 14, 16, 00, 00);
    // 获取现在时间
    var nowTime = new Date();
    // 获取相差秒数
    var time = (futureTitme - nowTime) / 1000;

    // 获取时间所在span
    var timeSpan = document.querySelectorAll('.time span');

    var timeID = setInterval(() => {
        time--;

        if (time == 0) {
            clearInterval(timeID);
        }
        // 获取相差小时数
        var hour = Math.floor(time / 3600);
        // 获取相差分钟数
        var minute = Math.floor(time / 60 % 60);
        // 获取相差秒数
        var second = Math.floor(time % 60);

        timeSpan[0].innerHTML = Math.floor(hour / 10);
        timeSpan[1].innerHTML = Math.floor(hour % 10);
        timeSpan[3].innerHTML = Math.floor(minute / 10);
        timeSpan[4].innerHTML = Math.floor(minute % 10);
        timeSpan[6].innerHTML = Math.floor(second / 10);
        timeSpan[7].innerHTML = Math.floor(second % 10);

    }, 1000);

    
    (function flexible(window, document) {
        var docEl = document.documentElement
        var dpr = window.devicePixelRatio || 1


        // adjust body font size
        function setBodyFontSize() {
            if (document.body) {
                document.body.style.fontSize = (12 * dpr) + 'px'
            } else {
                document.addEventListener('DOMContentLoaded', setBodyFontSize)
            }
        }
        setBodyFontSize();


        // set 1rem = viewWidth / 10
        function setRemUnit() {
            var rem = docEl.clientWidth / 10
            docEl.style.fontSize = rem + 'px'
        }


        setRemUnit()


        // reset rem unit on page resize
        window.addEventListener('resize', setRemUnit)
        window.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                setRemUnit()
            }
        })


        // detect 0.5px supports
        if (dpr >= 2) {
            var fakeBody = document.createElement('body')
            var testElement = document.createElement('div')
            testElement.style.border = '.5px solid transparent'
            fakeBody.appendChild(testElement)
            docEl.appendChild(fakeBody)
            if (testElement.offsetHeight === 1) {
                docEl.classList.add('hairlines')
            }
            docEl.removeChild(fakeBody)
        }
    }(window, document))