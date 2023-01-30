function mostrarOcultarSenha(){
    var senha=document.getElementById("PasswordC");

    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}

function preencherComplemento(){
    var pre=document.getElementById("txtComplemento");
    
    if(pre==null){
        pre="vazio"
    }
}
