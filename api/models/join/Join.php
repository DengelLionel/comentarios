<?php
require_once "../../connection/Connection.php";
class Join{
    public static function getCommentsAll(){
         try{
            $db=new Connection();
            $query=$db->prepare("SELECT users.id AS iduser,users.nombres AS nombreuser,comentarios.comentario AS comentariouser,comentarios.fechahora AS fechauser FROM users INNER JOIN comentarios ON users.id=comentarios.id");
            $query->execute();
            $datos=[];
            if($query->rowCount()){
                while($row=$query->fetch(PDO::FETCH_OBJ)){
                    $datos[]=[
                        "id"=>$row->iduser,
                        "nombre"=>$row->nombreuser,
                        "comentario"=>$row->comentariouser,
                        "fechahora"=>$row->fechauser,
                    ];
                    
                }
                return $datos;
            }
            return $datos;
         }catch(PDOException $e){
             echo "ERROR ".$e->getMessage();
         }
    }
}
?>