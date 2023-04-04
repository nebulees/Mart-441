let Nasa = {
    "Craft" : "ISS",
        "firstName" : "Bob",
        "lastName" : "Prokopyev"
    }

$(function () {
$("button").click(function () {
    showNasaInfo();
});

});

function showNasaInfo()
{
    $("#nasaInformation").html("Craft: " + nasa.craft 
    + "<br>First Name:" + nasa.owner.firstName + "<br>Last Name:" 
    + nasa.owner.lastName + "<br>Names<br>");
}
