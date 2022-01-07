const router = require('express').Router();
const controller = require ('../controller/commentController')

router.post('/', controller.addComment)
router.get('/', controller.insetComment)

module.exports = router;