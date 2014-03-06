var http = require('http'),
    st = require('st'),
    connect = require('connect'),
    redirect = require('connect-redirection'),
    port = process.env.PORT || 3033,
    routes = require('./routes'), 
    app,
    mount;
    
    
var mount = st({
    path: __dirname, // resolved against the process cwd
    url: '/', // defaults to '/'
    
    cache: { // specify cache:false to turn off caching entirely
        fd: {
          max: 100, // number of fd's to hang on to
          maxAge: 1000*60*60, // amount of ms before fd's expire
        },
        
        stat: {
          max: 500, // number of stat objects to hang on to
          maxAge: 1000 * 60, // number of ms that stats are good for
        },
        
        content: {
          max: 1024*10, // how much memory to use on caching contents
          maxAge: 1000 * 60 * 60, // how long to cache contents for
        }
    },
    
    index: false, // return 404's for directories
    
    dot: true, // allow dot-files to be fetched normally
    
    passthrough: true // calls next/returns instead of returning a 404 error
});


app = connect()
  .use(redirect())
  .use(mount)
  .use(connect.static('production'))
  .use(connect.bodyParser()) 
  .use('/about', routes.about)
  .use('/software', routes.software)
  .use('/error', routes.error)
  .use('/success', routes.success)
  .use('/contact', routes.contact);


http.createServer(app).listen(port, function() {
  console.log('App running at port %s', port);
});



