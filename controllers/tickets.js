const tickets = require('../models/tickets');

exports.ticket_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Ticket list');
};

exports.ticket_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        res.send(await tickets.findById(req.params.id));
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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


  exports.tickets_view_all_Page = async function (req, res) {
    try {
        let tickets1 = await tickets.find();
        res.render('tickets', { title: 'Ticket Search Results', results: tickets1 });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.ticket_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tickets();
    
    document.eventName = req.body.eventName;
    document.venue = req.body.venue;
    document.price = req.body.price;
    document.location = req.body.location;
    document.ticketType=req.body.ticketType

    try {
        let results = await document.save();
        res.send(results);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



  