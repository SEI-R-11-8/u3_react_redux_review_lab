const router = require('express').Router();
const controller = require ('../controller/postController')

router.get('/', controller.getAllBlog)

module.exports = router;