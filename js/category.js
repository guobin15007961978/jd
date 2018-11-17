window.addEventListener('load', function() {
    var mySwiperLeft = new Swiper('.category-left .swiper-container', {
        direction: 'vertical', // 垂直切换选项 垂直(vertical)
    
        slidesPerView: 'auto', //支持多张图
    
        freeMode: true, //支持回弹
    
    });
    var mySwiperRight = new Swiper('.category-right .swiper-container', {
        direction: 'vertical', // 垂直切换选项 垂直(vertical)
    
        slidesPerView: 'auto', //支持多张图
    
        freeMode: true, //支持回弹
    
        scrollbar: { // 支持滚动条
    
            el: '.swiper-scrollbar',
    
        },
        mousewheel: true, //支持鼠标滚轮
    
    });

    // 获取所有li元素
    var lis = document.querySelectorAll('.category-left li');
    // 获取父元素
    var wrapper = document.querySelector('.swiper-wrapper');
    // 获取li元素高度
    var liHeight = document.querySelector('.category-left li').offsetHeight;
    // 获取最小位移值
    var minY = document.querySelector('.category-left').offsetHeight - document.querySelector('.category-left ul').offsetHeight;
    for(let i=0; i<lis.length; i++) {
        // 给li加上索引
        lis[i].index = i;

        // 给li元素添加点击事件
        lis[i].addEventListener('click', function() {

            // 获取位移值
            var translateY = -this.index * liHeight;

            // 判断 是否达到最小位移
            if(translateY < minY) {
                translateY = minY;
            }

            // 设置位移
            wrapper.style.transform = "translate3d(0px, " + translateY + "px, 0px)";
            
            // 给位移添加动画
            wrapper.style.transition = "all .3s";
            
            // 移除所有li的active
            for(var i=0; i<lis.length; i++) {
                lis[i].classList.remove('active');
            }
            
            // 给点击li添加active
            this.classList.add('active');
        });
    }

    
});
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