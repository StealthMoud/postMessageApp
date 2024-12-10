window.addEventListener("message", (event) => {
    console.log(`Child received: ${event.data}`);  // Log received message

    const messageList = document.getElementById("messageList");
    const newMessage = document.createElement("li");
    newMessage.textContent = `Received: ${event.data}`;
    messageList.appendChild(newMessage);

    event.source.postMessage("Received your message!", event.origin);
});
