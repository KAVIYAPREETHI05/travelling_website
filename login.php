<?php
require_once "db_config.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") 
{
    $user_id = $_POST['user_id'];
    $password = $_POST['password'];

    $SELECT = "SELECT * FROM register WHERE user_id = ? LIMIT 1";

    $stmt = $conn->prepare($SELECT);
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) 
    {
        $row = $result->fetch_assoc();
        $storedPassword = $row['password'];

        if ($password === $storedPassword) 
        {
            header("Location: Main.html");
            exit;
        }
        else
        {
            header("Location: login.html");
            echo "<script>window.alert('Incorrect password');</script>";
        }
    } 
    else 
    {
        header("Location: login.html");
        echo "<script>window.alert('No user found with this email');</script>";
    }
    $stmt->close();
    $conn->close();
}
?>