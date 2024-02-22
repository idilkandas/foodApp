
//alert
function alertFunction() {
    alert("favori ekleme işlemi için giriş yapınız");
  }


$(document).ready(function() {
    function addClassToCart() {
        $(".cart").on('mouseenter', function() {
            $(this).addClass('clicked');
        });
    }
     addClassToCart();
});


//menu3 açma
$(function(){
    $(".foodbaslik3").click(function(){
        $(".genelMenu3").slideToggle();
    })
})


//.foodbaslik a tıkla .genelMenu yu aç
$(function(){
    $(".foodbaslik").click(function(){
        $(".genelMenu").slideToggle();
    })
});
// console.log('im here')



$(function(){
    $(".foodbaslik2").click(function(){
        $(".genelMenu2").slideToggle();
    })
})




//filtreye göre sıralama
$(function(){
$(" .filtre").on("keyup" , function(){
var malzeme=$(this).val().toLowerCase();
$(".card").filter(function(){
$(this).toggle($(this).text().toLowerCase().indexOf(malzeme)>-1)
});
});
});




let product1=[
    {
        id:0,
        image:'img/indir.jpg',
        title:'kahve1',
        content:'aaaaaaaaaaaaaaaaaaaaaa lcskndvlsnd lvdcklns lcdlkcns slkdckl csişdcşsdci aaaaaaaaaaaaaaaaaaaaaa lcskndvlsnd lvdcklns lcdlkcns slkdckl csişdcşsdci aaaaaaaaaaaaaaaaaaaaaa lcskndvlsnd lvdcklns lcdlkcns slkdckl csişdcşsdci aaaaaaaaaaaaaaaaaaaaaa lcskndvlsnd lvdcklns lcdlkcns slkdckl csişdcşsdci aaaaaaaaaaaaaaaaaaaaaa lcskndvlsnd lvdcklns lcdlkcns slkdckl csişdcşsdci aaaaaaaaaaaaaaaaaaaaaa lcskndvlsnd lvdcklns lcdlkcns slkdckl csişdcşsdci',
    link:'',
    },
    {
        id:1,
        image:'img/kahve.jpg',
        title:'kahve2',
        content:'bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb v bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb bbbbbbbb   bbbbbb v bbbbbbbb   bbbbbbbbbbbbbb   bbbbbb bbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbbbbbbbbbb   bbbbbb',
    link:'',
    },
    {
        id:2,
        image:'img/kahve2.jpg',
        title:'kahve3',
        content:'cccccccccccccc',
link:'',
    },
    {
        id:3,
        image:'img/kahve3.jpg',
        title:'kahve4',
        content:'ddddddddddddddddd',
        link:'',
    },
    {
        id:3,
        image:'img/kahve3.jpg',
        title:'kahve4',
        content:'ddddddddddddddddd',
        link:'',
    },
    
];




$(function(){
    $("#hes").mouseover(function(){
$(".hesap").css("display" , "block");
    })
})
$(function(){
    $("#hesab").mouseout(function(){
        $(".hesap").css("display" , "none")
    })
})


function pathFav(){
    window.location.href='favori.html';
}
function pathRegister(){
    window.location.href='register'
}
function pathindexx(){
    window.location.href='indexx'
}
function pathindex(){
    window.location.href='index.html'
}
function pathLogin(){
    window.location.href='login'
}
function pathPost(){
    window.location.href='post.html'
}









//menu1 fav ekleme silme 
const localStorage=window.localStorage;
const favEkle=document.getElementsByClassName("tarifEkle");
//silme butonu tanımla!!!!!
const sil=document.getElementsByClassName("delete");
eventListeners();
function eventListeners(){
   window.addEventListener("load", function(){
let carts=GetCartsFromStorage();
// this.document.getElementById()

let page=this.window.location.pathname;
if(page=='/favori.html') FillDetailTables();

for(let i=0; i<favEkle.length; i++) favEkle[i].addEventListener("click" , addCard)
   }); 
}

function addCard(e){
let id=e.target.name;
// let baslik=document.getElementsByClassName('card-title'+id).innerText;
let content=document.getElementById('p-content-'+id).innerHTML;
let cart={
    imagee:document.getElementById('img_box_'+id).innerHTML,
    titlee:document.getElementById('p-name-'+id).innerHTML,//yukarıda tanımlanıp, bunun altına eklenen elementler titlee başlığı altında localstorage a keydedilir
    card_text:content,
    //img ekle
}
AddCartsToStorage(cart);
}
// addCard();

function  GetCartsFromStorage(){
    let carts;
    if (localStorage.getItem("carts")===null) carts=[];
    else carts=JSON.parse(localStorage.getItem("carts"));
    return carts;
}

function AddCartsToStorage(data){
let carts=GetCartsFromStorage();
carts.push(data);
localStorage.setItem("carts" , JSON.stringify(carts));
}
function DeleteCartsFromStorage(id){
let carts=GetCartsFromStorage();
carts.splice(id,1);
localStorage.setItem("carts",JSON.stringify(carts))

}

const fav=document.getElementById("urunekle");
console.log(fav)

function FillDetailTables(){
    let html='';
    let carts=GetCartsFromStorage();
    for(let i=0; i<carts.length; i++){
        html=' <div class="cardd" >'+
        '<div class="cardd-body">'+
        '<div id="img_box">'+carts[i].imagee+ '</div>' +
        '<div class=titliee id="p-name-1"><h5 class="card_title">' +carts[i].titlee +' </h5></div>'+
          '<p class="card-text" id="p-content-1">'+carts[i].card_text+'</p>'+
        //  '<button class="btn btn-primary tarifeGit favdaGit"> <a class=linkCss href=${link}>tarife git</a></button>'+
         '<button class="btn btn-primary delete" onclick="DeleteCartsFromStorage('+i+');"> sil</button>'+
         '</div></div>';
                   document.getElementById("urunekle").innerHTML+=html;
    }
}
//
//
//
//menu 1 fav ekleme silme bitti!!

function urun1Git(){
    window.location.href="/ürün1.html";
}

function pathFiltre(){
    window.location.href="/filtre.html";
}
function pathFiltreÜye(){
    window.location.href='/filtreUye.html'
}
function favAlert(){
    alert("favori ekleme ve favorilerinizi görmek için giriş yapınız");
}
function pathİndexx() {
    window.location.href='/indexx.html'
}
function pathİndex(){
    window.location.href='/index.html'
}
function ürün4Git(){
    window.location.href='/ürün4.html'
}
function pathdelete(){
    window.location.href='/delete'
}
function pathregister(){
    window.location.href='/register'
}
function pathlogin(){
    window.location.href='/login'
}
function pathUrun(){
    window.location.href='/urun'
}
function pathPost(){
    window.location.href='post'
}
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerText = timeString;
}

function updateDate() {
    var now = new Date();
    var options = {month: 'long', day: 'numeric' };
    var dateString = now.toLocaleDateString('tr-tr', options);

    document.getElementById("clock").innerHTML += "  "+ " " + dateString;
}

function updateDateTime() {
    updateClock();
    updateDate();
}

setInterval(updateDateTime, 1000);
window.onload = updateDateTime;