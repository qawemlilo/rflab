var st = require('st');

var mount = st({
  path: __dirname, // resolved against the process cwd
  url: '/', // defaults to '/'

  cache: { // specify cache:false to turn off caching entirely
    fd: {
      max: 1000, // number of fd's to hang on to
      maxAge: 1000*60*60, // amount of ms before fd's expire
    },

    stat: {
      max: 5000, // number of stat objects to hang on to
      maxAge: 1000 * 60, // number of ms that stats are good for
    },

    content: {
      max: 1024*5, // how much memory to use on caching contents
      maxAge: 1000 * 60 * 10, // how long to cache contents for
    }
  },

  index: false, // return 404's for directories

  dot: true, // allow dot-files to be fetched normally

  passthrough: true // calls next/returns instead of returning a 404 error
});

// with bare node.js
http.createServer(function (req, res) {
  if (mount(req, res)) return // serving a static file
  myCustomLogic(req, res)
}).listen(PORT)

// with express
app.use(mount)
// or
app.route('/static/:fooblz', function (req, res, next) {
  mount(req, res, next) // will call next() if it doesn't do anything
})