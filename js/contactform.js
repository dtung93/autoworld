function contact(){

    $('form#form').validate({
    rules:{
    name:{
    required:true,
    minlength:3
    
    },email:{
        required:true,
        minlength:4
    },addr:{
        required:true,
        minlength:6
    }
    
    
    },messages:{
    name:{
    required:'Please enter your name',
    minlength:'Minimum 3 characters'
    },email:{
        required:'Please enter your email',
        minlength:'Minimum 4 characters'
    },addr:{
    required:'Please enter your address',
    minlength:'Minimum 6 characters'
    
    }
    
    
    }
    
    
    });
    
    
    }