<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Contact Us</h2>
        <?php include 'process.php'; ?>
        <form id="contact-form" action="process.php" method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" >
            <p style="color:red;"><?php echo $errors['name'] ?? ''; ?></p>

            <label for="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" >
            <p style="color:red;"><?php echo $errors['email'] ?? ''; ?></p>

            <label for="message">Message:</label>
            <textarea name="message" id="message" placeholder="Write your message here..." ></textarea>
            <p style="color:red;"><?php echo $errors['message'] ?? ''; ?></p>

            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
