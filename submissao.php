<!DOCTYPE html>
<html lang="zxx">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/general.css">
    <title>Obrigado!</title>
</head>
<body>


<main>
<section id="submissao">

    <?php

    $nome = $_POST['nome'];
    $mail = $_POST['email'];

    echo "<h1> Olá, ". $nome ."!</h1>";
    echo "<p>Agora subscreves a newsletter do Teatro da Trindade e irás receber no teu e-mail (" . $mail . ") todas as notícias e eventos futuros!</p>";


    $message = "Olá! Foi feita uma submissão do nosso newsletter em nome de $nome, através do e-mail $mail";

    mail($mail, 'Submissão de newsletter', $message);

    ?>

</section>
</main>


</body>

<style>
    #submissao {
        height: 800px;
        background: #202020;;
    }
    #submissao h1{
        color: #fff;
    }
    #submissao p{
        color: #d92d2d;
    }
</style>

</html>
