<?php
require_once "../../../connection/Connection.php";
class SubComentarioFinal{
    public static function getAll(){
        $bd=new Connection();
        try{
            $query=$bd->prepare("SELECT users.id AS iduser, users.nombres AS nombreuser, users.perfil AS perfiluser,comentarios.idcomentario AS idcomentarios,subcomentarios.fechahora AS subcomentariofecha,subcomentarios.idsubcomentarios AS idsubc,subcomentarios.subcomentario AS subcomentariofinal FROM users INNER JOIN subcomentarios ON users.id=subcomentarios.id INNER JOIN comentarios ON comentarios.idcomentario=subcomentarios.idcomentario");
        $query->execute();
        $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    "iduser"=>$row->iduser,
                    "nombreuser"=>$row->nombreuser,
                    "perfiluser"=>$row->perfiluser,
                    "idcomentarios"=>$row->idcomentarios,
                    "subcomentariofecha"=>$row->subcomentariofecha,
                    "idsubc"=>$row->idsubc,
                    "subcomentariofinal"=>$row->subcomentariofinal,
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