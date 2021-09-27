let nombre = "queNota";
let pw = "123";
function verificar(){
    let nom = document.getElementById("nombre").value;
    let clave = document.getElementById("clave").value;
    if (nombre == nom && pw == clave){
        alert("Bienvenido")
        window.location.href = "ingresoAdmon.html";
    }else{
        alert("Error")
    }
}

function Buscar(){
    if (1){
        window.location.href = "dbDonadores.html";    
    }
    if (2){
        window.location.href = "dbDonaciones.html";
    }
    if (3){
        window.location.href = "dbInstrumentos.html";   
    }else{
    }
}
// function buscar() {
//     for (var i=1;i<document.radio1.radiobutton.length;i++) {
//         if (document.radio1.radiobutton[i].checked)
//             window.location.href = "dbDonadores.html";    
//         }
// {

// var msn = document.radio1.radiobutton[i].value ;
// document.location="dbDonadores.html;
// }
// }

// }
/*
function mostrar(){
    let nom = document.getElementById("nombre").value;
    alert("Tu nombre es: "+nom);
}*/





// var maxHeight = 400;

// $(function(){

//     $(".dropdown > li").hover(function() {
    
//          var $container = $(this),
//              $list = $container.find("ul"),
//              $anchor = $container.find("a"),
//              height = $list.height() * 1.1,       // make sure there is enough room at the bottom
//              multiplier = height / maxHeight;     // needs to move faster if list is taller
        
//         // need to save height here so it can revert on mouseout            
//         $container.data("origHeight", $container.height());
        
//         // so it can retain it's rollover color all the while the dropdown is open
//         $anchor.addClass("hover");
        
//         // make sure dropdown appears directly below parent list item    
//         $list
//             .show()
//             .css({
//                 paddingTop: $container.data("origHeight")
//             });
        
//         // don't do any animation if list shorter than max
//         if (multiplier > 1) {
//             $container
//                 .css({
//                     height: maxHeight,
//                     overflow: "hidden"
//                 })
//                 .mousemove(function(e) {
//                     var offset = $container.offset();
//                     var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
//                     if (relativeY > $container.data("origHeight")) {
//                         $list.css("top", -relativeY + $container.data("origHeight"));
//                     };
//                 });
//         }
        
//     }, function() {
    
//         var $el = $(this);
        
//         // put things back to normal
//         $el
//             .height($(this).data("origHeight"))
//             .find("ul")
//             .css({ top: 0 })
//             .hide()
//             .end()
//             .find("a")
//             .removeClass("hover");
    
//     });  
    
// });
