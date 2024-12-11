document.getElementById("sendMessageBtn").addEventListener("click", () => {
    const childFrame = document.getElementById("childFrame").contentWindow;
    const message = document.getElementById("messageInput").value;

    if (message.trim()) {
        childFrame.postMessage(message, "*");
    } else {
        alert("Please enter a message.");
    }
});

window.addEventListener("message", (event) => {
    document.getElementById("response").textContent = `Response: ${event.data}`;
});
