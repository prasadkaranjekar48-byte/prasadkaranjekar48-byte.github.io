function sendMessage() {

    let input = document.getElementById("user-input");
    let msg = input.value.trim();

    if (msg === "") return;

    let chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += "<p><b>You:</b> " + msg + "</p>";

    // Bot reply
    let reply = "I am Prasad Bot.";

    if (msg.toLowerCase().includes("hello") || msg.toLowerCase().includes("hi")) {
        reply = "Hi there!";
    }
    else if (msg.toLowerCase().includes("how are you")) {
        reply = "I am fine. Thanks for asking!";
    }
    else if (msg.toLowerCase().includes("your name")) {
        reply = "My name is Prasad Bot.";
    }
    else if (msg.toLowerCase().includes("bye")) {
        reply = "Goodbye! Have a nice day.";
    }

    // Show bot reply
    chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

    // Clear input
    input.value = "";

    // Auto scroll
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Press Enter to Send
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("user-input").addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    });

});