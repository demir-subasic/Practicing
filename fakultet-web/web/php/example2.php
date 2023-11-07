<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $aArray = array("Red", "Green", "Blue");
    foreach($aArray as $aValue){
        print("The current value is $aValue <br>");
    }

    $aColorArray = array (
        "Red" => "#FF000",
        "Green" => "#00FF00",
        "Blue" => "#0000FF"
    );
    foreach($aColorArray as $aKey => $aValue) 
    {
        print("The hex value of $aKey is $aValue <br>");
    };
    ?>
</body>
</html>