<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="img/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/general.css">
    <title>Obrigado!</title>
</head>
<body>


<main>
<section id="submissao">

    <a href="index.html"><img src="img/logoFullB.png" alt="logo-trindade"></a>

    <?php

    $nome = $_POST['nome'];
    $mail = $_POST['email'];



    /*--------Mensagem no ecrã---------*/

    echo "<h1> Olá, ". $nome ."!</h1>";
    echo "<p>Agora subscreves a newsletter do Teatro da Trindade e irás receber no teu e-mail (" . $mail . ") todas as notícias e eventos futuros!</p>";




    /*--------Mail a enviar ao subscritor---------*/

    $message = "Olá. $nome ! 
    
Obrigado por subscreveres o nosso newsletter, agora vais ficar a par de todas as notícias e eventos futuros do Teatro da Tridade!
    
Cumprimentos.";

    mail($mail, 'Teatro da Trindade - Submissão de newsletter', $message);



    /*--------Informação recebida pelo teatro---------*/

    $filename = 'submissoes.txt';
    fileOutputForm($nome, $mail ,  $filename);

    function fileOutputForm($name, $mail, $filename) {

        $data = '- '.$name . ', subscreveu o newsletter através do e-mail ' . $mail . "\n";

        file_put_contents($filename, $data ,FILE_APPEND);
    }

    ?>


    <div class="go-back">
        <a href="index.html">voltar</a>
    </div>

</section>

</main>


</body>

<style>
    #submissao {
        text-align: center;
        height: auto;
        margin: 0% 5% 0 5%;
    }
    #submissao img{
        width: 15%;
        margin-top: 5%;
    }
    #submissao h1{
        margin-top: 10%;
        color: #000;
        font-size: 3em;
    }
    #submissao p{
        color: #d92d2d;
        margin-top: 2%;
        font-size: 1em;
    }
    .go-back{
        margin-top: 4%;
    }
    .go-back a{
        text-decoration: none;
        color: #fff;
        background: #d92d2d;
        padding: 1.5% 5%;
    }
    .go-back a:hover{
        background-color: #fff;
        color: #000;
        border: 2px solid #d92d2d;
    }
</style>

</html>
