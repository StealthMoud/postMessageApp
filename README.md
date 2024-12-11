# PostMessage Web Application

This project is a simple web application designed to demonstrate and explain how the `postMessage` API works. It’s intended as a learning resource for anyone interested in understanding cross-origin communication between a parent webpage and an iframe.

---


## What is `postMessage`?

The `postMessage` API enables secure cross-origin communication between Window objects. It allows a webpage to send messages to iframes, popups, or other windows, even if they’re hosted on a different domain.

### **Key Concepts of `postMessage`:**

1. **Sender (`postMessage`):**
   - The `postMessage` method sends a message to a target window.
   - Syntax:
     ```javascript
     targetWindow.postMessage(message, targetOrigin);
     ```
     - `message`: Data to send (string, object, etc.).
     - `targetOrigin`: Specifies the domain expected to receive the message for security.

2. **Receiver (`message` event):**
   - The `message` event listens for incoming messages.
   - Syntax:
     ```javascript
     window.addEventListener("message", (event) => {
         // Handle the received message
     });
     ```
     - `event.data`: Contains the message sent.
     - `event.origin`: Domain of the sender.
     - `event.source`: Reference to the sender's window object.

---

## Project Structure

```
postMessageApp/
├── main.html        # Parent page
├── child.html       # Child iframe page
├── css/
│   └── style.css    # Styling for the pages
├── js/
│   ├── main.js      # JavaScript for main.html
│   └── child.js     # JavaScript for child.html
└── README.md        # Documentation
```

---

## Getting Started

### **Steps to Run Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/StealthMoud/postMessageApp.git
   cd postMessageApp
   ```

2. Start a local web server:
   - Using Python:
     ```bash
     python3 -m http.server 8000
     ```

3. Open the parent page in your browser:
   - [http://localhost:8000/main.html](http://localhost:8000/main.html)

---

## Code Explanation

### **1. Parent Page (`main.html` + `js/main.js`)**

**`main.html`:**
- Contains an iframe pointing to `child.html`.
- Includes an input field and a button for sending messages.

**`main.js`:**
- Sends messages to the iframe using:
  ```javascript
  childFrame.postMessage(message, "*");
  ```
- Listens for responses from the child page:
  ```javascript
  window.addEventListener("message", (event) => {
      // Display response
  });
  ```

### **2. Child Page (`child.html` + `js/child.js`)**

**`child.html`:**
- Displays received messages in a dynamic list.

**`child.js`:**
- Listens for incoming messages from the parent:
  ```javascript
  window.addEventListener("message", (event) => {
      // Handle the received message
  });
  ```
- Sends a response back to the parent:
  ```javascript
  event.source.postMessage("Received your message!", event.origin);
  ```

---

## Learning Points

1. **Cross-Origin Communication:**  
   This example uses `"*"` as the `targetOrigin` for simplicity, but in real-world applications, specify the exact origin for security.

2. **Event Validation:**  
   Always verify `event.origin` before processing the message to ensure it’s from a trusted source.

3. **Practical Use Cases:**
   - Embedding third-party widgets (e.g., YouTube, social media).
   - Secure communication between applications hosted on different domains.

---

## Contributing

Feel free to fork the repository, create new features, or raise issues to improve this project.
