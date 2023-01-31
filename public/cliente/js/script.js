function mostrarOcultarSenha(){
    var senha=document.getElementById("PasswordC");

    if(senha.type=="password"){
        senha.type="text";
    }else{
        senha.type="password";
    }
}

