<?php
function time_string($timestring,$full=false){
    
    $now= new DateTime();
   
    $ago=new DateTime($timestring);
    $diff=$now->diff($ago);

    $diff->w=floor($diff->d/7);
   
    $diff->d-=$diff->w*7;

    $string=array('y'=>'year','m'=>'month','w'=>'week','d'=>'day','h'=>' hour','i'=>'minute','s'=>'second');
    foreach($string as $a=>&$v){ 
        if($diff->$a){
            $v=$diff->$a.' '.$v.($diff->$a > 1?'s':'');
        }else{
            unset($string[$a]);
        }
    }
    if(!$full) $string=array_slice($string,0,1);
    return $string?implode(', ',$string).' ago ':'just now';
}
?>