function VAL(){

    $('#contact').validate({
    rules:{
    name:{
    required:true,
    minlength:3
    
    },email:{
        required:true,
        minlength:4
    },phone:{
        required:true,
        minlength:6
    }
    
    
    },messages:{
    name:{
    required:'Enter your name',
    minlength:'Minimum 3 characters'
    },email:{
        required:'Enter your email',
        minlength:'Minimum 4 characters'
    },phone:{
    required:'Enter your phone number',
    minlength:'Minimum 6 characters'
    
    }
    
    
    }
    
    
    });
    
    
    }