// 질문과 답변고르기 page

const main = document.querySelector(".mainScreen");
const testQuestions = document.querySelector(".testQuestions");
const endQuestions = 80

// 시작하기 버튼을 눌렀을 때 실행되는 것
// function begin(){
//     main.style.animation= "fadeOut 1s";
//     testQuestions.style.animation = "fadeIn 1s";
//     //main.style.display = "none";
//     //testQuestions.style.display = "block";
// }

//anwer를 버튼으로 만들기
function addAnswerBtn(answerText, questionIdx) {
    const answerBox = document.querySelector(".answerBox");
    const answerBtn = document.createElement("button");             //createElement --> button형식으로 만듦
    answerBtn.classList.add("answerList");                       //answerBtn의 class명 지정
    answerBox.appendChild(answerBtn);
    answerBtn.innerHTML = answerText;

    //click event가 일어나면 다음 질문으로 넘기기
    answerBtn.addEventListener("click",function(){
        const allBtn = document.querySelectorAll(".answerList");
        for (let i = 0; i < allBtn.length ; i++) {
            allBtn[i].disabled = true;                         //btn을 누르면 비활성화
            allBtn[i].style.display = 'none';                   //btn 중 하나만 클릭해도 다 사라지게 만들기
        }
        nextQuestion(++questionIdx);                            //btn click event가 일어나면 questionIdx를 1씩 늘린다
    }, false);
}

//계속해서 다음 question, answer보기가 나오도록 만들기
function nextQuestion(questionIdx) {
    const question = document.querySelector(".questionBox");
    question.innerHTML = questionList[questionIdx].q;
    for(let i in questionList[questionIdx].a){
        addAnswerBtn(questionList[questionIdx].a[i].answer, questionIdx);
    }
    const status = document.querySelector('.statusBar');
    status.style.width = (100/endQuestions) * (questionIdx + 1) + '%';
}
const questionIdx = 0;
nextQuestion(questionIdx);

// statusBar 안에 진행률을 숫자+%로 구현해보기

