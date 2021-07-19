$(document).ready(function(){

    let time = 10 * 60 * 60;
    let timeOrigin = time;
    let hour = parseInt(timeOrigin / 60);

    timeOrigin = timeOrigin % 3600;
    let min = parseInt(timeOrigin / 60);
    let second = timeOrigin % 60;


    
    let timer = setInterval(function(){
        time--;
        let timeOrigin = time;
        let hour = parseInt(timeOrigin / 3600);
        timeOrigin = timeOrigin % 3600;
        let min = parseInt(timeOrigin / 60);
        let second = timeOrigin % 60;
        
        /*타이머 값 대입*/
        $("main .cont_box .deadline .flex_box .box p").empty();
        $("main .cont_box .deadline .flex_box .box p").text(hour);
        $("main .cont_box .deadline .flex_box .box:nth-child(3) p").empty();
        $("main .cont_box .deadline .flex_box .box:nth-child(3) p").text(min);
        $("main .cont_box .deadline .flex_box .box:last-child() p").text(second);

        if(time == 0){
            $("main .cont_box .deadline .flex_box").hide();
            $("main .cont_box .deadline p:nth-child(3)").text("점검종료");
            $("main .cont_box .deadline p:nth-child(3)").css("font-size", "28px")
            $("main .cont_box .deadline p:nth-child(3)").css("font-bold", "700")
            clearInterval(timer);
        }
        if(hour < 10){
            $("main .cont_box .deadline .flex_box .box:nth-child(1) p").text("0" + hour);
        }
        if(min < 10){
            $("main .cont_box .deadline .flex_box .box:nth-child(3) p").text("0" + min);
        }
        if(second < 10){
            $("main .cont_box .deadline .flex_box .box:last-child() p").text("0" + second);
        }
    }, 1000);

    /* 모바일 스크롤기능 제거 */
    const width = window.innerWidth;
    console.log(width);
    const height = window.innerHeight;
    
    function scrollDisable(){
        if(height >= 549 && width <= 768){
            $('body').addClass('scrollDisable').on('scroll touchmove', function(e){
                e.preventDefault();
            });
        }        
    }
    scrollDisable();
    


});