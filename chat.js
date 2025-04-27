document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'message-wrapper';
        const message = document.createElement('div');
        message.className = 'message sent';
        message.innerHTML = `<span class="sender">Você:</span> ${userInput}`;
        messageWrapper.appendChild(message);
        document.querySelector('.chat-messages').appendChild(messageWrapper);
        document.getElementById('userInput').value = '';
    }
});