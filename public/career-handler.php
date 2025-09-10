<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Only POST requests allowed.');
}

$to = "kelly@venovox.com, dato.devan@venovox.com, troubleshoot@venovox.com";
$subject = 'VENOVOX: Career with Venovox';

$firstName = htmlspecialchars($_POST['firstName'] ?? '');
$lastName = htmlspecialchars($_POST['lastName'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($_POST['phone'] ?? '');
$linkedin = htmlspecialchars($_POST['linkedin'] ?? '');

// Build HTML message
$htmlMessage = "
<html>
<head>
<style>
    body { font-family: Arial, sans-serif; }
    .header { font-size: 18px; color: #b91c1c; }
    .info { margin-top: 10px; }
    .info label { font-weight: bold; color: #333; }
</style>
</head>
<body>
<div class='header'>New Career Submission</div>
<div class='info'>
    <p><label>Full Name:</label> {$firstName} {$lastName}</p>
    <p><label>Email:</label> {$email}</p>
    <p><label>Phone:</label> {$phone}</p>
    <p><label>LinkedIn:</label> {$linkedin}</p>
</div>
</body>
</html>
";

// Check for attachment
if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
    $tmpName = $_FILES['cv']['tmp_name'];
    $fileName = basename($_FILES['cv']['name']);
    $fileType = mime_content_type($tmpName);
    $fileData = chunk_split(base64_encode(file_get_contents($tmpName)));

    $boundary = md5(uniqid());

    // Headers for multipart email
    $headers = "From: Venovox Careers <no-reply@venovox.com>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Email body with attachment
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $htmlMessage . "\r\n";

    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $fileData . "\r\n";
    $body .= "--$boundary--";

    mail($to, $subject, $body, $headers);
} else {
    // Simple HTML-only email
    $headers = "From: Venovox Careers <no-reply@venovox.com>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to, $subject, $htmlMessage, $headers);
}

http_response_code(200);
echo 'Success';
?>
