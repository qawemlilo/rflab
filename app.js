var http = require('http'),
    connect = require('connect'),
    redirect = require('connect-redirection'),
    mailer = require('./mailer'),
    port = process.env.PORT || 3002;
    
    
var app = connect()
    .use(redirect())
    .use(connect.static('app')) 
    .use(connect.bodyParser())
    .use('/contact', contact);



function contact(req, res) {
    var name = req.body.name, 
        email = req.body.email,
        phone = req.body.phone,
        bugdet = req.body.bugdet,
        message = req.body.message;
 
    res.redirect('/success.html');
}




http.createServer(app).listen(port, function() {
  console.log('App running at http://localhost:%s', port);
});
