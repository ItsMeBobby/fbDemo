<?php
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');

if (!empty($username) || !empty($password) ) {
 $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "fb";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     
     $INSERT = "INSERT INTO fblite (user, password) values('$username','$password')";
     //Prepare statement
    if ($conn->query($INSERT) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $INSERT . "<br>" . $conn->error;
}
     $conn->close();
    }
} else {
 echo "All field are required";
 die();
}
?>