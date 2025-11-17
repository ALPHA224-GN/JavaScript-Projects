function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Time's up");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
///While loop Section
function count_to_Ten(){
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}