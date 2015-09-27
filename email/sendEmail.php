<?php
    if(!empty($_POST['email']) && !empty($_POST['email'])) {
        $to = "unifiedaudiosolutions@gmail.com";
        $from = $_POST['email'];
        $firstname = $_POST['firstName'];
        $lastname = $_POST['lastName'];
        $subject = "Contact message from www.montgomerymusichall.com";
        $message = $firstname . " " . $lastname . " wrote the following:" . "\n\n" . $_POST['message'];

        $headers = "From:" . $from;
        mail($to,$subject,wordwrap($message, 70, "\r\n"),$headers);

        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('success' => false, 'message' => 'We\'re sorry but there seems to have been an issue sending the email.  We really would like to hear from you so please try again or email us directly at customerservice@montgomerymusichall.com.'));
    }
?>