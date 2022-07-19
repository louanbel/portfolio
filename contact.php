<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

<head>
    <meta charset="utf-8" />
    <title>Contact - Louan Bélicaud</title>
    <meta name="description" content="Pour toute offre d'emploi, question par rapport au site, à mon parcours, etc. N'hésite pas à passer par ce formulaire de contact." />
    <meta name="keywords" content="contact, louan belicaud" />


    <!-- icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="image/icon.png">


    <!-- bootstrap -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="js/sc-projet.js"></script>
    <script src="js/app.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!-- fiches css -->
    <link href="style.css" rel="stylesheet" type="text/css" />
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NTSMM2K');
    </script>
    <!-- End Google Tag Manager -->
</head>

<?php
$message = " ";
if (isset($_POST['submit'])) {

    $msg = "Nom:\t" . $_POST['nom'] . "\n";
    $msg .= "E-Mail:\t" . $_POST['email'] . "\n";
    $msg .= "Profil:\t" . $_POST['profil'] . "\n";
    $msg .= "Message:\t\n" . $_POST['message'] . "\n\n";
    //Pourait continuer ainsi jusqu'à la fin du formulaire

    if (mail("contact@louanbelicaud.fr", "Contact de : " . $_POST['email'], $msg)) {
        $message = '<div class="alert alert-success" role="alert">Votre mail a bien été envoyé !</div>';
    } else {
        $message = '<div class="alert alert-danger" role="alert">Problème lors de l\'envoie du mail ! Veuillez réessayer plus tard.</div>';
    }
}

?>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTSMM2K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="container-fluid px-0">
        <!--<loading-bar></loading-bar>-->

        <header>
        </header>

        <!-- menu de navigation réduit-->
        <menu-burger></menu-burger>

        <!-- menu de navigation-->
        <nav-custom></nav-custom>

        <!-- Contenu du site / main -->
        <main>
            <div class="staticWindow px-0 col-11">
                <div class="bordure d-flex flex-row align-items-center">
                    <div id="r1"></div>
                    <div id="r2"></div>
                    <div id="r3"></div>
                    <h1>Contact</h1>
                </div>
                <p class="ml-4 mb-0"><strong>function <span class="rouge">getContact()</span></strong></p>
                <div class="insideWindowContent d-flex flex-column flex-nowrap">
                    <aside>
                        <span class="bleu">{</span>
                        <p class="mt-3">email : <span class="bleu">"</span><a class="lien" href="mailto:contact@louanbelicaud.fr">louanbelicaud63@gmail.com</a><span class="bleu">";</span></p>
                        <p>téléphone : <span class="rouge">07.87.19.56.50</span><span class="bleu">;</span></p>
                        <p>linkedin : <span class="bleu">"</span><a class="lien" href="https://linkedin.com/in/louan-belicaud/">linkedin.com/in/louan-belicaud/</a><span class="bleu">";</span></p>
                        <span class="bleu">}</span>
                    </aside>

                    <aside id="formulaire">
                        <form method="POST" action="#">
                            <label for="fname">Nom complet*</label>
                            <input type="text" id="fname" name="nom" placeholder="Insérez votre nom..." required>

                            <label for="fmail">Adresse mail*</label>
                            <input type="email" id="fmail" name="email" placeholder="Insérez votre email..." required>

                            <label for="profil">Vous êtes...</label>
                            <select id="profil" name="profil">
                                <option value="Recruteur">Recruteur</option>
                                <option value="Recruteur">Professeur</option>
                                <option value="Développeur">Développeur</option>
                                <option value="Autre">Autre</option>
                            </select>

                            <label for="subject">Sujet*</label>
                            <textarea id="subject" name="message" placeholder="Ecrivez le message.." style="height:200px"></textarea>

                            <input class="btn-success" type="submit" name="submit" value="Envoyer">
                            <p>* Ce champs est obligatoire.</p>
                            <?php echo $message; ?>
                        </form>

                    </aside>

                </div>
            </div>

        </main>

        <footer>
        </footer>
    </div>



</body>