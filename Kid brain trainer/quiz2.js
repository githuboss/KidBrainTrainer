function checkAns(){

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;

    var correct = 0;
    var rge;
    var msgs = ["Amazing Work!", "Keep It Up!", "Work Harder"];
    var pics = ["pics/w.gif", "pics/m.gif", "pics/l.gif"];


    if (q1 == 43) { correct++;}
    if (q2 == 32) { correct++;}
    if (q3 == 180) { correct++;}
    if (q4 == 168) { correct++;}
    if (q5 == 24) { correct++;}

    if (correct == 5) {rge = 0;}
    if (correct > 0 && correct < 5) {rge = 1;}
    if (correct == 0) {rge = 2;}
    
    document.getElementById("completed").style.visibility = "visible";
    document.getElementById("msgs").innerHTML = msgs[rge];
    document.getElementById("completed_phrase").innerHTML = "You answered " + correct + " questions correctly!";
    document.getElementById("pic").src = pics[rge];
}