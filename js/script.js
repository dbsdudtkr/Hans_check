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

    // ex
    // var countDown = document.getElementById('countdown');
    // var startBtn = document.getElementById('start');
    // // Link the start of the timer with a button click
    // startBtn.addEventListener("click", function () {
    //     upgradeTime = Math.floor(Date.now()/1000) + 50;  // set count down to 50 secs from now
    //     localStorage.setItem('upgradeTime', upgradeTime); // ...and save it.
    //     timer(); // Call timer function immediately
    // });
    // var upgradeTime = +localStorage.getItem('upgradeTime');
    // if (upgradeTime) timer(); // continue the current count down
    // function timer() {
    //     startBtn.style.display = "none"; // hide start-button
    //     // Calculate the actual number of seconds remaining from now:
    //     var seconds     = upgradeTime - Math.floor(Date.now()/1000);
    //     var days        = Math.floor(seconds/24/60/60);
    //     var hoursLeft   = seconds - days*86400;
    //     var hours       = Math.floor(hoursLeft/3600);
    //     var minutesLeft = hoursLeft - hours*3600;
    //     var minutes     = Math.floor(minutesLeft/60);
    //     var remainingSeconds = seconds % 60;
    //     function pad(n) {
    //         return (n < 10 ? "0" + n : n);
    //     }
    //     countDown.textContent = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
    //     if (seconds <= 0) { // Deal with negative as well...
    //         localStorage.removeItem('upgradeTime'); // remove the storage
    //         countDown.textContent = 'done'; // Don't assign alert() here
    //         startBtn.style.display = ""; // show the start-button
    //     } else { 
    //         // with setTimeout you don't need to maintain the return value
    //         setTimeout(timer, 1000); // don't pass a string; it's bad practice
    //     }
    // }

});