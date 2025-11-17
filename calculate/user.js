const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Request URL: ${req.url} - Time: ${new Date().toISOString()}`);
  next();
});

router.get('/user', (req, res) => {
  res.send('User route');
});

router.post('/user', (req, res) => {
  res.send('User created');
});

module.exports = router;
