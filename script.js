const quizdata = [{
    question:'Q.1 what is your country name?',
    a : 'india',
    b : 'pakisthan',
    c : 'nepal',
    d : 'bhutan',
    ans: 'a'
},
{
    question:'Q.2 what is your state name?',
    a : 'goa',
    b : 'panjab',
    c : 'up',
    d : 'rajasthan',
    ans: 'd'
}
];

const Q = document.getElementById("q_text");
const A = document.getElementById("a_text");  
const B = document.getElementById("b_text");
const C = document.getElementById("c_text");
const D = document.getElementById("d_text");
const s = document.getElementById("start-container");
const t = document.getElementById("question-container");
const r = document.getElementById("result-container");
const f = document.getElementById("fail");
const p = document.getElementById("pass");
const sp = document.getElementById("pscore");
const sf = document.getElementById("fscore");

t.style.display = "none";
r.style.display = "none";
let currentQuiz = 0;
let currentresult='';
let score=0;
function start(){
 s.style.display = "none";
 t.style.display = "block";
}
loadQuiz();
function loadQuiz(){
  const currentQuizData = quizdata[currentQuiz];
  Q.innerText = currentQuizData.question;
  A.innerText = currentQuizData.a;
  B.innerText = currentQuizData.b;
  C.innerText = currentQuizData.c;
  D.innerText = currentQuizData.d;
 
}
function loadNext(){
    displayRadioValue();
    if(currentresult==quizdata[currentQuiz].ans){
       ++score;
    }
    currentQuiz++;
  if(currentQuiz<quizdata.length){
     loadQuiz();
  }
  else{
      t.style.display ="none";
      sp.innerText = score;
      sf.innerText = score;
      if(score/quizdata.length>.75){
        f.style.display = "none";
      }
      else{
        p.style.display = "none";
      }
      r.style.display ="block";
  }
}
function displayRadioValue() {
            let ele = document.getElementsByName('a');
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                    currentresult = ele[i].value;
            }
        }
