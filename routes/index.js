const { Router } = require('express');

const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('It Works!'));

module.exports = router;
