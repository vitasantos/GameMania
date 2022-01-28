$( document ).ready(function(){

    //alert("funcinando")

    $("#barras").click(function() {

        $("#menu").toggleClass("menuAtivo")

        // if ( $("#menu").hasClass("menuAtivo") ) {
        //     //esconder menu
        //     $("#menu").removeClass("menuAtivo")
        // } else {
        //     //mostrar menu
        //     $("#menu").addClass("menuAtivo")
        // }

    })

})


function mostrarMenu() {

    let menu = document.getElementById("menu");

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";
    }else{
        menu.style.display = "flex"
    }
}
 
function cadastrarEmail(){
    let emailDigitado = document.getElementById("txtEmail").value;
    console.log(emailDigitado)
}

function cadastrarBusca(){
    let buscaDigitado = document.getElementById("txtBusca").value;
    console.log(buscaDigitado)
}

function cadastrarProcure(){
    let buscaDigitado = document.getElementById("txtProcure").value;
    console.log(buscaDigitado)
}

