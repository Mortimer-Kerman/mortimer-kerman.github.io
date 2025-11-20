<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Thomas Sartre - Portfolio</title>
		<meta name="author" content="Thomas Sartre"/>
		<meta name="description" content="Mon portfolio de projets"/>
		<meta property="og:url" content="https://mortimer-kerman.fr/portfolio/"/>
		<meta property="og:title" content="Mon portfolio de projets"/>
		<meta property="og:description" content="Mon portfolio de projets"/>
		<meta property="og:image" content="/icon.png"/>
		<meta name="robots" content="noindex" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/index.css" />
		<link rel="icon" type="image/png" sizes="583x583" href="/icon.png"/>
	</head>
	<body>
		<?php if (isset($bgOverride)): ?>
			<div class="fixed-background" style='--bg-image: url("<?= $bgOverride ?>")'>
		<?php else: ?>
			<div class="fixed-background">
		<?php endif; ?>
		<div class="fixed-background">
			<div class="content">
				<div class="pp_container" width="200px">
					<img class="pp" src=<?= $icon ?> alt="Icône" width="200px"/>
				</div>
				<h1 class="top-title"><?= $title ?></h1>
				<div class="top-content">
					<div class="navbar-open scriptonly" onclick="openNavBar()" style="cursor: pointer;">&#9776;</div>
					<div class="navbuttons-container">
						<a onclick="closeNavBar()" style="cursor: pointer;"><svg class="navbar-close scriptonly" width="30px" height="30px"><use href="/sprites.svg#close"/></svg></a>
						<a desc="Mortimer-Kerman" href="https://github.com/Mortimer-Kerman" target="_blank" rel="noopener noreferrer">
							<svg class="github-logo" width="30px" height="30px">
								<use href="/sprites.svg#github"/>
							</svg>
						</a>
						<a desc="mortimer_kerman" onclick="copyDiscordID('mortimer_kerman')" style="cursor: pointer;">
							<svg class="discord-logo" width="30px" height="30px">
								<use href="/sprites.svg#discord"/>
							</svg>
						</a>
						<a desc="Mortimer_Kerman" href="https://reddit.com/u/Mortimer_Kerman" target="_blank" rel="noopener noreferrer">
							<svg class="reddit-logo" width="30px" height="30px">
								<use class="circle" href="/sprites.svg#reddit-circle"/>
								<use class="face" href="/sprites.svg#reddit-icon"/>
							</svg>
						</a>
						<a desc="Mortimer-Kerman" href="https://modrinth.com/user/Mortimer-Kerman" target="_blank" rel="noopener noreferrer">
							<svg class="modrinth-logo" width="30px" height="30px">
								<use href="/sprites.svg#modrinth"/>
							</svg>
						</a>
						<a desc="mortimer_kerman" href="https://www.curseforge.com/members/mortimer_kerman/projects" target="_blank" rel="noopener noreferrer">
							<svg class="curseforge-logo" width="30px" height="30px"><use href="/sprites.svg#curseforge"/>
							</svg>
						</a>
						<!--<a desc="Mortimer-Kerman" href="https://gitlab.com/Mortimer-Kerman" target="_blank" rel="noopener noreferrer">
							<svg class="gitlab-logo" width="30px" height="30px">
								<use class="gitlab-1" href="/sprites.svg#gitlab-1"/>
								<use class="gitlab-2" href="/sprites.svg#gitlab-2"/>
								<use class="gitlab-3" href="/sprites.svg#gitlab-3"/>
							</svg>
						</a>-->
					</div>
				</div>
				<div class="title-bar"></div>
