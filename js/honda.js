
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
        b='<div class="col-sm-6 col-md-3" id="pro_'+x2.id+'" style="font-weight:bold">'+ '<span class="name">'+x2.name+"</span>"+'<img src="'+x2.avatar+'">'+'<span class="price">'+x2.price+'</span>'+'<br>'
        b+= '<span class="fa fa-star checked">'+'</span>'+'<span class="fa fa-star checked">'+'</span>'+'<span class="fa fa-star checked">'+'</span>'
        b+= '<span class="fa fa-star checked">'+'</span>'+'<span class="fa fa-star checked">'+'</span>'+'<br>'
        b+='<button type="button"  data-toggle="modal" data-target="#detail"  class="btn btn-sm btn-info" onclick="F1('+x2.id+')">Details</button>'+'&nbsp'+'<button class="btn btn-danger btn-sm" type="button" onclick="addToCart('+x2.id+')" >Add To Cart</button>'+'</div>'
    if(x2.brand=="Honda"){
    $('.products').append(b)}
   
   
    })
   
   
   
    }
   
   
   
   
    })
   
   
    }
   
   
        )
   
   
   