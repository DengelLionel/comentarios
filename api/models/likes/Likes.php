<?php
require_once "../../connection/Connection.php";
class Likes{
    public static function getAll(){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM likes");
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'idlikes'=>$row->idlikes,
                    'idcomentario'=>$row->idcomentario,
                    'id'=>$row->id,
                    'fechahora'=>$row->fechahora
                ];
            }
            return $datos;
        }
        return $datos;
    }
    public static function getWhere($idLikes){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM likes WHERE idlikes=:idlikes");
        $query->bindParam(":idlikes",$idLikes,PDO::PARAM_INT);
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'idlikes'=>$row->idlikes,
                    'idcomentario'=>$row->idcomentario,
                    'id'=>$row->id,
                    'fechahora'=>$row->fechahora
                ];
            }
            return $datos;
        }
        return $datos;
    }

    public static function insert($idcomentario,$id,$fechahora){
        $dataBase=new Connection();
        try{ 
            $query=$dataBase->prepare("INSERT INTO likes(idcomentario,id,fechahora) VALUES(:idcomentario,:id,:fechahora)");
        $query->bindParam(":idcomentario",$idcomentario,PDO::PARAM_INT);
        $query->bindParam(":id",$id,PDO::PARAM_STR);
        $query->bindParam(":fechahora",$fechahora,PDO::PARAM_STR);
        $query->execute();
        return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
        
    }

    public static function update($idlikes,$idcomentario,$id,$fechahora){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("UPDATE likes SET idcomentario=:idcomentario,id=:id,fechahora=:fechahora WHERE idlikes=:idlikes");
            $update=[
            "idlikes"=>$idlikes,
            "idcomentario"=>$idcomentario,
            "id"=>$id,
            "fechahora"=>$fechahora
            ];
            $query->execute($update);
            return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
    }
    public static function delete($idlikes){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("DELETE FROM likes WHERE idlikes=:id");
        $query->bindParam(":id",$idlikes,PDO::PARAM_INT);
        $query->execute();
        return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
        
    }
}
?>