$(document).ready(function(){
    $("#audiochange").click(function(){
        updateAudio();
    });

    $("#videochange").click(function(){
        updateVideo();
    });
});


function updateAudio()
{
    $("#song").attr("src", "stuff/Street.mp3"); 
}

function updateVideo()
{
    $("#film").attr("src", "stuff/crimson vid 2.mp4");
}
