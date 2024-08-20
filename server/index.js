require('dotenv').config(); 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

(async () => {
    try {
        const message = await client.messages.create({
            body: 'Hello there',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919370653498'
        });
        console.log('Message SID:', message.sid);
    } catch (error) {
        console.error('Error sending message:', error);
    }
})();
