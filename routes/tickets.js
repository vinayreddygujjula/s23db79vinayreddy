const express = require('express');
const router = express.Router();

const results = [
    { 
        eventName: 'Singing', 
        venue: 'Colden Hall',
        price: 100,
        location: 'Maryville',
        ticketType: 'General' 
    },

    { 
        eventName: 'Dancing',
        venue: 'valk building',
        price: 200, 
        location: 'Maryville',
        ticketType: 'VIP' 
    },
    { 
        eventName: 'Movie',
        venue: 'Hall', 
        price: 150, 
        location: 'Kansas', 
        ticketType: 'Standard' 
    },
    { 
        eventName: 'ABC Consert',
        venue: 'Amb', 
        price: 3000, 
        location: 'Omaha', 
        ticketType: 'VIP' 
    },
    { 
        eventName: 'Sprots',
        venue: 'huges field', 
        price: 2000, 
        location: 'Maryville', 
        ticketType: 'General' 
    },
];

router.get('/', (req, res) => {   
    res.render('tickets', { title: 'Search Results - TICKETS', r: results });
  });
  
  module.exports = router;