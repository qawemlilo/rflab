
var nodemailer = require('nodemailer');
 
module.exports  = function (opts, fn) {
    "use strict";
 
    var mailOpts, smtpTrans;
 
    // nodemailer configuration
    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        
        auth: {
            user: 'qawemlilo@gmail.com',
            pass: 'woktcytzxsjqumbi'
        }
    });
 
    // mailing options
    mailOpts = {
        from: opts.from,
        replyTo: opts.from,
        to: 'qawemlilo@gmail.com',
        subject: 'Contact from <rflab.co.za>',
        html: opts.body
    };
 
    // Send maail
    smtpTrans.sendMail(mailOpts, function (error, response) {
        //if sending fails
        if (error) {
            fn(true, error);
        }
        
        //Yay!! message sent
        else {
            fn(false, response.message);
        }
    });
};

