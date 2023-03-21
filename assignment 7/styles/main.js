
var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(title)
    {
        this.title = title;
    }
    toString()
    {
        return `Title: ${this.title}`;    
    }
    get theTitle()
    {
        return this.title;
    }

}
function initializeArray()
{
    var myViewFinder = new ViewFinder("Debt");
    var myViewFinder1 = new ViewFinder("Cat");
    var myViewFinder2 = new ViewFinder("kid");
    var myViewFinder3 = new ViewFinder("tired");
    var myViewFinder4 = new ViewFinder("leave");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    var images = ["images/cat.jpg", "images/debt.jpg", "images/kid.jpg", "images/leave.jpg", "images/leave.jpg", "images/tired.jpg"];
var bitch 
}
function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}

// i completely ran out of time so here we are, doing this so close to the due date and nothing's working, i'm sure i'm missing it lol a
// anyway did you know that burn out is a thing because this and work? feeling it my professor 
// doubt i'll get more time with this but i leave you with a joke 

// I got fired from my job at the bank today. An old lady came in and asked me to check her balance, so I pushed her over. 