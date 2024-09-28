
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotBody = document.getElementById('chatbotBody');

chatbotIcon.addEventListener('click', function() {
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "block";
    } else {
        chatbotContainer.style.display = "none";
    }
});


function sendMessage(message) {
    const userMessage = document.createElement('p');
    userMessage.textContent = `You: ${message}`;
    chatbotBody.appendChild(userMessage);

    const botMessage = document.createElement('p');
    botMessage.textContent = getBotResponse(message);
    chatbotBody.appendChild(botMessage);

    chatbotBody.scrollTop = chatbotBody.scrollHeight; 
}


function getBotResponse(message) {
    if (message.includes('track my shipment')) {
        return 'To track your shipment, go to the Dashboard and enter your Shipment ID.';
    } else if (message.includes('delivery options')) {
        return 'We offer Standard, Express, and Next-Day delivery options.';
    } else if (message.includes('contact support')) {
        return 'You can reach us via the Contact page or call us at 1-800-CARGO.';
    } else {
        return 'Sorry, I did not understand that. Please try again.';
    }
}
