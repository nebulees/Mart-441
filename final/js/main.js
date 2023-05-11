$(document).ready(function(){
    $("#audiochange").click(function(){
        updateAudio();
    });

    $("#videochange").click(function(){
        updateVideo();
    });

    function updateAudio()
{
    $("#song").attr("src", "stuff/Street.mp3"); 
}

function updateVideo()
{
    $("#film").attr("src", "images/SIR.mp4");
}
}