<!--
/**
 Copyright (c) 2013, Sergej Schefer
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. All advertising materials mentioning features or use of this software
 must display the following acknowledgement:
 This product includes software developed by Sergej Schefer.
 4. Neither the name of Sergej Schefer nor the
 names of its contributors may be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY SERGEJ SCHEFER ''AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL SERGEJ SCHEFER BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
 -->
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<link href="style.css" type="text/css" rel="stylesheet" />
<head>
    <title>Register</title>
</head>
<body>

<?php

if(isset($_POST['submit'])){

    $usernameclass = "form-ok";
    $firstnameclass = "form-ok";
    $lastnameclass = "form-ok";
    $emailclass = "form-ok";
    $phoneclass = "form-ok";

    $firstnamecontent = $_POST['firstname'];
    $lastnamecontent = $_POST['lastname'];
    $usernamecontent = $_POST['username'];
    $emailcontent = $_POST['email'];
    $phonecontent = $_POST['phone'];

    if($_POST['firstname'] == null){
        $firstname = "Please enter your first name!";
        $firstnameclass = "form-error";
    }else{
        $firstname = "Correct!";
    }

    if($_POST['lastname'] == null){
        $lastname = "Please enter your last name!";
        $lastnameclass = "form-error";
    }else{
        $lastname = "Correct";
    }

    if($_POST['username'] == null){
        $username = "Please enter your user name!";
        $usernameclass = "form-error";
    }else{
        $username = "Correct!";
    }

    if($_POST['email'] == null){
        $email = "Please enter your email!";
        $emailclass = "form-error";
    }else{

        if(strpos($_POST['email'], "@")){
            $email = "Correct!";
        }else{
            $email = "Your Email is not valid!";
            $emailclass = "form-error";
        }
    }

    if($_POST['phone'] == null){
        $phone = "Please enter your phone number!";
        $phoneclass = "form-error";
    }else{
        if(is_numeric($_POST['phone'])){
            $phone = "Correct!";
        }else{
            $phoneclass = "form-error";
            $phone = "Please enter a VALID number!";
        }
    }
}


?>


<div id="wrapper">
    <form name="register" action="" method="POST">
        <div class="formtext">First name:</div> <input type="text" name="firstname" value="<?php echo $firstnamecontent ?>""> <div id="firstname" class=<?php echo $firstnameclass?>> <?php echo $firstname ?> </div><br>
        <div class="formtext">Last name:</div> <input type="text" name="lastname" value="<?php echo $lastnamecontent ?>"><div id="lastname" class=<?php echo $lastnameclass?>> <?php echo $lastname ?> </div><br>
        <div class="formtext">Username:</div> <input type="text" name="username" value="<?php echo $usernamecontent ?>""><div id="username" class=<?php echo $usernameclass?>> <?php echo $username ?> </div><br>
        <div class="formtext">E-Mail:</div> <input type="text" name="email" value="<?php echo $emailcontent ?>"><div id="email" class=<?php echo $emailclass?>> <?php echo $email ?> </div><br>
        <div class="formtext">Phone:</div> <input type="text" name="phone"  value="<?php echo $phonecontent ?>"><div id="phone" class=<?php echo $phoneclass?>> <?php echo $phone ?> </div><br>
        <input type="checkbox" name="politics" value="Politics"> Politics <br>
        <input type="checkbox" name="sports" value="Sports"> Sports <br>
        <input type="radio" name="frequency" value="daily"> daily <br>
        <input type="radio" name="frequency" value="weekly"> weekly <br>
        <input type="submit" name="submit" value="Get Newsletter" onclick="checkRadiobuttons('firstname')"> <br>
    </form>
</div>
</body>
</html>