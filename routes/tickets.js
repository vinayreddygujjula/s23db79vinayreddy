const express = require('express');
const tickets_controller= require('../controllers/tickets');
const router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/', tickets_controller.tickets_view_all_Page);

router.get('/tickets/:id', tickets_controller.ticket_detail);


router.get('/detail',secured, tickets_controller.tickets_view_one_Page);

router.get('/create',secured, tickets_controller.ticket_create_page);

router.get('/update',secured, tickets_controller.ticket_update_page);
router.get('/delete',secured,tickets_controller.ticket_delete_Page);

module.exports = router;