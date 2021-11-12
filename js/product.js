
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
 b+='<i class="fa fa-pencil" id="productcompare" onclick="Compare('+x2.id+')"></i>'

//  b+='<br>'+'<button class="btn btn-danger" type="button" onclick="addToCart('+x2.id+');return false;" >Add To Cart</button>'+'</div>'
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

