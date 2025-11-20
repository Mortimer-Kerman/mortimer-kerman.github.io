<?php
$title = "Mon portfolio";
$icon = "photo.jpg";
include "header.php"; ?>
<style>
	.buddiesPP img {
		border-radius: 10%;
	}
</style>
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
<section class="buddies-gallery">
	<div class="buddiesPP">
		<p>Cosmos Wanderer</p>
		<a href="cosmoswanderer.php" target="_blank" rel="noopener noreferrer">
			<img src="/projects/icons/cosmoswanderer.png"></a>
		<div>Jeu vidéo mobile</div>
	</div>
	<div class="buddiesPP">
		<p>SpaceFactory</p>
		<a href="spacefactory.php" target="_blank" rel="noopener noreferrer">
			<img src="/projects/icons/spacefactory.png"></a>
		<div>Factory game spatial</div>
	</div>
	<div class="buddiesPP">
		<p>Planetar</p>
		<a href="planetar.php" target="_blank" rel="noopener noreferrer">
			<img src="/projects/icons/planetar.png"></a>
		<div>Logiciel de génération de cartes</div>
	</div>
	<div class="buddiesPP">
		<p>Bobby's Tiny Planets</p>
		<a href="bobbytinyplanets.php" target="_blank" rel="noopener noreferrer">
			<img src="/projects/icons/bobbytinyplanets.png"></a>
		<div>Jeu de puzzle 3D</div>
	</div>
	<div class="buddiesPP">
		<p>Defense</p>
		<a href="defense.php" target="_blank" rel="noopener noreferrer">
			<img src="/projects/icons/defense.png"></a>
		<div>Mod Minecraft</div>
	</div>
	<div class="buddiesPP">
		<p>Mineterstellar</p>
		<a href="mineterstellar.php" target="_blank" rel="noopener noreferrer">
			<img src="/projects/icons/mineterstellar_square.png"></a>
		<div>Mod Minecraft</div>
	</div>
</section>
<?php include "footer.php"; ?>
