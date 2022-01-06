const router = require('express').Router();
const allPosts = require('../controllers/allPostsController')

router.get('/api/home', allPosts);

module.exports = router;