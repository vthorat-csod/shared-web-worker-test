// main.js
var worker = new SharedWorker('https://vthorat-csod.github.github.io/shared-web-worker-test/shared-worker.js');
worker.port.start();

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    worker.port.postMessage({
        from: 'main',
        message: 'Hello from Main Page'
    });
});

worker.port.onmessage = function(event) {
    console.log('Message received in Main Page:', event.data);
};
