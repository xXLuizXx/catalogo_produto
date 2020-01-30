<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$host = "mysql:host=localhost;dbname=db_catalogo";
$usuario = "root";
$senha = "LopeLope3";


$conexao = new PDO($host, $usuario, $senha);

?>