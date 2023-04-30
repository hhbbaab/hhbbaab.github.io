<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $title = $_POST["title"];
    $author = $_POST["author"];
    $content = $_POST["content"];

    // Code to insert post into database or file system goes here...

    header("Location: index.php");
}

?>
