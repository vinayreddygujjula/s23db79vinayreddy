exports.api = function (req, res) {
    res.write('[');
    res.write('{"resource":"tickets", '); // Change "organizations" to "tickets"
    res.write(' "verbs":["GET","PUT","DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};
