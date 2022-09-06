<?php
require_once "./Join.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin,X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE');
header('content-type: application/json;charset=utf-8');
switch($_SERVER["REQUEST_METHOD"]){
    case 'GET':
        echo json_encode(Join::getCommentsAll());
        break;
        default:
        #---
        break;

}
?>