<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="img/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/general.css">
    <title>Teatro da Trindade</title>
</head>
<body>



<main>
    <section id="compra">

        <a href="index.html"><img src="img/logoFullB.png" alt="logo-trindade"></a>

        <?php

        $quantidade = $_POST['quant'];
        $mail = $_POST['mail'];


        if ($_POST['event'] == '0') {
            $evento = "Chicago";
        }
        if ($_POST['event'] == '1') {
            $evento = "Ornatos Violeta";
        }
        if ($_POST['event'] == '2') {
            $evento = "Pedro Teixeira da Mota";
        }
        if ($_POST['event'] == '3') {
            $evento = "Armstrong";
        }


        if ($_POST['check'] == '0') { //Opção 10 euros
            $valor = 10;
        }
        if ($_POST['check'] == '1') { //Opção 30 euros
            $valor = 30;
        }
        if ($_POST['check'] == '2') { //Opção 50 euros
            $valor = 50;
        }

        $total = $quantidade * $valor;


        /*--------Mensagem no ecrã---------*/

        echo "<h3>Reservaste ". $quantidade . " bilhete(s) no valor de " . $valor ." € para o espetáculo '" . $evento . "'.</h3>";
        echo "<br>";
        echo "<p>O total a pagar é ". $total . " €</p>";
        echo "<br>";
        echo "<p>A fatura foi enviada para o e-mail " . $mail . " e tens até 24h para efetuar o pagamento.</p>";




        /*--------Mail a enviar ao cliente---------*/

        $message = "Fatura Teatro da Trindade
    
    
Nome do espetáculo: $evento

Custo por bilhete: $valor €

Quantidade: $quantidade bilhete(s)

Total a pagar: $total €


Dados de pagamento:
Entidade: 12345
Referência: 7237128
Montante: $total 

Tem até 24h para efetuar o pagamento.


Obrigado!";

        mail($mail , "Fatura Teatro da Trindade" , $message);



        /*--------Registo de compra recebido pelo teatro---------*/

        $filename = 'compras.txt';
        fileOutputForm($mail, $quantidade, $valor, $evento, $filename);

        function fileOutputForm($mail, $quantidade, $valor, $evento, $filename) {

            $data = '- O cliente com e-mail ' . $mail . ' fez a reserva de ' . $quantidade .' bilhete(s) no valor de ' . $valor . '€ para o espetáculo ' . $evento . "\n";

            file_put_contents($filename, $data ,FILE_APPEND);


        }


        ?>

        <div class="go-back">
            <a href="bilheteira.html">voltar</a>
        </div>

    </section>

</main>

<style>
    #compra {
        text-align: center;
        height: auto;
        margin: 0% 5% 0 5%;
    }
    #compra img{
        width: 15%;
        margin-top: 5%;
    }
    #compra h3{
        margin-top: 10%;
        color: #000;
        font-size: 2em;
    }
    #compra p{
        color: #d92d2d;
        font-size: 1em;
    }
    #compra p:first-child{
        margin-top: 2%;
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

</body>


</html>
