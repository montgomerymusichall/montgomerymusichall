(function (window, $, musichall) {
    "use strict";
    if (!$) {
        throw 'jQuery not found.';   
    }
    
    musichall.contact = {
        initialize: function() {
            musichall.contact.setupFormBindings();
            musichall.contact.setupFormValidations();
        },
        
        setupFormBindings: function() {
            $('.contact-submit').on('click', function () {
                musichall.contact.sendEmail();    
            });
        },
        
        setupFormValidations: function() {
            $("form[name='contactForm']").validate({
                rules: {
                    firstName: "required",
                    lastName: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 50
                    }
                },
                messages: {
                    firstName: "Please enter your firstname",
                    lastName: "Please enter your lastname",
                    email: "Please enter a valid email address",
                    message: {
                        required: "Please enter a message",
                        minlength: "Your username must consist of at least 50 characters"
                    }
                }
            });    
        },
        
        sendEmail: function() {
            $('form[name="contactForm"] button').prop('disabled', true);
            if($('form[name="contactForm"]').valid()) {
                $.ajax({
                    dataType: 'json',
                    method: "POST",
                    url: '../email/sendEmail.php',
                    data: $('form').serialize()
                }).done(function(response) {
                    if(response.success) {
                        $('.form-container').html('<div class="success-message col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12">Your message has been sent and we will get back to you as soon as we can.  Thank You!</div>');
                    } else {
                        $('.error-container').html(response.message);
                    }
                    $('form[name="contactForm"] button').prop('disabled', false);
                });
            } else {
                $('form[name="contactForm"] button').prop('disabled', false);
            }
        }
    };
    
    $(document).ready(musichall.contact.initialize);
    
})(window, jQuery, window.musichall = window.musichall || {});