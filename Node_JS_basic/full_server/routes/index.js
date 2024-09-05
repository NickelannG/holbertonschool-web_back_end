// Link routes part 8.4
const express = require('express');
const path = require('path');

//router object
const router = express.Router();

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname, '..', '/controllers/AppController.js'));
});

router.get('/students', '/students/:major', function (req, res) {
res.sendFile(path.join(__dirname, '..', '/controllers/StudentsController.js'));
});

module.exports = router;