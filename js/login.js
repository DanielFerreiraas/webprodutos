

 function login(){
  
   let usuario = document.getElementById('usuario').value;
   let senha = document.getElementById('password').value;
     
      if(usuario == "adm" && senha == "adm"){

       location.href = "table.html";
      }else{
         
         (Swal.fire(
            'Tente Novamente!',
            'Login ou Senha inválidos!',
            'error'
         )) 
      }
}