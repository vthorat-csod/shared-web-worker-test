// main.js
// var worker = new SharedWorker('shared-worker.js');
import getCrossOriginWorkerURL from 'crossoriginworker';

async function createWorker() {
  const workerURL = await getCrossOriginWorkerURL('shared-wprker.js');
  return new Worker(workerURL);
}

const myWorker = await createWorker();
myWorker.port.start();

document.getElementById('sendMessageBtn').addEventListener('click', function() {
    myWorker.port.postMessage({
        from: 'main',
        message: 'Hello from Main Page'
    });
});

worker.port.onmessage = function(event) {
    console.log('Message received in Main Page:', event.data);
};
