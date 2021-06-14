var showDetailMess = document.querySelector(".message-box");
var userMessBlocks = document.querySelectorAll(".message-detail");
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
var closeDetailMess = document.querySelectorAll(".function-close")[3];
closeDetailMess.addEventListener("click", ()=>{
        showDetailMess.classList.remove("showMessage");
})
userMessBlocks.forEach((userMessBlock)=>{
    userMessBlock.addEventListener("click", ()=>{
        showDetailMess.classList.add("showMessage");
    })
})