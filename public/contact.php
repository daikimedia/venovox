<?php
// contact.php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = htmlspecialchars($data['name'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? ''); // <- Added
    $subject = htmlspecialchars($data['subject'] ?? 'VENOVOX: Contact Us');
    $message = nl2br(htmlspecialchars($data['message'] ?? ''));

    $to = "kelly@venovox.com, dato.devan@venovox.com, troubleshoot@venovox.com";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Venovox Contact Us <$email>" . "\r\n";

    $htmlMessage = "
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; margin: auto; background: #f9f9f9; }
        h2 { color: #b91c1c; }
        p { margin: 10px 0; }
        strong { color: #111; }
      </style>
    </head>
    <body>
      <div class='container'>
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br/>$message</p>
      </div>
    </body>
    </html>";

    $success = mail($to, "New Contact Message: $subject", $htmlMessage, $headers);

    echo json_encode(["success" => $success]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Invalid request method"]);
