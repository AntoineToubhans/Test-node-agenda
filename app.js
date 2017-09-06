const express = require('express');
const Agenda = require('agenda');
const Agendash = require('agendash');

const jobs = require('./jobs');

const agenda = new Agenda({
    db: {
      address: 'mongodb://localhost:3002/Hypercube',
      collection: 'agenda',
    },
});

jobs(agenda);
agenda.on('ready', () => {
    console.log('Agenda is about to start !!!');
    agenda.start();
});


const app = express();

app.use('/agendash', Agendash(agenda));

console.log('Start express server');
app.listen(3010);
