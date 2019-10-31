const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const dashboard = require('./routes/dashboard/');

const port = process.env.API_PORT;
const basePath = '/api';

const app = express();

app.use(bodyParser.json());
app.use(basePath, dashboard);

app.listen(port, () => {
  console.log(
    `${chalk.bgYellow(chalk.black('Backend:'))}${chalk.cyan(
      ' Api listening on port ',
    )}${port} '!'`,
  );
});
