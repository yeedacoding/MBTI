// 질문과 답변고르기 page
const qna = document.querySelector(".qna");
const result = document.querySelector(".result");
const endQuestions = 80;
const selectBtn = [];                                       // 사용자가 버튼을 누를때마다 추가
const typeArray = [
        {name : "E", value : 0},
        {name : "I", value : 0},
        {name : "S", value : 0},
        {name : "N", value : 0},
        {name : "F", value : 0},
        {name : "T", value : 0},
        {name : "J", value : 0},
        {name : "P", value : 0},
    ]
const mbti = {
    part1 : {E:0,I:0},
    part2 : {S:0,N:0},
    part3 : {T:0,F:0},
    part4 : {J:0,P:0},
    type:[]
    };
const resultMBTI = mbti.type;


function calResult() {
    for(let i = 0; i < endQuestions; i++){
        var target = questionList[i].a[selectBtn[i]];
        for(let j = 0; j < target.type.length; j++){                 //type에 대한 반복
            for(let k = 0; k < typeArray.length; k++){          //typeArray에 대한 반복
                if(target.type[j] === typeArray[k].name){       //선택된 target의 n번째 type과 선택된 n번쨰 typeArray의 이름이 같다면
                    typeArray[k].value += 1;                    //선택된 type의 value를 1증가시킨다 --->가장 높은 value 값을 조합해 결과출력해주기
                }
            }
        }
    }
    // E vs I
    if(typeArray[0].value >= typeArray[1].value){
        mbti.part1.E = 1;
        console.log(`E`)
        mbti.type.push('E');
    } else {
        mbti.part1.I = 1;
        console.log(`I`)
        mbti.type.push('I');
    }
    // S N
    if(typeArray[2].value >= typeArray[3].value){
        mbti.part2.S = 1;
        console.log(`S`)
        mbti.type.push('S');
    } else {
        mbti.part2.N = 1;
        console.log(`N`)
        mbti.type.push('N');
    }
    // T vs F
    if(typeArray[4].value >= typeArray[5].value){
        mbti.part3.F = 1;
        console.log(`F`)
        mbti.type.push('F');
    } else {
        mbti.part3.T = 1;
        console.log(`T`)
        mbti.type.push('T');
    }
    // J vs P
    if(typeArray[6].value >= typeArray[7].value){
        mbti.part4.J = 1;
        console.log(`J`)
        mbti.type.push('J');
    } else {
        mbti.part4.P = 1;
        console.log(`P`)
        mbti.type.push('P');
    } 
    console.log(resultMBTI.join(''));
    const resultArray = typeArray.sort(function(a,b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
            return 0;
        })
        console.log(resultArray);
}

function setResult(){
    calResult();
    const resultName = document.querySelector(".resultName");
    resultName.innerHTML = resultMBTI.join('');
    // resultMBTI.join('') === resultList.key ? => 해당 resultDesc 출력하기      // 해당 key값의 value를 출력한다 {key1 : value1, key2 : value2}
    const resultDesc = document.querySelector(".resultDesc");
    if(resultMBTI.join('') === 'ISTJ'){
        resultDesc.innerHTML = resultsList.ISTJ;
      } else if (resultMBTI.join('') === 'ISFJ') {
        resultDesc.innerHTML = resultsList.ISFJ;
      } else if (resultMBTI.join('') === 'INFJ') {
        resultDesc.innerHTML = resultsList.INFJ;
      } else if (resultMBTI.join('') === 'INTJ') {
        resultDesc.innerHTML = resultsList.INTJ;
      } else if (resultMBTI.join('') === 'ISTP') {
        resultDesc.innerHTML = resultsList.ISTP;
      } else if (resultMBTI.join('') === 'ISFP') {
        resultDesc.innerHTML = resultsList.ISFP;
      } else if (resultMBTI.join('') === 'INFP') {
        resultDesc.innerHTML = resultsList.INFP;
      } else if (resultMBTI.join('') === 'INTP') {
        resultDesc.innerHTML = resultsList.INTP;
      } else if (resultMBTI.join('') === 'ESTP') {
        resultDesc.innerHTML = resultsList.ESTP;
      } else if (resultMBTI.join('') === 'ESFP') {
        resultDesc.innerHTML = resultsList.ESFP;
      } else if (resultMBTI.join('') === 'ENFP') {
        resultDesc.innerHTML = resultsList.ENFP;
      } else if (resultMBTI.join('') === 'ENTP') {
        resultDesc.innerHTML = resultsList.ENTP;
      } else if (resultMBTI.join('') === 'ESTJ') {
        resultDesc.innerHTML = resultsList.ESTJ;
      } else if (resultMBTI.join('') === 'ESFJ') {
        resultDesc.innerHTML = resultsList.ESFJ;
      } else if (resultMBTI.join('') === 'ENFJ') {
        resultDesc.innerHTML = resultsList.ENFJ;
      } else if (resultMBTI.join('') === 'ENTJ') {
        resultDesc.innerHTML = resultsList.ENTJ;
      }  
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(function(){
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(function(){
            qna.style.display = "none";
            result.style.display = "block";
        }, 450);
    },450);
    // window.location.href="result.html";
    setResult();
}


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
    }, false);
}

//계속해서 다음 question, answer보기가 나오도록 만들기
function nextQuestion(questionIdx) {
    if (questionIdx >= endQuestions) {                          //questionIdx(질문 인덱스)가 endQuestions(80)개보다 많아지면 result.html로 넘어간다.
        goResult();
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

