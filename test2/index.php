<?php

/** database config **/
$dbuser = "webtech";
$dbname = "webtech";
$dbpw = "webtech";
$dbhost = "localhost";

/** connect to database **/
$connection = mysql_connect($dbhost, $dbuser, $dbpw) or die("Could not connect to the database!");
$database = mysql_select_db($dbname, $connection) or die("Database does not exist");

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $description = $_POST['description'];
    $sum = $_POST['sum'];
    $type = $_POST['type'];

    /** insert values into the db **/
    $query = "INSERT INTO kasse (id, name, description, sum, type) VALUES (0, '".$name."', '".$description."', '".$sum."', '".$type."')";
    $q = mysql_query($query, $connection);
}

function getMyType($para){
    if($para == 0){
        return "Einzahlung";
    }else if($para == 1){
        return "Auszahlung";
    }
};

?>

<!-- Layout -->
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<link href="css/style.css" type="text/css" rel="stylesheet" />
<head>
    <title>Register</title>
</head>
<body>

<div id="wrapper">
    <form name="register" action="" method="POST">
        <input type="text" name="name" placeholder="Name"><br>
        <input type="text" name="description" placeholder="Beschreibung"><br>
        <input type="text" name="sum" placeholder="Betrag"><br>
        <select type="text" name="type">
            <option value="0">Einzahlung</option>
            <option value="1">Auszahlung</option>
        </select>
        <br>
        <input type="submit" name="submit" value="Abschicken"> <br>
    </form>

    <!--- Hier Datenbankausgabe -->
    <?php
        $query = mysql_query("SELECT * FROM kasse");
        while($data = mysql_fetch_assoc($query)){
            echo $data['id'] . " " . $data['name'] . " " . $data['description'] . " " . $data['sum'] . " " . getMyType($data['type']) .  "<br>";
        }
    ?>
</div>
</body>
</html>
