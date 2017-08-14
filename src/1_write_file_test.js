const Agenda = require('agenda');
const fs = require('fs');

const agenda = new Agenda({
    db: {
      address: 'mongodb://localhost:27017/Hypercube',
      collection: 'agenda',
    },
});

agenda.define('write hello to a file', (job, done) => {
    const now = Date.now();
    const reportFile = `data/${now}.report`

    console.log('About to write report file:', reportFile);
    fs.writeFile(reportFile, 'Hello :)', done);
});


agenda.on('ready', () => {
    agenda.every('5 seconds', 'write hello to a file');

    console.log('Agenda is about to start !!!');
    agenda.start();
});
