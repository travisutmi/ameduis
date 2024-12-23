const express = require('express');
const app = express();

const node_path = '/api/resource';

app.get(node_path, (req, res) => {
  res.send('Resource data');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
