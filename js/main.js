/*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        direction: 'vertical',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
    },

    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});

/*音乐*/
var music=document.getElementById("music");
var music_bg=document.querySelectorAll(".music_bg")[0];
var music_tu=document.querySelectorAll(".music_tu")[0];
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag==1){
        music_bg.style.display="none";
        music_tu.style.animation="none";
        audio.pause();
        flag=0;
    }else {
        music_bg.style.display="block";
        music_tu.style.animation=" run 2s 0s linear infinite";
        audio.play();
        flag=1;
    }
};
