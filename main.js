// main.js
var worker = new SharedWorker('shared-worker.js');

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    worker.port.postMessage({
        from: 'main',
        message: 'Hello from Main Page'
    });
});

worker.port.onmessage = function(event) {
    console.log('Message received in Main Page:', event.data);
};

worker.port.start();

