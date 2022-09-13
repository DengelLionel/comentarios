<?php
require_once "../../connection/Connection.php";
require_once "../../extras/Time_string.php";
class Join{
    
    public static function getCommentsAll(){
         try{
            $db=new Connection();
            $query=$db->prepare("SELECT users.id AS iduser,users.nombres AS nombreuser,comentarios.comentario AS comentariouser,comentarios.fechahora AS fechauser,users.perfil AS perfiluser,comentarios.idcomentario AS comentarioid FROM users  INNER JOIN comentarios ON users.id=comentarios.id ORDER BY comentarioid ASC");
            $query->execute();
            $datos=[];
            if($query->rowCount()){
                while($row=$query->fetch(PDO::FETCH_OBJ)){
                    $datos[]=[
                        "id"=>$row->iduser,
                        "nombre"=>$row->nombreuser,
                        "comentario"=>$row->comentariouser,
                        "fechahora"=>time_string($row->fechauser),
                        "perfil"=>$row->perfiluser,
                        "idcomentario"=>$row->comentarioid,
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