<?php
require_once "./SubComentarios.php";
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            if(isset($_GET['id'])){
                echo json_encode(SubComentarios::getWhere($_GET['id']));
            }else{
                echo json_encode(SubComentarios::getAll());
            }
            
            break;
            case 'POST':
                $datos=json_decode(file_get_contents('php://input'));
                
                if($datos != NULL){
                    if(SubComentarios::insert($datos->idcomentario, $datos->id,$datos->subcomentario,$datos->fechahora)){
                        http_response_code(200);
                        print_r($datos);
                    }else{
                        http_response_code(400);
                    }
                }else{
                    http_response_code(405);
                   print_r($datos);
                }
            break;
            case 'PUT':
                $datos=json_decode(file_get_contents('php://input'));
                
                if($datos != NULL){
                    if(SubComentarios::update($datos->idsubcomentarios,$datos->idcomentario, $datos->id,$datos->subcomentario,$datos->fechahora)){
                        http_response_code(200);
                        print_r($datos);
                    }else{
                        http_response_code(400);
                    }
                }else{
                    http_response_code(405);
                   print_r($datos);
                }
            break;
            case 'DELETE':
                if(isset($_GET['id'])){
                    if(SubComentarios::delete($_GET['id'])){
                        http_response_code(200);
                    }else{
                        http_response_code(400);
                    }
                }else{
                    http_response_code(405);
                }
            default:
            # code ...
            break;
    }
?>