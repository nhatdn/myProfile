import user from "../js/user.js"; 
import chatBot from "../js/chatBot.js"; 
class messenger {
    constructor(idBtn, idInput){
        this.submitMess = document.querySelector("#" + idBtn);
        this.inputData = document.querySelector("#" + idInput);
        this.user = new user("data-message");
        this.lastMess;
        this.updateMessLastTime = document.querySelector(".content-last-message");
        this.chatBot = new chatBot("https://api.datamuse.com/words?sp=","data-message");
        this.btnSubmit();
    }
    btnSubmit() {
        this.submitMess.addEventListener("click", ()=>{
            this.getDataFromUser();
            this.inputData.value = "";
        })
        this.inputData.addEventListener("keyup",(e)=>{
            if(e.keyCode === 13){
                this.submitMess.click();
            }
        });
    }
    getDataFromUser() {
        this.lastMess = this.inputData.value.trim();
        this.user.addMess(this.lastMess);
        if( this.lastMess.length > 22) {
            this.updateMessLastTime.innerText =  this.lastMess.substring(0 , 20)+ "...";
        } else {
            this.updateMessLastTime.innerText =  this.lastMess;
        } 
        document.querySelector(".last-message").innerText = "Bạn: ";
        this.chatBot.getData(this.lastMess);
    }
}
var msg = new messenger("submit", "newDataMess");
