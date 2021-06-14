export default class chatBot {
constructor(linkAPI, containerMess) {
    this.dataShow = "";
    this.containerMess = document.querySelector("." + containerMess); // tag div contain all mess of chatbox
    this.API = linkAPI; // link web API
    this.listCharKey = "abcdefghijklmnopqrstuvwxyz"; // create table chars
    this.arraySaveKey= []; // save and count chars have called.
    this.prepareArraySaveKey(); // create data for arraySaveKey => know to next word
    this.updateMessLastTime = document.querySelector(".content-last-message");
}
prepareArraySaveKey() {
    for(var i = 0;i<this.listCharKey.length;i++) {
        this.arraySaveKey[this.listCharKey.charCodeAt(i)] = 0; // all element in arraySaveKey have value 0
    }
}
createNewMess(data) { //create and add data in tags HTML
    this.dataShow = data;
    console.log(this.dataShow)
    if(data.length !=0){
        this.newDivContainer = document.createElement("div");
        this.newDivContainer.classList.add("message-of-chatbox");
        this.newParagraph = document.createElement("p");
        this.newParagraph.classList.add("detail-message-of-chatbox");
        this.newParagraph.innerText = data;
        this.newDivContainer.appendChild(this.newParagraph);
        return this.newDivContainer;
    }
    return null;
}
getData(input) {
    input.trim();
    this.LastKeyChar = input[input.length-1].toLowerCase();
    this.temp = this.arraySaveKey[this.LastKeyChar.charCodeAt(0)];
    this.arraySaveKey[this.LastKeyChar.charCodeAt(0)]++;
    fetch( this.API + this.LastKeyChar + "*&max=10000000")  
    .then(response => response.json())
    .then(data => 
        {
            this.containerMess.appendChild(this.createNewMess(data[this.temp].word));
            this.containerMess.scrollBy(0, this.containerMess.scrollHeight);
            this.updateMessLastTime.innerText = data[this.temp].word;
            document.querySelector(".last-message").innerText = "Chat Box:";
            console.log("OK");
        }
    );
}
}
