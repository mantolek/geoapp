const express = require('express');
const app = express();

app.use(express.static('build'))
app.listen(5000, function () {
  console.log('Server is running on port: ' + 5000);
});
