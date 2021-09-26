var qnaNo=0;
var ansNo=0;
function textboxvalue() {
    var x = document.getElementById("textField").value;
    return (x);
}

function download(text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "filename");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}


function Read() {
    file = document.querySelector("#file-input").files[0];
    reader = new FileReader();
    reader.addEventListener('load', function (e) {
        text = e.target.result;
        document.getElementById("textField").value = text;
    });
    reader.readAsText(file);

}

class QnA {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    getQuestion() {
        return this.question;
    }

    getAnswer() {
        return this.answer;
    }
}
var qna = new QnA("","");

function splitt(text) {
    var result = text.split("?")
   qna[qnaNo]= new QnA(result[0],result[1]) ;
  // ActquesGen(qna[qnaNo++]);
    
}

function QMaker(text) {
    var buffer;
    var len=text.length;
    
    for (var i = 0; i < len; i++) {
        if (text[i] == '.') {

            splitt(buffer);
            buffer = null;
            continue;
        }
        buffer = buffer+text[i];

    }
}

function answerGiver()
{
    document.getElementById("textField").value= "Question 1: " + qna[ansNo].question +"<br>"+ "Answer: "+qna[ansNo++].answer;
    
}

function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("textField");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        output.value += transcript;
        output.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();
}

/*function sendToPop(question)
{
    document.getElementById("question").value= question.getQuestion();
    document.getElementById("answer").value= question.getAnswer();
    document.getElementById("textField").value = question.getQuestion();
}*/
/*   var btn = document.createElement("button");
   btn.innerHTML = question.getQuestion;
   btn.onclick = function(){
       pop(btn);
   }
   var close=document.createElement("button");
   document.btn.appendChild(close);
   close.id="close";
   close.onclick = pop(btn);
   btn.id="box";
  
   //change this to just send values to the box not create it everytime
}
function hi()
{
    //delete after use
    document.write("hi");
}

/*function quizGenerator()
{
    qna.forEach(ActquesGen);
    
}*/
/*function ActquesGen(item){
    //send to pop when clicked // which question to send
    var btn = document.createElement("button");
    btn.innerHTML = item.getQuestion();
    btn.onlick= sendToPop(item) ;
    document.body.appendChild(btn);

}*/



/*var modal=null;
function pop()
{
    if(modal==null)
    {
        document.getElementById("box").style.display = "block";
        modal=true;
    }
    else
    {
        document.getElementById("box").style.display = "none";
        modal = null;
    }
}*/