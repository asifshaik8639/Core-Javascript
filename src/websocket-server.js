const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

try {
    wss.on('connection', ws => {
        console.log('Client connected');
        ws.on('message', message => {
            console.log(`Received message: ${message}`);
            // Handle incoming messages (SDP offers/answers, ICE candidates, etc.)
            // Send messages to the appropriate clients
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });
    });
} catch (error) {
    console.log('Error ==> ', error);
}

