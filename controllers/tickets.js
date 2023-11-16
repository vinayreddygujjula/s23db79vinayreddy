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

exports.ticket_update_put = async function (req, res) {
    try {
        let updateTicket = await tickets.findById(req.params.id);

        if (req.body.eventName) updateTicket.eventName = req.body.eventName;
        if (req.body.venue) updateTicket.venue = req.body.venue;
        if (req.body.price) updateTicket.price = req.body.price;
        if (req.body.location) updateTicket.location = req.body.location;
        if (req.body.ticketType) updateTicket.ticketType = req.body.ticketType;
        let result = await updateTicket.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


exports.ticket_list = async function(req, res) {
    try {
      const theTickets = await tickets.find();
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



exports.ticket_delete = async function(req, res) {
    try {
      const result = await tickets.findByIdAndDelete(req.params.id);
      res.send(result);
    } catch (err) {
      res.status(500);
      res.send(`{"error": "Error deleting ${err}"}`);
    }
  };


  exports.tickets_view_one_Page = async function(req, res) {
    console.log("single view for id" + req.query.id)
    try {
        const result = await tickets.findById(req.query.id);
        res.render('ticketsdetail', { title: 'Ticket Detail', toShow: result });
    } catch (err) {
        res.status(500).send(`{'error': '${err}'}`);
    }
};


exports.ticket_create_page = function(req, res) {
    console.log("create view")
    try{
    res.render('ticketcreate', { title: 'Ticket Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};



exports.ticket_update_page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await tickets.findById(req.query.id)
        res.render('ticketupdate', { title: 'Ticket Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};