<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="img/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/general.css">
    <title>Teatro da Trindade</title>
</head>
<body>



<main>
    <section id="comprar">

        <?php

        $quantidade = $_POST['quant'];


        if ($_POST['event'] == '0') { //Opção 10 euros
            $evento = "Chicago";
        }
        if ($_POST['event'] == '1') { //Opção 10 euros
            $evento = "Ornatos Violeta";
        }
        if ($_POST['event'] == '2') { //Opção 10 euros
            $evento = "Pedro Teixeira da Mota";
        }
        if ($_POST['event'] == '3') { //Opção 10 euros
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

        echo "Comprou ". $quantidade . " bilhete(s) no valor de " . $valor ." € para o espetáculo '" . $evento . "'.";
        echo "<br>";
        echo "O total a pagar é ". $total . " €";
        echo "<br>";
        echo "A fatura foi descarregada autmáticamente";



        $filename = 'Fatura '. $evento .'.txt';
        $data = "Fatura Teatro da Trindade
    
    
Nome do espetáculo ______________________________________________ $evento

Custo por bilhete _______________________________________________ $valor €

Quantidade ______________________________________________________ $quantidade bilhetes

Total a pagar ___________________________________________________ $total €


Dados de pagamento:
Entidade: 12345
Referência: 7237128
Montante: $total

Tem até 24h para efetuar o pagamento


Obrigado!";


        file_put_contents($filename, $data);

        ?>

        <div class="go-back">
            <a href="bilheteira.html">voltar</a>
        </div>

    </section>

</main>


</body>


</html>
