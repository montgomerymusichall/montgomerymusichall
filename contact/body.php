<div class="width-1024 container-fluid">
    <body class="contact">
        <?php include_once("../analyticstracking.php") ?>
        <section class="main row" id="container">
            <img src="../images/contactus.jpg" alt="fun image" class="contact-img col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12">
            <div class="form-container col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="error-container col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12"></div>
                <form action="" name="contactForm" class="col-lg-offset-1 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                    <fieldset class="row">
                        <div class="field-wrapper col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <label for="firstName">First Name</label>
                            <div class="input-wrapper">
                                <input type="text" name="firstName" maxlength="30"/>
                            </div>
                        </div>
                        <div class="field-wrapper col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <label for="lastName">Last Name</label>
                            <div class="input-wrapper">
                                <input type="text" name="lastName" maxlength="30"/>
                            </div>
                        </div>
                        <div class="field-wrapper col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <label for="email">Email</label>
                            <div class="input-wrapper">
                                <input type="email" name="email" autocomplete="off" maxlength="60"/>
                            </div>
                        </div>
                        <div class="field-wrapper col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <label for="message">Message</label>
                            <div class="input-wrapper">
                                <textarea name="message" autocomplete="off" maxlength="2000"></textarea>
                            </div>
                        </div>
                        <div class="field-wrapper col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <button type="button" class="contact-submit btn btn-primary">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    </body>
</div>