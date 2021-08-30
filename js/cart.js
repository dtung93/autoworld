totalCart()
showCart()
//Delete Localstorage
function Empty(){
localStorage.clear()
alert('Your Cart is now empty!')
console.log('localStorage cleared')

}

//Delete All Items
function Empty1(){
$('#products').html()
console.log('All items removed')
window.location.reload()
}


function addToCart(id)
{
    console.log(id)
    $('.toast').toast('show');
if (localStorage.getItem("cart") )
{   
    var cart= JSON.parse(localStorage.getItem("cart"));
    let n=cart.findIndex(element=>element.id==id);
    if (n>-1) //n=-1/no items in cart;n>-1:item in cart
    {   
        cart[n].qty+=1;
    }
    else 
        cart.push({ id, //id:id
            name:$('#pro_'+id +' span.name' ).text(),
            image: $('#pro_'+ id+' img').prop('src'),
            price: $('#pro_'+id+' span.price').text(),
            qty:1,
                    });
}
else //first item
    cart=[
    {   id, //id:id
        name:$('#pro_'+id +' span.name' ).text(),
        image: $('#pro_'+ id+' img').prop('src'),
        price:$('#pro_'+id+' span.price').text(),
        qty:1,
    }
];

console.log(cart);
localStorage.setItem('cart', JSON.stringify(cart));

totalCart();

}

function totalCart()
{  let total=0;
if (localStorage.getItem("cart") )
{   
    var cart= JSON.parse(localStorage.getItem("cart"));
    total = 0; 
    $.each(cart, function( i, v ) { total +=parseInt( v.qty) ; });
}
$('span.cart').html(total);


}

function showCart()
{   
let total=0;
let totalprice=0;
if (localStorage.getItem("cart") )
{   
    var cart= JSON.parse(localStorage.getItem("cart"));
    let s=`<table class='table'>
    <tr><th>STT</th><th>ID</th><th >Name</th><th>IMG</th><th>Qty*</th><th>Price</th><th>Total</th></tr>`;
    $.each(cart, function( i, v ) { total +=parseInt( v.qty) ; let n=i+1;
         tt=v.qty*v.price; totalprice +=tt;
        s+= `<tr id="tr_${v.id}"><td>${n}</td><td>${v.id}</td>
            <td>${v.name}</td><td ><img src='${v.image}'></td>
             <td ><input type='text' value="${v.qty}" min="1" max="99" onchange="updateCart('${v.id}', this.value)">X</td><td>${v.price}=</td>
            <td  >${tt}<br><button class="btn btn-danger" onclick="F3(${v.id})">Remove</button>
                </td>
            
            </tr>`;

    });
    s+= `<tr style="font-size:25px;font-weight:bold"><td colspan=4 >Total</td><td colspan=1><input type='text' value='${total}' id='sl'</td>
        <td colspan=1><input type='text' value='${totalprice}' id='gt'</td>
        </tr>
    </table>  `;
    $('#products').html(s);
    console.log(s);
}
else{ 
    $('#products').html('<div style="font-size:30px;color:red">Cart is empty</div><a href="product.html" class="btn btn-success btn-lg">Start shopping</a>'
    )
    $('.buttons').addClass('bienmat')
    $('table').addClass('bienmat')
    $('#buy').addClass('bienmat')
}

}
//Remove Item
function F3(id){
    if (localStorage.getItem("cart") )
    {   
        
        var cart= JSON.parse(localStorage.getItem("cart"));
        let n=cart.findIndex(element=>element.id==id);
        if (n>-1) //n=-1:no items in cart;n>-1:item in cart
        {   
           cart.splice(n,1)
        }
    localStorage.setItem('cart',JSON.stringify(cart))
    }
    alert('#'+id+' '+'is removed')
$('#tr_'+id).remove()
window.location.reload()

}
function updateCart(id, value)
{
  //  localStorage.setItem('cart', []);
    alert(id+' '+'qty'+' '+'updated ');
if (localStorage.getItem("cart") )
{   
    var cart= JSON.parse(localStorage.getItem("cart"));
    let n=cart.findIndex(element=>element.id==id);
    if (n>-1) //n=-1/no items in cart;n>-1:item in cart
    {   
        cart[n].qty=value;
       if(value==0){cart.splice(n,1)}
    }
   
   
}


console.log(cart);
localStorage.setItem('cart', JSON.stringify(cart));
totalCart();
window.location.reload()
}
