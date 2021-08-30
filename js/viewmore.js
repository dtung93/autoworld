const urlProduct='https://60d715b1307c300017a5f624.mockapi.io/data'


$(function (id){
    let x=(localStorage.getItem('product_id'))
    let detail= urlProduct+'/'+x;
    $.ajax({
   url:detail,
   dataType:'json',
   type:'get',
   success:function(s){
    t='<div style="width:40%" id="pro_'+s.id+'">'
    t+='<span class="name" style="font-size:25px;font-weight:bold">'+s.name+'</span>'
    t+="<img src='"+s.avatar+"' style='width:100%;height:250px'>"
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Brand:'+'</h5>'+'<div style="font-size:25px">'+s.brand+'</div>'
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Year:'+'</h5>'+'<div style="font-size:25px">'+s.year+'</div>'
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Type:'+'</h5>'+'<div style="font-size:25px">'+s.type+'</div>'
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Color:'+'</h5>'+'<div style="font-size:25px">'+s.color+'</div>'
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Location:'+'</h5>'+'<div style="font-size:25px">'+s.province+'</div>'
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Insurance:'+'</h5>'+'<div style="font-size:25px;color:darkgreen">'+s.insurance+'</div>'
    t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Price:'+'</h5>'+'<span class="price" style="font-size:25px;font-weight:bold">'+s.price+'</span>'
    t+='<br>'+'<button class="btn btn-danger" type="button" onclick="addToCart('+s.id+')" >Add To Cart</button>'
    t+='</div>'+'&nbsp'
   console.log(t)
   $('.view').append(t)
      }}
    )
    })
