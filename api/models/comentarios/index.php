<?php
require_once "./ComentarioPrincipal.php";
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            if(isset($_GET['id'])){
                echo json_encode(ComentarioPrincipal::getWhere($_GET['id']));
            }else{
                echo json_encode(ComentarioPrincipal::getAll());
            }
            
            break;
            case 'POST':
                $datos=json_decode(file_get_contents('php://input'));
                
                if($datos != NULL){
                    if(ComentarioPrincipal::insert($datos->id, $datos->fechahora, $datos->comentario)){
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
                    if(ComentarioPrincipal::update($datos->idcomentario,$datos->id, $datos->fechahora, $datos->comentario)){
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
                    if(ComentarioPrincipal::delete($_GET['id'])){
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