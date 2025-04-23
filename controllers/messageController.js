const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    try {
        const chats = await client.getChats();
        const filteredChat = chats.filter(chat => chat.id.user == '994557788292')
        console.log("chats body: ", filteredChat[0].lastMessage.body);
        const bodyArr = filteredChat[0].lastMessage.body.split('\n');
        

        const groupChat = chats.find(chat => chat.name === 'Azərişıq Namazqılanlar)');

        if (groupChat) {
            // sendMessage(groupChat.id._serialized, 'Test message from botabot v.1.0.0');
        } else {
            console.log('Group not found');
        }
    } catch (error) {
        console.log("ERROR: " + error);
        
    }
});

client.initialize();

function sendMessage(chatId, message) {
    client.sendMessage(chatId, message).then(response => {
        console.log("Message sent successfully:", response);
    }).catch(error => {
        console.error("Failed to send message:", error);
    });
}

module.exports = {
    sendMessage,
};