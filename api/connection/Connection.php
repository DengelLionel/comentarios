<?php
    class Connection extends PDO {
        private $password="";
        private $user="root";
        private $options=[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_EMULATE_PREPARES=>false];
        private $dsn="mysql:dbname=comments;host=localhost;charset=UTF8";
        function __construct()
        {
            try{
                parent::__construct($this->dsn,$this->user,$this->password,$this->options);
            }catch(PDOException $e){
                echo "Fallo la conexion".$e->getMessage();
            }
            

        }
    }
?>