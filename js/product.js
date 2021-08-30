
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

 b='<div class="col-sm-12 col-md-3" style="font-weight:bold" id="pro_'+x2.id+'">'+'<span class="name">'+x2.name+'</span>'+'<img src="'+x2.avatar+'">'+'<span class="price">'+x2.price+'</span>'+'<br>'
 b+='<span class="fa fa-star checked">'+'</span>'+'<span class="fa fa-star checked">'+'</span>'
 b+='<span class="fa fa-star checked">'+'</span>'+'<span class="fa fa-star checked">'+'</span>'+'<span class="fa fa-star checked">'+'</span>'
 b+='<br>'+'<button type="button"  data-toggle="modal" data-target="#detail"  class="btn btn-info" onclick="View('+x2.id+'); return false;">Details</button>'
 b+='&nbsp'+'<button class="btn btn-primary " type="button" onclick="Compare('+x2.id+')">Compare</button>'
 b+='<br>'+'<button class="btn btn-danger" type="button" onclick="addToCart('+x2.id+');return false;" >Add To Cart</button>'+'</div>'
// let s=`<div class="col-xs-3 col-md-4 col-sm-6 col-xm-12" id='pro_${v.id}'>  
// <div class="card">
//     <img class="gallery-image card-img-top" src="${v.avatar}" alt="${v.pro_name}"
//     title="${v.pro_name}"
//     >
//     <div class="card-body">
//         <h4 class="card-title">${v.name}</h4>
//         <h5 class='cart-text'>${v.price}</h5>
//         <a href="#" class="btn btn-primary " onClick="View('${v.id}');return false;">Detail</a>
//         <a href="#" class="btn btn-primary " onClick="addToCart('${v.id}');return false;">Add to Cart</a>
//         </div>
// </div>        
// </div>`
 $('.products').append(b)


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

totalCart()

