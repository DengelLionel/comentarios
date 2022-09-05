<?php
require_once "../../connection/Connection.php";
class ComentarioPrincipal{
    public static function getAll(){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM comentarios");
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'idcomentario'=>$row->idcomentario,
                    'id'=>$row->id,
                    'fechahora'=>$row->fechahora,
                    'comentario'=>$row->comentario,
                ];
            }
            return $datos;
        }
        return $datos;
    }
    public static function getWhere($idComentario){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM comentarios WHERE idcomentario=:idcomentario");
        $query->bindParam(":idcomentario",$idComentario,PDO::PARAM_INT);
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'idcomentario'=>$row->idcomentario,
                    'id'=>$row->id,
                    'fechahora'=>$row->fechahora,
                    'comentario'=>$row->comentario,
                ];
            }
            return $datos;
        }
        return $datos;
    }

    public static function insert($id,$fechahora,$comentario){
        $dataBase=new Connection();
        try{ 
            $query=$dataBase->prepare("INSERT INTO comentarios(id,fechahora,comentario) VALUES(:id,:fechahora,:comentario)");
        $query->bindParam(":id",$id,PDO::PARAM_INT);
        $query->bindParam(":fechahora",$fechahora,PDO::PARAM_STR);
        $query->bindParam(":comentario",$comentario,PDO::PARAM_STR);
        $query->execute();
        return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
        
    }

    public static function update($idcomentario,$id,$fechahora,$comentario){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("UPDATE comentarios SET id=:id,fechahora=:fechahora,comentario=:comentario WHERE idcomentario=:idcomentario");
            $update=[
            "idcomentario"=>$idcomentario,
            "id"=>$id,
            "fechahora"=>$fechahora,
            "comentario"=>$comentario
            ];
            $query->execute($update);
            return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
    }
    public static function delete($idcomentario){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("DELETE FROM comentarios WHERE idcomentario=:id");
        $query->bindParam(":id",$idcomentario,PDO::PARAM_INT);
        $query->execute();
        return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
        
    }
}
?>