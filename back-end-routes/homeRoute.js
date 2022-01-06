const router = require('express').Router();
const allPosts = require('../controllers/allPostsController')

router.get('/', allPosts);

module.exports = router;