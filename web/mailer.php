<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["nombreContacto"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $tel = trim($_POST["telContacto"]);
        $email = filter_var(trim($_POST["emailContacto"]), FILTER_SANITIZE_EMAIL);
        $asunto = trim($_POST["asuntoContacto"]);
        $message = trim($_POST["comentariosContacto"]);
        

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! Hubo un error con su envío. Por favor complete la forma y envíela de nuevo.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "lazaro.reyes@mixen.mx";

        // Set the email subject.
        $subject = "Contactar a $name";

        // Build the email content.
        $email_content = "Nombre: $name\n";
        $email_content .= "Tel: $tel\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Ausnto: $asunto\n\n";
        $email_content .= "Mensaje:\n$message\n";

        // Build the email headers.
        $email_headers = "De: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "¡Gracias! Su mensaje ha sido envíado.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Hubo un error no pudimos mandar su mensaje.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Hay un problema con su envío, por favor intentelo de nuevo.";
    }
