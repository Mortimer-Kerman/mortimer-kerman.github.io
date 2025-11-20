<?php
$title = "Planetar";
$icon = "/projects/icons/planetar.png";
$bgOverride = "/projects/planetar/exportedmap.jpg";
include "header.php"; ?>
<section class="project">
    <p>
        Planetar est un petit outil de génération de cartes de planètes en cours de développement.<br/>
        Fait en Java avec Swing et FlatLaf, il vous permet de générer des cartes de planètes en temps réel sur le GPU.
    </p>
    <div class="image-container">
        <img src="/projects/planetar/planetar.jpg" alt="Planetar" loading="lazy">
        <div class="caption">Vue 3D de la planète</div>
    </div>
    <div class="image-container">
        <img src="/projects/planetar/planetarmaps.jpg" alt="Planetar" loading="lazy">
        <div class="caption">Carte d'altitude</div>
    </div>
    <p>
        Vous pouvez paramétrer beaucoup d'aspects, comme le niveau de la mer, la couleur de la végétation, la quantité de montagnes...
        <br/><br/>
        Livré avec une vue 3D de la planète.
    </p>
    <div class="image-container">
        <img src="/projects/planetar/exportedmap.jpg" alt="Exported map" loading="lazy">
        <div class="caption">Un exemple de carte exportée</div>
    </div>
</section>
<h1 id="skills" class="linkcopy">Ce que ça m'a apporté</h1>
<div class="title-bar"></div>
<section>
    <ul>
        <li>Programmation Java avancée</li>
        <li>Utilisation de Swing pour créer des interfaces utilisateur</li>
        <li>Utilisation de FlatLaf pour des interfaces modernes</li>
        <li>Calculs procéduraux et génération procédurale (cartes de planètes)</li>
        <li>Traitement graphique temps réel côté GPU</li>
        <li>Optimisation des performances de rendu</li>
        <li>Conception d'outils techniques destinés aux utilisateurs</li>
    </ul>
</section>
<?php include "footer.php"; ?>
