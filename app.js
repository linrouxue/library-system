// nodejs编写代码

const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Home Page');
});
 
app.get('/about', (req, res) => {
  res.send('About Page');
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});