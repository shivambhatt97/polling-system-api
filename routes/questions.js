const express = require('express');
const router = express.Router();

const questionController = require('../controller/questions_controller');

router.post('/create',questionController.createQuestion);
router.post('/:id/options/create', questionController.createOptions );
router.delete('/:id/delete',questionController.deleteQuestion);
router.get('/:id',questionController.viewQuestion);
module.exports = router;