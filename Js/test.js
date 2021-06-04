// 질문과 답변고르기 page

const endQuestions = 80

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
    if (questionIdx >= endQuestions) {                          //questionIdx(질문 인덱스)가 endQuestions(80)개보다 많아지면 result.html로 넘어간다.
         window.location.href="result.html";  
         return;                                                // 이것 때문에 오류나서 죽을뻔;;
    } else {
        const question = document.querySelector(".questionBox");
        question.innerHTML = questionList[questionIdx].q;
        for (let i in questionList[questionIdx].a) {
            addAnswerBtn(questionList[questionIdx].a[i].answer, questionIdx);
        }
        const status = document.querySelector('.statusBar');
        status.style.width = (100/endQuestions) * (questionIdx + 1) + '%';
    }
};
const questionIdx = 0;
nextQuestion(questionIdx);

// statusBar 안에 진행률을 숫자+%로 구현해보기

