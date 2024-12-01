import axios from 'axios';

export function sendMessage(contents, discord_webhook, celebration) {
    // Parses contents and sends a well-meaning birthday wish to the relevant person/reminder via Discord.

    const messageData = {
        content: `This is a test. Happy ${celebration} ${contents["Name"]}!! I hope you have an awesome day :)`
    };

    axios.post(discord_webhook, messageData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(_ => {
        console.log('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}
