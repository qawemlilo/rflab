
var mailer = require('./mailer'),
    Cache = require('./cache'),
    cached = new Cache(['header','footer','index','about','error','success','software'], __dirname + '/app'),
    contact, about, software, error, success;



    
contact = function (req, res) {
    "use strict";
 
    var name = req.body.name, 
        email = req.body.email,
        phone = req.body.phone || 'Not specified',
        bugdet = req.body.bugdet || 'Not specified',
        message = req.body.message;
    
    if (name.length > 0 && email.length > 3 && message.length > 3) {
        mailer({
            from: name + '<' + email + '>',
            body: '<p>Phone: ' + phone + '</p><p>Bugdet: ' + bugdet + '</p><br><p>' + message + '</p>'
        }, function (error, response) {
            if (error) {
                res.writeHead(500);
                res.end('Nodemailer could not send Mail');
            }
            else {
                res.writeHead(200, {
                    'Content-Type': 'text/plain; charset=utf-8'
                });
                
                res.end('Mail sent');
            }
        });
    }
    else {
        res.writeHead(500);
        res.end('Nodemailer could not send Mail');
    }
};


about = function (req, res) {
    "use strict";
 
    var page = cached.renderPage('about');

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    res.end(page);
};




software = function (req, res) {
    "use strict";
 
    var page = cached.renderPage('software');
    
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    res.end(page);
};




success = function (req, res) {
    "use strict";
 
    var page = cached.renderPage('success');
    
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    res.end(page);
};




error = function (req, res) {
    "use strict";
 
    var page = cached.renderPage('error');
    
    res.writeHead(500, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    res.end(page);
};


blog = function (req, res) {
    "use strict";
 
    var page = cached.renderPage('error');
    
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    
    res.end(page);
};


//module.exports.contact = contact;
module.exports.about = about;
module.exports.software = software;
module.exports.error = error;
module.exports.success = success;
module.exports.contact = contact;

