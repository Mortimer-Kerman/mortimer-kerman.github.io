<?php
$title = "Mon portfolio";
$icon = "photo.jpg";
include "header.php"; ?>
<section>
	<p>
		Bonjour, je suis Thomas Sartre.<br/>
		Étudiant en deuxième année de BUT informatique à l'IUT de Vannes, je suis aussi développeur sur mon temps libre.<br/>
		Sur cette page web, je vous présenterai un portfolio de divers projets, présents et passés.<br/>
		<br/><br/>
		Bonne lecture!
	</p>
	<div class="alignedBlocksContainer">
		<div class="alignedBlock">
			<h3>Langages maîtrisés:</h3>
			<ul>
				<li>C</li>
				<li>C#</li>
				<li>Java</li>
				<li>Python</li>
				<li>HTML/CSS</li>
				<li>JavaScript</li>
				<li>Markdown</li>
			</ul>
		</div>
		<div class="alignedBlock">
			<h3>Outils maîtrisés:</h3>
			<ul>
				<li>Visual Studio</li>
				<li>VSCode</li>
				<li>IntelliJ</li>
				<li>Spyder</li>
				<li>Pygame</li>
				<li>Unity</li>
				<li>Minecraft Forge</li>
				<li>Fabric</li>
				<li>.NET</li>
				<li>Winforms</li>
				<li>Godot</li>
				<li>Java Swing</li>
				<li>JavaFX</li>
				<li>Github</li>
			</ul>
		</div>
		<div class="alignedBlock">
			<h3>Langages en cours d'acquisition:</h3>
			<ul>
				<li>OCaml</li>
				<li>C++</li>
				<li>PHP</li>
				<li>SQL</li>
				<li>LUA</li>
				<li>HLSL</li>
			</ul>
		</div>
	</div>
