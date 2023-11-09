var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var ticket_controller = require('../controllers/tickets');

router.get('/', api_controller.api);
router.post('/tickets', ticket_controller.ticket_create_post);
router.delete('/tickets/:id', ticket_controller.ticket_delete);
router.put('/tickets/:id', ticket_controller.ticket_update_put);
router.get('/tickets/:id', ticket_controller.ticket_detail);
router.get('/tickets', ticket_controller.ticket_list);

module.exports = router;
