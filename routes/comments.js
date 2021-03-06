const express = require('express');

const router = express.Router();

const commentsController = require('../controllers/comments');
const commentsMiddleware = require('../middlewares/comments');

router.delete('/:id', commentsController.remove);
router.post('/', commentsMiddleware.validationFields, commentsController.create)
router.get('/', commentsController.getAll)
router.put('/:id', commentsMiddleware.validationFields, commentsController.update)

module.exports = router;