</section>
<h1 id="projects" class="linkcopy">Mes projets</h1>
<div class="title-bar"></div>
<section>
	<section class="project">
		<img src="/projects/icons/cosmoswanderer.png" loading="lazy" class="project-icon">
		<h2 id="projects-cosmoswanderer" class="linkcopy">Cosmos Wanderer</h2>
		<div class="image-container">
			<img src="/projects/cosmoswanderer/cosmoswanderer.jpg" alt="Cosmos Wanderer" loading="lazy">
			<div class="caption">Cosmos Wanderer</div>
		</div>
		<p>
			Cosmos Wanderer est un jeu mobile de shooter spatial en développement.<br/>
			Vous pouvez prendre le contrôle d'un vaisseau spatial et naviguer entre des astéroïdes et d'autres obstacles, comme des vaisseaux ennemis, des débris, des missiles à tête chercheuse...
		</p>
		<div class="image-container">
			<img src="/projects/cosmoswanderer/lowaction.jpg" alt="low action" loading="lazy">
			<div class="caption">Faible action</div>
		</div>
		<div class="image-container">
			<img src="/projects/cosmoswanderer/highaction.jpg" alt="high action" loading="lazy">
			<div class="caption">Haute action</div>
		</div>
		<p>
			Vous pouvez aussi améliorer votre vaisseau, obtenir des nouveaux skins, réaliser des succès...<br/>
			Il sera disponique gratuitement sur le Google Play Store.
		</p>
		<div class="image-container">
			<img src="/projects/cosmoswanderer/maxaction.jpg" alt="max action" loading="lazy">
			<div class="caption">Action maximale !</div>
		</div>
		<p>
			Musiques par <a href="https://youtube.com/@WhiteBatAudio" target="_blank" rel="noopener noreferrer">Carl Casey @White Bat Audio</a>
		</p>
	</section>
	<div class="small-title-bar"></div>
	<section class="project">
		<img src="/projects/icons/spacefactory.png" loading="lazy" class="project-icon theme-sensitive">
		<h2 id="projects-spacefactory" class="linkcopy">SpaceFactory</h2>
		<p>
			SpaceFactory était un projet de groupe fait pour l'édition 2023 des Trophées NSI, une compétition entre les classes de NSI de première et de teminale sur toute la France.<br/>
			Fait en python avec Pygame, c'est un factory game dans l'espace, où vous pouvez bâtir votre propre usine pour extraire et raffiner des ressources.<br/>
		</p>
		<div class="image-container">
			<img src="/projects/spacefactory/spacefactory.jpg" alt="SpaceFactory" loading="lazy">
			<div class="caption">Un jour ordinaire sur SpaceFactory</div>
		</div>
		<div class="image-container">
			<img src="/projects/spacefactory/buildmenu.jpg" alt="build menu" loading="lazy">
			<div class="caption">Le menu de construction</div>
		</div>
		<div class="image-container">
			<img src="/projects/spacefactory/opportunities.jpg" alt="opportunities" loading="lazy">
			<div class="caption">Le menu d'opportunités</div>
		</div>
		<p>
			SpaceFactory a été élu meilleur projet Terminale de la région Bretagne.
		</p>
		<p>
			<a href="https://github.com/Mortimer-Kerman/SpaceFactory" target="_blank" rel="noopener noreferrer">Dépôt GitHub</a><br/>
			<a href="https://trophees-nsi.fr/" target="_blank" rel="noopener noreferrer">Site officiel des Trophées NSI</a>
		</p>
	</section>
	<div class="small-title-bar"></div>
	<section class="project">
		<img src="/projects/icons/planetar.png" loading="lazy" class="project-icon">
		<h2 id="projects-planetar" class="linkcopy">Planetar</h2>
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
	<div class="small-title-bar"></div>
	<section class="project">
		<img src="/projects/icons/bobbytinyplanets.png" height="100px" loading="lazy" class="project-icon">
		<h2 id="projects-bobbytinyplanets" class="linkcopy">Bobby's Tiny Planets</h2>
		<p>
			Bobby's Tiny Planets est un jeu vidéo de puzzles fait sous Godot.<br/>
			Propulsé dans un monde à la gravité déroutante, prenez le contrôle de Bobby, un petit robot, pour l'amener jusqu'à sa fusée dans des dizaines de puzzles variés!
		</p>
		</p>
		<div class="image-container">
			<img src="/projects/bobbytinyplanets/hi.png" alt="Hollow Knight" loading="lazy">
			<div class="caption">Dis bonjour, Bobby !</div>
		</div>
		<div class="image-container">
			<img src="/projects/bobbytinyplanets/thinking.png" alt="Hollow Knight" loading="lazy">
			<div class="caption">Tu as bien une petite idée ?</div>
		</div>
		<div class="image-container">
			<img src="/projects/bobbytinyplanets/editor.png" alt="Hollow Knight" loading="lazy">
			<div class="caption">Inclus : un éditeur de niveau complet !</div>
		</div>
		<p>
			Bobby arrivera prochainement sur Steam!
		</p>
		<div class="image-container">
			<img src="/projects/bobbytinyplanets/bobbyheart.png" alt="Hollow Knight" loading="lazy">
		</div>
	</section>
	<div class="small-title-bar"></div>
	<section class="project">
		<img src="/projects/icons/defense.png" height="100px" loading="lazy" class="project-icon">
		<h2 id="projects-defense" class="linkcopy">Defense</h2>
		<p>
			Defense est un mod Minecraft pour permettre aux joueurs de désactiver le PVP.<br/>
			Disponible pour Minecraft 1.21+, il ajoute un bouton pour basculer le PVP dans l'inventaire survie.
		</p>
		<div class="image-container">
			<img src="/projects/defense/defense.jpg" alt="Defense" loading="lazy">
		</div>
		<p>
			Quand il est allumé, il reste actif pour une durée configurable vous protégeant de toutes les attaques de joueurs, et une icône s'affiche à côté de votre pseudo, visible par tous les joueurs !
		</p>
		<div class="image-container">
			<img src="/projects/defense/toggle.jpg" alt="Defense" loading="lazy">
			<div class="caption">Le bouton d'activation</div>
		</div>
		<div class="image-container">
			<img src="/projects/defense/icons.jpg" alt="Defense" loading="lazy">
			<div class="caption">Le menu de sélection des icônes</div>
		</div>
		<p>
			Ce mod a été créé à l'origine pour le youtubeur Knarfy, pour le Empty World SMP.
		</p>
		<p>
			<a href="https://github.com/Mortimer-Kerman/Defense" target="_blank" rel="noopener noreferrer">Dépôt GitHub</a><br/>
			<a href="https://youtu.be/mpuUZzXjm7I" target="_blank" rel="noopener noreferrer">Vidéo de présentation de Knarfy</a><br/>
			<a href="https://modrinth.com/mod/defense" target="_blank" rel="noopener noreferrer">Page Modrinth de Defense</a>
		</p>
	</section>
	<div class="small-title-bar"></div>
	<section class="project">
		<img src="/projects/icons/mineterstellar.png" loading="lazy" class="project-icon theme-sensitive">
		<h2 id="projects-mineterstellar" class="linkcopy">Mineterstellar</h2>
		<p>
			Mineterstellar est un mod Minecraft recréant dans Minecraft le film Interstellar, de Christopher Nolan.<br/>
			Il ajoute les planètes, les combinaisons spatiales, TARS, la musique, et les environnements du film.
		</p>
		<div class="image-container">
			<img src="/projects/mineterstellar/mann1.jpg" alt="Mineterstellar" loading="lazy">
			<div class="caption">La planète de Mann</div>
		</div>
		<div class="image-container">
			<img src="/projects/mineterstellar/miller.jpg" alt="Mineterstellar" loading="lazy">
			<div class="caption">La planète de Miller</div>
		</div>
		<p>
			J'ai démarré ce projet il y a plusieurs années pour Minecraft Forge 1.12.2.<br/>
			Avec les années, cette version est devenue de plus en plus obsolète, et mon mod accumulait une énorme dette technique.<br/>
			C'est pourquoi j'ai décidé en Août 2024 de le refaire entièrement depuis zéro pour Fabric 1.21.
		</p>
		<div class="image-container">
			<img src="/projects/mineterstellar/edmund.jpg" alt="Mineterstellar" loading="lazy">
			<div class="caption">La planète d'Edmund</div>
		</div>
		<div class="image-container">
			<img src="/projects/mineterstellar/mann2.jpg" alt="Mineterstellar" loading="lazy">
			<div class="caption">TARS sur la planète de Mann</div>
		</div>
		<div class="image-container">
			<img src="/projects/mineterstellar/mann3.jpg" alt="Mineterstellar" loading="lazy">
			<div class="caption">Il ne manque plus que la musique</div>
		</div>
		<p>
			<a href="/mineterstellar-blog">Blog de développement de Mineterstellar</a><br/>
			<a href="https://www.curseforge.com/minecraft/mc-mods/mineterstellar-interstellar-in-minecraft" target="_blank" rel="noopener noreferrer">Page Curseforge originale de Mineterstellar</a><br/>
		</p>
	</section>
</section>
<?php include "footer.php"; ?>
