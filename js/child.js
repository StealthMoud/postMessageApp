window.addEventListener("message", (event) => {
    const messageList = document.getElementById("messageList");

    // Create a new list item
    const newMessage = document.createElement("li");
    newMessage.textContent = `Received: ${event.data}`;
    messageList.appendChild(newMessage);

    // Respond back
    event.source.postMessage("Received your message!", event.origin);
});
