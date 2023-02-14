function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Alright we got it started, now what";
        document.getElementById("choice1").innerHTML = "Keep Working";
        document.getElementById("choice2").innerHTML = "Work on something else";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "You're screwed on grades, but at least you got to relax." + "<br> Again?";
        document.getElementById("choice1").innerHTML = "Again?";
        document.getElementById("choice2").innerHTML = "Nope.";

    } else if (choice == 1 && answer1 == "Keep Working") {
        document.getElementById("story").innerHTML = "Thanks for helping out, I'm just working on the harder part, think you can help me with it? .";
        document.getElementById("choice1").innerHTML = "Nah";
        document.getElementById("choice2").innerHTML = "Yea";
    } else if (choice == 2 && answer2 == "Work on something else") {
        document.getElementById("story").innerHTML = "Well, you're working on something else now, I'll just keep working on this I guess?'";
        document.getElementById("choice1").innerHTML = "See ya";
        document.getElementById("choice2").innerHTML = "Get me a drink";

    }
    // need to do these
    else if (choice == 1 && answer1 == "Nah") {
        document.getElementById("story").innerHTML = "I guess you can go home." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Again?";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Yea") {
        document.getElementById("story").innerHTML = "Thanks for helping." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Again?";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 1 && answer1 == "See ya") {
        document.getElementById("story").innerHTML = "See ya." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Again";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Get me a drink") {
        document.getElementById("story").innerHTML = "Heck no" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Again?";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 1 && answer1 == "Again?") {
        document.getElementById("story").innerHTML = "I desperately need to get shit done, wanna help me with it? ";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Nope.") {
        document.getElementById("story").innerHTML = "Aight, we done.";
    }


}