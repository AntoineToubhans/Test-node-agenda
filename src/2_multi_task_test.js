const Agenda = require('agenda');

const agenda = new Agenda({
    db: {
      address: 'mongodb://localhost:27017/Hypercube',
      collection: 'agenda',
    },
});

agenda.define('job 1', (job, done) => {
    console.log('Hello, I am job 1 !');
    setTimeout(() => {
        console.log('Job 1 is done !');
        done();
    }, 2000);
});

agenda.define('job 2', (job, done) => {
    console.log('Hello, I am job 2 !');
    setTimeout(() => {
        console.log('Job 1 is done !');
        done();
    }, 3000);
});


agenda.on('ready', () => {
    agenda.every('7 seconds', 'job 1');
    agenda.every('5 seconds', 'job 2');

    console.log('Agenda is about to start !!!');
    agenda.start();
});
