<!DOCTYPE html>

<?php  // set defaults if not already set
    $title = isset($title) ? $title : 'Great Music | Great Atmosphere | Great Company | Montgomery Music Hall';
    $head = isset($head) ? $head : 'head.php';
    $header = isset($header) ? $header : 'header.php';
    $body = isset($body) ? $body : 'home/body.php';
    $footer = isset($footer) ? $footer : 'footer.php';
?>

<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0,maximum-scale = 1.0">
        <title><?=$title;?></title>
        <?php
            include $head;
            
            if(isset($headinclude)) {
                include $headinclude;    
            }
        ?>
    </head>
    
    <?php include $header;?>

    <?php include $body;?>

    <?php include $footer;?>
</html>