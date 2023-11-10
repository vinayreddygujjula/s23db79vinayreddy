var express = require('express');
const tickets_controller= require('../controllers/tickets');
var router = express.Router();

router.get('/', tickets_controller.tickets_view_all_Page);

router.get('/tickets/:id', tickets_controller.ticket_detail);

module.exports = router;