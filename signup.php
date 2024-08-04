<?php
require_once "db_config.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $user_id = $_POST['user_id'];
    $email_id = $_POST['email_id'];
    $password = $_POST['password'];

    $SELECT = "SELECT user_id FROM register WHERE user_id = ? LIMIT 1";
    $INSERT = "INSERT INTO register (user_id, email_id, password) VALUES (?, ?, ?)";

    $stmt = $conn->prepare($SELECT);
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $stmt->store_result();
    $rnum = $stmt->num_rows;

    if ($rnum == 0) 
    {
        $stmt->close();

        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("sss", $user_id, $email_id, $password);

        if ($stmt->execute()) {
            header("Location: login.html");
            exit;
        } 
        else 
        {
            echo "Error: " . $stmt->error;
        }
    } 
    else 
    {
        echo "Record already exists with this User ID.";
    }

    $stmt->close();
    $conn->close();
}
?>