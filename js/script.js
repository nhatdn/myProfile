var messageBtn = document.querySelector(".messenger a");
var listMessage = document.querySelector(".show-list-my-message");
var iconMess = document.querySelector(".fab.fa-facebook-messenger");
messageBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(listMessage.classList.contains("showMessage")) {
        listMessage.classList.remove("showMessage");
    } else {
        listMessage.classList.add("showMessage");
    }
});
document.addEventListener("click",(e)=>{
    if((e.target != messageBtn) && (e.target !=iconMess)) {
        
            listMessage.classList.remove("showMessage");  
    }
})

var userMessBlocks = document.querySelectorAll(".message-detail");
console.log(userMessBlocks);

var showDetailMess = document.querySelector(".message-box");
console.log(showDetailMess);

var closeDetailMess = document.querySelectorAll(".function-close")[3];
console.log(closeDetailMess);

closeDetailMess.addEventListener("click", ()=>{
        showDetailMess.classList.remove("showMessage");
})
userMessBlocks.forEach((userMessBlock)=>{
    userMessBlock.addEventListener("click", ()=>{
        showDetailMess.classList.add("showMessage");
    })
})

var submitMess = document.querySelector("#submit");
var containerMess = document.querySelector(".data-message");
var newDataMess = document.querySelector("#newDataMess");
var updateMessLastTime = document.querySelector(".content-last-message");
console.log(updateMessLastTime);
function Add(data){
    var newDivContainer = document.createElement("div");
    newDivContainer.classList.add("message-of-me")
    var newParagraph = document.createElement("p");
    newParagraph.classList.add("detail-message-of-me");
    newParagraph.innerText = data;
    newDivContainer.appendChild(newParagraph);
    return newDivContainer;
}
var valueNewDataMess = newDataMess.value;
function FinishAddNewMess() {
    valueNewDataMess = newDataMess.value;
    if(valueNewDataMess !="") {
        containerMess.appendChild(Add(valueNewDataMess));
        console.log(valueNewDataMess.length);
        if(valueNewDataMess.length > 22) {
            console.log("quá");
            updateMessLastTime.innerText = newDataMess.value.substring(0 , 20)+ "...";
            console.log(newDataMess.value.substring(0 , 20));

        } else {
            updateMessLastTime.innerText = valueNewDataMess;
        }
        
        newDataMess.value="";
        containerMess.scrollBy(0, containerMess.scrollHeight);
    }
}
submitMess.addEventListener("click",()=>{
    FinishAddNewMess();
})
newDataMess.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        submitMess.click();
    }
})
