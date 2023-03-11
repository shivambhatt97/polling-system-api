const express = require('express');
const router = express.Router();

const optionController = require('../controller/options_controller');

router.delete('/:id/delete', optionController.deleteOption);
router.put('/:id/add_vote', optionController.addVote);              
module.exports = router;