const fs = require('fs');

module.exports = agenda => {
    agenda.define('report', (job, done) => {
        const now = Date.now();
        const reportFile = `data/${now}.report`

        const data = `here is the report from user ${job.attrs.data.user || 'None'}: ${job.attrs.data.report || '-'}`;

        console.log('About to write report file:', reportFile);
        fs.writeFile(reportFile, data, done);
    });
};
