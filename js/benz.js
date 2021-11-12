
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
        b='<div class="col-sm-12 col-md-3" style="font-weight:bold;cursor:pointer" id="pro_'+x2.id+'">'+'<span class="name" onclick="View('+x2.id+')">'+x2.name+'</span>'+'<img src="'+x2.avatar+'" onclick="View('+x2.id+')">'+'<span class="price" style="font-size:20px">'+x2.price+'</span>'+'<br>'
        b+='<i class="fa fa-shopping-cart" id="productcart" aria-hidden="true" onclick="addToCart('+x2.id+')"></i>'
        
    if(x2.brand=="Mercedes-Benz"){
    $('.products').append(b)}
   
   
    })
   
   
   
    }
   
   
   
   
    })
   
   
    }
   
   
        )
        function View(id)
        {
    console.log(id)
    localStorage.setItem('product_id',id)
    window.location='viewmore.html'
        }
   
   