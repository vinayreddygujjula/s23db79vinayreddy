var Ticket = require('../models/tickets');

exports.ticket_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket list');
};

exports.ticket_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket detail: ' + req.params.id);
};

exports.ticket_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket create POST');
};

exports.ticket_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket delete DELETE ' + req.params.id);
};

exports.ticket_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket update PUT ' + req.params.id);
};


exports.ticket_list = async function(req, res) {
    try {
      const theTickets = await Ticket.find();
      res.send(theTickets);
    } catch (err) {
      res.status(500).send(`{"error": ${err}`);
    }
  };
  