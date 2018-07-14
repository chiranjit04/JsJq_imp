public function boxDetail($privateKey)
{
            global $conn;

         $secretVal=$conn->prepare("select * from security_key where privateKey='".$privateKey."'");
         $secretVal->execute();
             if(count($secretVal->rowCount())>0)
{
         $rowSecret=$secretVal->fetch(PDO::FETCH_ASSOC);
                 //selecting data from monetiser
         $ boxVal=$conn->prepare("select * from monetiser where privateURL='".$privateKey."'");
              $boxVal->execute();
                     if(count($boxVal->rowCount())>0)
{
                                $rowBox=$boxVal->fetch(PDO::FETCH_ASSOC);
}
else
{
                                $rowBox=array();
}
                                $newArr=array_merge($rowSecret,$rowBox);
                                return $newArr;
}
else
{
return 0;
}

