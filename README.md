# Test-node-agenda

Steps to test agenda last version (1.0.0):

1. install node modules for express and agenda: `npm i`
2. launch a mongoDB (2.6+) e.g., simply use the h3 mongodb

3. launch various test cases:

  - `node src/0_basic_test.js`: Launch a job that `console.log` hello every 2 seconds.
  - `node src/1_write_file_test.js`: Launch a job that writes "hello" in a file every 5 seconds.
  - `node src/2_multi_task_test.js`: Launch two jobs at various frequency and taking various time.
  - `node src/3_multi_node_test.js`: Launch the command in several different terminals. Only one node at a time should handle the job.

## Tips

Use the following to gracefully stop agenda when node stops.

```javascript
const graceful = () => {
  agenda.stop(() => process.exit(0));
};

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);
```

It will prevent jobs to be stucked in a "locked" state.
