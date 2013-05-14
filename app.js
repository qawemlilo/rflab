var http = require('http'),
    connect = require('connect'),
    redirect = require('connect-redirection'),
    port = process.env.PORT || 3033,
    routes = require('./routes'), 
    app;


app = connect()
  .use(redirect())
  .use(connect.static(__dirname + '/app'), {maxAge: (1000 * 60 * 60 * 24)})
  .use(connect.compress()
  .use(connect.bodyParser()) 
  .use('/contact', routes.contact)
  .use('/about', routes.about)
  .use('/software', routes.software)
  .use('/error', routes.error)
  .use('/success', routes.success);


http.createServer(app).listen(port, function() {
  console.log('App running at port %s', port);
});



