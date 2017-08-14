const Agenda = require('agenda');

const agenda = new Agenda({
    db: {
      address: 'mongodb://localhost:27017/Hypercube',
      collection: 'agenda',
    },
});

const node_num = process.argv[2] || 0;
var lastTime = null;

agenda.define('concurent hello', (job, done) => {
    const now = Date.now();

    if (lastTime) {
        console.log(`Hello from node ${node_num}: elapsed time ${now - lastTime}`);
    } else {
        console.log(`Hello from node ${node_num}: first time`);
    }

    lastTime = now;

    done();
});

const graceful = () => {
  console.log('Gracefull stop ;)');
  agenda.stop(() => process.exit(0));
};

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);

agenda.on('ready', () => {
    agenda.every('2 seconds', 'concurent hello');

    console.log('Agenda is about to start !!!');
    agenda.start();
});
