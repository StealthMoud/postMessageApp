window.addEventListener("message", (event) => {
    // Ensure security with event.origin check (for learning, using *)
    document.getElementById("receivedMessage").textContent = `Received: ${event.data}`;
    
    // Send a response back
    event.source.postMessage("Hello back from Child Page!", event.origin);
});
