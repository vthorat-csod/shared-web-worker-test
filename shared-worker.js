// shared-worker.js
const connections = [];

onconnect = function(e) {
    const port = e.ports[0];
    connections.push(port);

    port.onmessage = function(event) {
        console.log('Message received in Shared Worker:', event.data);

        // Broadcast the message to all connected ports
        connections.forEach(conn => {
            if (conn !== port) {
                conn.postMessage(event.data);
            }
        });
    };

    port.start();
};
