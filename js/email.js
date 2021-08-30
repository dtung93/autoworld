$(function(){$('#buy #order').val(Math.floor(Math.random() * 999))

$('#nm').val(parseInt($('#sl').val()))
 $('#qt').val(parseInt($('#gt').val()))

});

    $('#buy').on('submit', function(event) {
    alert('Order placed!')
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id','service_jkx7clf');
    formData.append('template_id','template_n8bquii');
    formData.append('user_id', 'user_V9KiezCH0jF9A3TE8HU1T');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Ordered successfully!');
        window.setTimeout(function(){

// Move to a new location or you can do something else
location.href = "thankyou.html";

}, 2000);
    }).fail(function(error) {
        alert('Error ' + JSON.stringify(error));
    });
});