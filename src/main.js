import CrossOriginWorker from 'crossoriginworker';

const worker = new CrossOriginWorker('http://localhost:8080/shared-worker.js');

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    worker.postMessage({
        from: 'main',
        message: 'Hello from Main Page'
    });
});

worker.onmessage = function(event) {
    console.log('Message received in Main Page:', event.data);
};
