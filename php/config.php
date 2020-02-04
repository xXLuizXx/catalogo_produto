<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$host = "mysql:host=mysql669.umbler.com;dbname=catalogo_2mil20";
$usuario = "x_kyller_x";
$senha = "LopeLope3";


$conexao = new PDO($host, $usuario, $senha);

?>