document.getElementById("sendMessageBtn").addEventListener("click", () => {
    const childFrame = document.getElementById("childFrame").contentWindow;
    const message = document.getElementById("messageInput").value;

    if (message.trim()) {
        console.log(`Sent message: ${message}`);  // Log the sent message
        childFrame.postMessage(message, "*");
    } else {
        alert("Please enter a message.");
    }
});

window.addEventListener("message", (event) => {
    console.log(`Received message: ${event.data}`);  // Log the received message
    document.getElementById("response").textContent = `Response: ${event.data}`;
});
