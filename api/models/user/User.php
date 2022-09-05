<?php
require_once "../../connection/Connection.php";
class User{
    public static function getAll(){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM users");
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'id'=>$row->id,
                    'nombres'=>$row->nombres,
                    'perfil'=>$row->perfil,
                    'correo'=>$row->correo,
                    'contrasena'=>$row->contrasena,
                ];
            }
            return $datos;
        }
        return $datos;
    }

    public static function getWhere($idUser){
        $dataBase=new Connection();
        $query=$dataBase->prepare("SELECT*FROM users WHERE id=:iduser");
        $query->bindParam(":iduser",$idUser,PDO::PARAM_INT);
        $query->execute();
       $datos=[];
        if($query->rowCount()){
            while($row=$query->fetch(PDO::FETCH_OBJ)){
                $datos[]=[
                    'id'=>$row->id,
                    'nombres'=>$row->nombres,
                    'perfil'=>$row->perfil,
                    'correo'=>$row->correo,
                    'contrasena'=>$row->contrasena,
                ];
            }
            return $datos;
        }
        return $datos;
    }

    public static function  insert($nombres,$perfil,$correo,$contrasena){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("INSERT INTO users(nombres,perfil,correo,contrasena) VALUES (:nombres,:perfil,:correo,:contrasena)");
            $query->bindParam(":nombres",$nombres,PDO::PARAM_STR);
            $query->bindParam(":perfil",$perfil,PDO::PARAM_STR);
            $query->bindParam(":correo",$correo,PDO::PARAM_STR);
            $query->bindParam(":contrasena",$contrasena,PDO::PARAM_STR);
            $query->execute();
            return TRUE;
        }catch(PDOException $e){
            echo "error ".$e->getMessage();
            return FALSE;
        }
       
    }

    public static function  update($iduser,$nombres,$perfil,$correo,$contrasena){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("UPDATE  users SET nombres=:nombres,perfil=:perfil,correo=:correo,contrasena=:contrasena WHERE id=:iduser");
            $actualizar=[
                "iduser"=>$iduser,
                "nombres"=>$nombres,
                "perfil"=>$perfil,
                "correo"=>$correo,
                "contrasena"=>$contrasena
            ];
            $query->execute($actualizar);
            return TRUE;
        }catch(PDOException $e){
            echo "ERROR".$e->getMessage();
            return FALSE;
        }
     
    }

    public static function delete($iduser){
        $dataBase=new Connection();
        try{
            $query=$dataBase->prepare("DELETE FROM users WHERE id=:id");
            $query->bindParam(":id",$iduser,PDO::PARAM_INT);
            $query->execute();
            return TRUE;
        }catch(PDOException $e){
            echo "ERROR ".$e->getMessage();
            return FALSE;
        }
       
       
    }
}
?>