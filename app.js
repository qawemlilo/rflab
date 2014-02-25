var http = require('http'),
    connect = require('connect'),
    redirect = require('connect-redirection'),
    port = process.env.PORT || 3033,
    routes = require('./routes'), 
    app;


app = connect()
  .use(redirect())
  .use(connect.compress())
  .use(connect.static('build'))
  .use(connect.bodyParser()) 
  .use('/about', routes.about)
  .use('/software', routes.software)
  .use('/error', routes.error)
  .use('/success', routes.success)
  .use('/contact', routes.contact);


http.createServer(app).listen(port, function() {
  console.log('App running at port %s', port);
});



