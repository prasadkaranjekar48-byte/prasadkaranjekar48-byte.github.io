function sendMessage() {

    let input = document.getElementById("user-input");

    let msg = input.value.trim();

    if(msg === "") return;

    let chatBox = document.getElementById("chat-box");

    // User Message

    let userDiv = document.createElement("div");

    userDiv.className = "user-message";

    userDiv.innerText = msg;

    chatBox.appendChild(userDiv);

    // Bot Reply

    let reply = "Sorry, I don't understand.";

    if(msg.toLowerCase().includes("hello") ||
       msg.toLowerCase().includes("hi"))
    {
        reply = "Hello 👋";
    }

    else if(msg.toLowerCase().includes("how are you"))
    {
        reply = "I am fine 😊";
    }

    else if(msg.toLowerCase().includes("your name"))
    {
        reply = "My name is Prasad Bot 🤖";
    }

    else if(msg.toLowerCase().includes("bye"))
    {
        reply = "Goodbye 👋";
    }

    let botDiv = document.createElement("div");

    botDiv.className = "bot-message";

    botDiv.innerText = reply;

    chatBox.appendChild(botDiv);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

// ENTER KEY SUPPORT

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("user-input")
    .addEventListener("keydown", function(event){

        if(event.key === "Enter"){
            sendMessage();
        }

    });

});