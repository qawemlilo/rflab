;(function () {
    function highlightActiveMenu() {
        var software = document.getElementById('software'),
        parser = document.createElement('a'),
        page = location.href;
        
        parser.href = page;
    
        if (parser.pathname === '/software') {
            software.className = 'active';
        }
    }
    
    
    function handleContactForm(event) {
        var self = this,
            progress = $('.progress'),
            responseD = $('#responseD');
            
        progress.slideDown(function () {
            $.post('/contact', $(self).serialize() + '&access_token=' + (new Date().getTime()))
            
            .done(function(res) {
                self.reset();
                
                progress.slideUp(function () {
                    responseD.addClass('alert-success').html($('<strong>' + res + '</strong>')).slideDown('slow');
                });
                  
                window.setTimeout(function () { 
                    responseD.slideUp(function () {
                        responseD.removeClass('alert-success');
                    }); 
                }, 10 * 1000);
            })
            
            .fail(function(res) {
                self.reset();
                
                progress.slideUp(function () {
                    responseD.addClass('alert-error').html($('<strong>' + res + '</strong>')).slideDown();
                });
                  
                window.setTimeout(function () { 
                    responseD.slideUp(function () {
                        responseD.removeClass('alert-error');
                    }); 
                }, 10 * 1000);
            });
        });
            
        return false;
    }
    
    
    $('#contactme').on('submit', handleContactForm);
    highlightActiveMenu();
}());