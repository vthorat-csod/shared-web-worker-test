// iframe.js
var worker = new SharedWorker('https://vthorat-csod.github.github.io/shared-web-worker-test/shared-worker.js');
worker.port.start();

worker.port.onmessage = function(event) {
    console.log('Message received in Iframe:', event.data);
    
    // Respond to the main page
    worker.port.postMessage({
        from: 'iframe',
        message: 'Hello from Iframe'
    });
};

// Send initial message to the main page
worker.port.postMessage({
    from: 'iframe',
    message: 'Iframe loaded and ready'
});
