<?php
require_once "../../connection/Connection.php";
class SubComentarios{
    public static function getAll(){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM subcomentarios");
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'idsubcomentarios'=>$row->idsubcomentarios,
                    'idcomentario'=>$row->idcomentario,
                    'id'=>$row->id,
                    'subcomentario'=>$row->subcomentario,
                    'fechahora'=>$row->fechahora
                ];
            }
            return $datos;
        }
        return $datos;
    }
    public static function getWhere($idsubcomentario){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM subcomentarios WHERE idsubcomentarios=:idsubcomentarios");
        $query->bindParam(":idsubcomentarios",$idsubcomentario,PDO::PARAM_INT);
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'idsubcomentarios'=>$row->idsubcomentarios,
                    'idcomentario'=>$row->idcomentario,
                    'id'=>$row->id,
                    'subcomentario'=>$row->subcomentario,
                    'fechahora'=>$row->fechahora
                ];
            }
            return $datos;
        }
        return $datos;
    }

    public static function insert($idcomentario,$id,$subcomentario,$fechahora){
        $dataBase=new Connection();
        try{ 
            $query=$dataBase->prepare("INSERT INTO subcomentarios(idcomentario,id,subcomentario,fechahora) VALUES(:idcomentario,:id,:subcomentario,:fechahora)");
        $query->bindParam(":idcomentario",$idcomentario,PDO::PARAM_INT);
        $query->bindParam(":id",$id,PDO::PARAM_STR);
        $query->bindParam(":subcomentario",$subcomentario,PDO::PARAM_STR);
        $query->bindParam(":fechahora",$fechahora,PDO::PARAM_STR);
        $query->execute();
        return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
        
    }

    public static function update($idsubcomentario,$idcomentario,$id,$subcomentario,$fechahora){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("UPDATE subcomentarios SET idcomentario=:idcomentario,id=:id,subcomentario=:subcomentario,fechahora=:fechahora WHERE idsubcomentarios=:idsubcomentarios");
            $update=[
            "idsubcomentarios"=>$idsubcomentario,
            "idcomentario"=>$idcomentario,
            "id"=>$id,
            "subcomentario"=>$subcomentario,
            "fechahora"=>$fechahora
            ];
            $query->execute($update);
            return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
    }
    public static function delete($idsubcomentario){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("DELETE FROM subcomentarios WHERE idsubcomentarios=:id");
        $query->bindParam(":id",$idsubcomentario,PDO::PARAM_INT);
        $query->execute();
        return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
        
    }
}
?>