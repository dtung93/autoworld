
   $(document).ready(
    function(){
        var x='https://60d715b1307c300017a5f624.mockapi.io'
    $.ajax({
    url: x+'/'+'data',
    type:'get',
    dataType:'json',
   success:function(s){
    console.log(s)
   
    $.each(s,function(x1,x2){
    b='<div class=col-sm-6 col-md-3>'+x2.name+'<img src="'+x2.avatar+'"</div>'+'<h5 style="display:inline">'+x2.price+'</h5>'+'<br>'+'<button type="button"  data-toggle="modal" data-target="#detail"  class="btn btn-info" onclick="F1('+x2.id+')">Details</button>'
    if(x2.brand=="Honda"){
    $('.products').append(b)}
   
   
    })
   
   
   
    }
   
   
   
   
    })
   
   
    }
   
   
        )
   
   
   