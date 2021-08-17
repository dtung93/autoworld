function F1(id){
 var x='https://60d715b1307c300017a5f624.mockapi.io'   
$.ajax({
url:x+'/'+'data'+'/'+id,
type:'get',
dataType:'json',
success:function(s){
console.log(s)
let 
t='<h3>'+s.name+'</h3>'
t+="<img src='"+s.avatar+"' style='width:400px;height:250px'>"
t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Brand:'+'</h5>'+'<div style="font-size:25px">'+s.brand+'</div>'
t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Year:'+'</h5>'+'<div style="font-size:25px">'+s.year+'</div>'
t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Location:'+'</h5>'+'<div style="font-size:25px">'+s.province+'</div>'
t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Color:'+'</h5>'+'<div style="font-size:25px">'+s.color+'</div>'
t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Insurance:'+'</h5>'+'<div style="font-size:25px;color:darkgreen">'+s.insurance+'</div>'
t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Price:'+'</h5>'+'<div style="font-size:25px;font-weight:bold">'+s.price+'</div>'
$('.modal-body').html(t)

}






})




}
function Compare(id){
    var x='https://60d715b1307c300017a5f624.mockapi.io'   
   $.ajax({
   url:x+'/'+'data'+'/'+id,
   type:'get',
   dataType:'json',
   success:function(s){
   console.log(s)
   let 
   t='<div style="width:25%;">'
   t+='<h3>'+s.name+'</h3>'
   t+="<img src='"+s.avatar+"' style='width:100%;height:250px'>"
   t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Brand:'+'</h5>'+'<div style="font-size:25px">'+s.brand+'</div>'
   t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Year:'+'</h5>'+'<div style="font-size:25px">'+s.year+'</div>'
   t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Type:'+'</h5>'+'<div style="font-size:25px">'+s.type+'</div>'
   t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Color:'+'</h5>'+'<div style="font-size:25px">'+s.color+'</div>'
   t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Insurance:'+'</h5>'+'<div style="font-size:25px;color:darkgreen">'+s.insurance+'</div>'
   t+='<h5 style="background-color:rgb(77,144,155);color:white">'+'Price:'+'</h5>'+'<div style="font-size:25px;font-weight:bold">'+s.price+'</div>'
   t+='</div>'+'&nbsp'
   $('.compare').append(t)
   
   }
   
   
   
   
   
   
   })
   
   
   
   
   }
function Delete(){
$('.compare').html('')

}   