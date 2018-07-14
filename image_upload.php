if(isset($_POST['insert']))
{Image upload with insertion of other data
$coinImg=$_FILES['coin_image'];Image upload with insertion of other data
$imagArr=array('jpg','png','jpeg','gif');
$imgType=$coinImg['type'];
$imageName=$coinImg['name'];
$imgExt=pathinfo($imageName,PATHINFO_EXTENSION);
$fileSize=$coinImg['size'];

$path='upload/';
$path=$path.date('ymdHis').".".$imgExt;
if(in_array($imgExt, $imagArr)) 
{
if($fileSize>=1024)
{
if(move_uploaded_file($_FILES['coin_image']['tmp_name'], $path))
{
$coin_image=$path;
$coin_name=$_POST['coin_name'];
$coin_abb=$_POST['coin_abbrv'];
$coinCreat=$objcoinManager->coinInsert($coin_name,$coin_image,$coin_abb);
if($coinCreat>0)
{
header('location:coin_manager.php?i=yes');
}
else
{
header('location:coin_insert.php?i=fail');
}

}
else
{
echo "file not uploded";
}
}
else
{
echo "Image size should be less then 1024kb";
}
}
else
{
echo "Please upload valid image";
} 
}

?>

To show the message whether success or unsuccess (in the form page)

<?php
if(isset($_REQUEST['i']))
{
if($_REQUEST['i']=="yes")
{?>
<div class="success-msg">
<i class="fa fa-check"></i>
<?php echo "Successfully coin added";?>
</div>
<?php
}
}
?>

<?php
if(isset($_REQUEST['i']))
{
if($_REQUEST['i']=="fail")
{
?>
<div class="warning-msg">
<i class="fa fa-warning"></i>
<?php echo "Unsuccessfull Insertion";?>
</div>
<?php
}
}
?>
