var questions = new Array();
var questions = [
    {
        title: "Question 1",
        q: "Which of the thing in the list is microorganisms?",
        ans: [
            "A. Bacteria",
            "B. Mosquito",
            "C. Seaweed",
            "D. Dog"
        ],
    },
    {
        title: "Question 2",
        q: "Microorganisms can help make food. Which of these foods that they didn't help to make?",
        ans: [
            "A. Cheese",
            "B. Yogurt",
            "C. Chocolate",
            "D. Bread"
        ],
    },
    {
        title: "Question 3",
        q: "What do you need to be able to see a microorganism?",
        ans: [
            "A. Telescope",
            "B. Binoculars",
            "C.Microscope",
            "D. Glasses"
        ],
    },
    {
        title: "Question 4",
        q: "What is the force that pulls us down to Earth and stops us floating into space?",
        ans: [
            "A. Friction",
            "B. Air resistance",
            "C. Gravity",
            "D. Upthrust"
        ],
    },
    {
        title: "Question 5",
        q: "Which of these forces slows you down if you ride a bike on the grass instead of on a smooth pavement?",
        ans: [
            "A. Friction",
            "B. Gravity",
            "C. Air Resistance",
            "D. Upthrust"
        ],
    },
    {
        title: "Question 6",
        q: "How fast does light travel?",
        ans: [
            "A. 1 484 metres per second",
            "B. 5 120 metres per second",
            "C. 300 000 000 metres per second",
            "D. 343 metres per second"
        ],
    }
];

qLength = questions.length;
// text = "<div>";

// var data = $();

var status = 0;

if(status >= 0) {
    let question = questions[status];
    alength = question.ans.length;
    // text += "<h1>" + question.name + "</h1>";
    $("#title").append(question.title);
    $("#name").append(question.q);
    for(j = 0; j < alength; j++) {
        
        console.log(question.ans[j]);
        data = question.ans[j];
       
        if(j >= 0){
            $("#ans" + j).append(data);
        }

        // $("<a>" + question.ans[j] + "</a>").appendTo("#ans");
    }
}

$('button').click(function(){
    // alert( toString(value));
    if(this.id !== "back" && this.id !== "skip")  {
        console.log(this.id);
    
        checkAns(this.id);
    }

    if(this.id == "skip") {
        proceed();
    }
})

$('#back').click(function(){
    if(status == 0){
        alert("This is the first page");
    } else {
        status--;
        change();
    }
})

function checkAns(id) {

    if(status == 0) {
        if(id == "ans0"){
            proceed();
        } else {
            var win = window.open('https://www.youtube.com/watch?v=JZjzQhFG6Ec', '_blank');
            if(win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
    } else if (status == 1) {
        if(id == "ans2"){
            proceed();
        } else {
            var win = window.open('https://www.youtube.com/watch?v=eksagPy5tmQ', '_blank');
            if(win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
    } else if (status == 2) {
        if (id == "ans2") {
            proceed();
        } else {
            var win = window.open('https://www.youtube.com/watch?v=RNNzVFUvkeo', '_blank');
            if(win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
    } else if (status == 3) {
        if (id == "ans2") {
            proceed();
        } else {
            var win = window.open('https://www.youtube.com/watch?v=ljRlB6TuMOU', '_blank');
            if(win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
    } else if (status == 4) {
        if (id == "ans0") {
            proceed();
        } else {
            var win = window.open('https://www.youtube.com/watch?v=PNDRIicw4E0', '_blank');
            if(win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
    } else if (status == 5) {
        if (id == "ans2") {
            alert("Congrat you had completed all the quiz");
        } else {
            var win = window.open('https://www.youtube.com/watch?v=fm__GAlrBuQ', '_blank');
            if(win) {
                win.focus();
            } else {
                alert('Please allow popups for this website');
            }
        }
    } 
}

function proceed() {
    if(status < 5) {
        status++;
        change();
    } else {
        alert('this is the last question for the quiz');
    }
}

function change() {
    if(status >= 0) {
        let question = questions[status];
        alength = question.ans.length;
        // text += "<h1>" + question.name + "</h1>";
        $("#title").html(question.title);
        $("#name").html(question.q);
    
        for(j = 0; j < alength; j++) {
            
            console.log(question.ans[j]);
            data = question.ans[j];
           
            if(j >= 0){
                $("#ans" + j).html(data);
            }
        }
    }
}

// text += "</div>";

// document.getElementById("question").innerHTML = text;
// $('#ans').append(data);
