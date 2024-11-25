<?php

// Récupérer les données JSON envoyées via POST
$data = json_decode(file_get_contents("php://input"));

// Log des données reçues
error_log("Données reçues: " . print_r($data, true));

// Vérifier si les champs requis sont présents
if (isset($data->to) && isset($data->subject) && isset($data->message)) {
    $to = $data->to; // Destinataire
    $subject = $data->subject; // Sujet
    $message = $data->message; // Message
    $headers = "From: contact.pro@jonathanlauer.fr" . "\r\n" .
               "Reply-To: contact.pro@jonathanlauer.fr" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Log des informations de l'email
    error_log("Envoi de l'email vers: $to, Sujet: $subject");

    // Envoi de l'email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email envoyé avec succès."]);
    } else {
        // Si l'envoi échoue
        error_log("Erreur lors de l'envoi de l'email");
        echo json_encode(["status" => "error", "message" => "Échec de l'envoi de l'email."]);
    }
} else {
    // Si des paramètres sont manquants
    error_log("Paramètres manquants dans la requête.");
    echo json_encode(["status" => "error", "message" => "Paramètres manquants."]);
}
?>
