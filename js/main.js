document.getElementById("sendMessageBtn").addEventListener("click", () => {
    const childFrame = document.getElementById("childFrame").contentWindow;
    const message = "Hello from Main Page!";
    
    // Send a message to the child iframe
    childFrame.postMessage(message, "*");
});

window.addEventListener("message", (event) => {
    // Ensure security with event.origin check (for learning, using *)
    document.getElementById("response").textContent = `Response: ${event.data}`;
});
