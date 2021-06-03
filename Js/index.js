const inputText = document.querySelector(".nameText");
const startBtn = document.querySelector(".startTest_btn");

startBtn.addEventListener("click",function(event){
    if(inputText.value === ""){
        alert("이름을 입력하세요.");
        event.preventDefault();
    }
})
