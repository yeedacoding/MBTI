// 질문과 답변고르기 page

const endQuestions = 80;
var selectBtn = [];                // 사용자가 버튼을 누를때마다 추가
export var selectBtn;

//anwer를 버튼으로 만들기
function addAnswerBtn(answerText, questionIdx, idx) {
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
        selectBtn[questionIdx] = idx;                           // 사용자가 클릭한 n번째 질문의 n번째 버튼을 selectBtn 배열에 넣는다
        nextQuestion(++questionIdx);                            //btn click event가 일어나면 questionIdx를 1씩 늘린다
        console.log(selectBtn);                                 //마지막 질문에 대한 답까지 selectBtn에 넣은 후 그 결과를 result.js로 옮긴 후 작업하려 했지만 실패...
    }, false);
}

//계속해서 다음 question, answer보기가 나오도록 만들기
function nextQuestion(questionIdx) {
    if (questionIdx >= endQuestions) {                          //questionIdx(질문 인덱스)가 endQuestions(80)개보다 많아지면 result.html로 넘어간다.
        window.location.href="result.html";
        return;               
    } else {
        const question = document.querySelector(".questionBox");
        question.innerHTML = questionList[questionIdx].q;
        for (let i in questionList[questionIdx].a) {
            addAnswerBtn(questionList[questionIdx].a[i].answer, questionIdx, i);
        }
        const status = document.querySelector('.statusBar');
        status.style.width = (100/endQuestions) * (questionIdx + 1) + '%';
    }
};
const questionIdx = 0;
nextQuestion(questionIdx);
// statusBar 안에 진행률을 숫자+%로 구현해보기

