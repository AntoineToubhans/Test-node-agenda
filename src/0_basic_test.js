const Agenda = require('agenda');

const agenda = new Agenda({
    db: {
      address: 'mongodb://localhost:27017/Hypercube',
      collection: 'agenda',
    },
});

agenda.define('say hello', (job, done) => {
    console.log('Hello !');
    done();
});


agenda.on('ready', () => {
    agenda.every('2 seconds', 'say hello');

    console.log('Agenda is about to start !!!');
    agenda.start();
});
