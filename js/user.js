export default class user {
    constructor(containerMess) {
        this.containerMessUser = document.querySelector("." + containerMess);
    }
    createNewMess(data, classNewDivContainer = "x") {
        this.newDivContainer = document.createElement("div");
        this.newDivContainer.classList.add("message-of-me");
        this.newDivContainer.classList.add(classNewDivContainer);
        this.newParagraph = document.createElement("p");
        this.newParagraph.classList.add("detail-message-of-me");
        this.newParagraph.innerText = data;
        this.newDivContainer.appendChild(this.newParagraph);
        return this.newDivContainer;
    }
    addMess(data) {
        this.containerMessUser.appendChild(this.createNewMess(data));
        this.containerMessUser.scrollBy(0, this.containerMessUser.scrollHeight);
    }
    deleMess(dataClass){
        this.containerMessUser.removeChild(document.querySelector("#" + dataClass));
    }
}