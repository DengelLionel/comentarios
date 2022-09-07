<?php
require_once "./SubComentarioFinal.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type, Accept");
header("Access-Controll-Allow-Methods: GET,POST,PUT,DELETE");
header("content-type: application/json;charset=utf-8");
switch($_SERVER["REQUEST_METHOD"]){
    case 'GET':
        echo json_encode(SubComentarioFinal::getAll());
        break;
        default:
        #--
        break;
}
?>