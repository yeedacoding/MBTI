const inputText = document.querySelector(".nameText");
const startBtn = document.querySelector(".startTest_btn");

startBtn.addEventListener("click",function(event){
    if(inputText.value === ""){
        alert("이름을 입력하세요.");
        event.preventDefault();
    }
});


// 시작하기 버튼을 눌렀을 때 실행되는 것
// function begin(){
//     main.style.animation= "fadeOut 1s";
//     testQuestions.style.animation = "fadeIn 1s";
//     //main.style.display = "none";
//     //testQuestions.style.display = "block";
// }
const main = document.querySelector(".mainScreen");
const testQuestions = document.querySelector(".testQuestions");

function beginTest(){
    main.style.display = "none";
    testQuestions.style.display = "block";
}
