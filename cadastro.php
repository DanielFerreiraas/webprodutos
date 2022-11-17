<?php

    if(isset($_POST['submit'])){

        include('config.php');

        $nome = $_POST['nome'];
        $senha = $_POST['senha'];
        $email = $_POST['email'];

        $result = mysqli_query($conexao, "INSERT INTO validar (nome,senha,email)VALUES('$nome','$senha','$email') ");

    
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cadastro</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="css/cadastro.css">
    
</head>
<body>
    <div class="box">
        <form action="" method="post">
            
                <h1>Cadastro</h1>
                
                <div class="mb-3">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control"name ="nome" id ="nome" placeholder="Digite seu nome" required>
                    
                </div>
                <br>
                <div class="mb-3">
                    <label for="nome">Email</label>
                    <input class="form-control" type="email" name ="email" id ="email" placeholder="Digite seu e-mail" required>
                    
                </div>
                <br>
                <div class="mb-3">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" name="senha" id="senha" placeholder="Digite sua senha" required>
                    
                </div>
                <br>
                <div>
                    <p>Já esta cadastrado?<a href="login.html" class="link-primary"> Fazer Login</a></p>
                </div>
                <br>
                <div class="d-grid gap-2 mx-auto">
                    <input class="btn btn-danger" type="submit" name="submit" id="submit">
                </div>
                
            </fieldset>
        </form>
        
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>

</body>
</html>