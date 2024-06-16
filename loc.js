const languageSelector = document.getElementById("language");
const languageDisplay = document.getElementById("language-display");
const urlParams = new URLSearchParams(window.location.search);

var language = (navigator.language || navigator.userLanguage).toLowerCase();
if(language.startsWith("fr")) language = "fr";
else language = "en";

if (urlParams.has("lang") && ["en","fr"].includes(urlParams.get("lang"))) language = urlParams.get("lang");

languageSelector.value = language;

languageSelector.addEventListener("change", UpdateLanguage);

function UpdateLanguage()
{
    language = languageSelector.value;

    if (language == "fr") languageDisplay.textContent = "🇫🇷";
    else languageDisplay.textContent = "🇬🇧";
    
    document.querySelectorAll("[loc]").forEach(function(element)
    {
        element.innerHTML = getLoc(element.getAttribute("loc"), element.innerHTML);
    });

    urlParams.set("lang", language);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
    window.history.replaceState({}, '', newUrl);
}

function getLoc(locKey, defaultLoc)
{
    if (language == "fr" && frDict[locKey] != undefined) return parseLoc(frDict[locKey]);
    else if (enDict[locKey] != undefined) return parseLoc(enDict[locKey]);
    return defaultLoc;
}

function parseLoc(loc) {
    return loc.replaceAll("\n","<br/>")
    .replaceAll("CARLCASEY_LINK",`<a href="https://youtube.com/@WhiteBatAudio" target="_blank" rel="noopener noreferrer">Carl Casey @White Bat Audio</a>`)
    .replaceAll("MODRINTH_HOLLOWKNIGHT",`<a href="https://modrinth.com/modpack/hollowknight" target="_blank" rel="noopener noreferrer">Modrinth</a>`);
}

var enDict = {
"me": `Me`,
"maindesc":
`Hi, I'm Mortimer Kerman.
French student, dev on my free time, I am currently trying to survive in my prep class.
Mostly backend, I spend my time on multiple projects.
I'm interested in tech, space, and terrain generation.

Perlin noise addict.`,
"copiedUsername": `Copied Discord username to clipboard: mortimer_kerman`,
"copiedLink": `Copied link to clipboard`,

"languages.process": `Languages that my brain can process:`,
"languages.html": `HTML/CSS (yes not really languages)`,
"languages.markdown": `Markdown (No this page isn't in markdown)`,
"languages.toolsused": `Tools that I bothered myself to use:`,
"languages.vscode": `VSCode (its uncanny brother)`,
"languages.github": `Github (wow so surprising)`,
"languages.libs": `Too many libraries I guess`,
"languages.doc": `A lot of documentation`,
"languages.helloworld": `Languages where I know how to print hello world:`,
"languages.hlsl": `HLSL (yes there is no console in HLSL)`,

"projects": `My projects`,
"projects.repo": `Github repo`,

"cosmoswanderer.desc":
`Cosmos Wanderer is a mobile space shooter game under developpement.
You can take the control of a space ship and travel through asteroids, and many other obstacles, such as enemy ships, debris, homing missiles...`,
"cosmoswanderer.lowaction": `Low action`,
"cosmoswanderer.highaction": `High action`,
"cosmoswanderer.desc2":
`You can also upgrade your ship, get new skins, meet achievements...
It will be available on the Google Play Store for free.`,
"cosmoswanderer.maxaction": `MAX ACTION !`,
"cosmoswanderer.carlcasey": `Musics by CARLCASEY_LINK`,

"spacefactory":
`SpaceFactory was a group project made for the 2023 edition of the "Trophées NSI", a competition between French high school computer classes.
Made in python with Pygame, it's a factory game in space, where you can build your own factory to extract and refine resources.`,
"spacefactory.normalday": `A normal day in SpaceFactory`,
"spacefactory.buildmenu": `The build menu`,
"spacefactory.opportunities": `Opportunities menu`,
"spacefactory.bestproject": `SpaceFactory was elected as the best <i>Terminale</i> project of the Brittany region.`,
"spacefactory.website": `Trophées NSI official website`,

"planetar.desc":
`Planetar is a small WIP planet map generation tool.
Made for Windows with the .NET framework, it allows you to generate planet maps in real time.`,
"planetar.screenshot": `Planetar, the screenshot`,
"planetar.maps": `Height and humidity maps`,
"planetar.desc2":
`You can parameter a lot of aspects, like sea level, vegetation color, mountains amount...

Comes with a 3D view of the planet.`,
"planetar.exported": `An example of exported map`,

"hollowknight.desc":
`Clouser's Hollow Knight physics mod is a Minecraft mod made for Clouser's Hollow Knight Minecraft map.
Made for Minecraft Fabric 1.20.4, it adds multiple commands and gamerules to edit player's physics in order to replicate Hollow Knight's physics.
The map is available for download on MODRINTH_HOLLOWKNIGHT.`,
"hollowknight.desc2":
`In Hollow Knight, as soon as the player releases movement keys, they stops mid-air, and can immediately start to move in another direction.
Also, the jump is pressure sensitive. It means that the longer you press it, the higher you go.
In some circumstances, the player also has a double jump ability, which allows them to repeat the pressure sensitive jump mid-air.

This mod recreates these effects and some more.`,
"hollowknight.instantstop": `Instant stop physics`,
"hollowknight.pressurejump": `Pressure sensitive jump`,
"hollowknight.doublejump": `Double jump`,
"hollowknight.video": `Clouser's original video`,
"hollowknight.map": `Official map download`,

"gallery": `Random stuff gallery`,
"gallery.wallpaper": `My PC wallpaper (I love SpaceEngine)`,
"gallery.reason": `The reason why my UI has flaws`,
"gallery.stellarsystem": `That one time I played with stellar system generation`,
"gallery.mountains": `Once, I generated procedural mountains`,
"gallery.robot": `One day I made a cute lil robot for a 3D puzzle game`,
"gallery.tootempting": `That was too tempting`,
"gallery.grass": `Proof that I'm still a human`,
"gallery.lod": `Mountainous LODs`,
"gallery.globama": `Globama in OpenGL`,
"gallery.crystals": `Crystal generation in Minecraft`,
"gallery.platform": `A tiny flying platform for my robot`,
"gallery.blackhole": `A black hole, modded into Minecraft`,
"gallery.totally2d": `This is a 2D planet. YES.`,
"gallery.mars": `Once I made a mars colonization future website for school`,
"gallery.jug": `I sadly didn't made this`,
"gallery.atmosphere": `Experimentations with procedural 2D atmospheric rendering`,

"buddies": `My dev buddies`,
"buddies.frablock": `Communist`,
"buddies.ertalite": `Pushing rocks`,
"buddies.crafto": `Box stacker`,
"buddies.titanodelta": `Warlord`,
"buddies.enigma": `Thinking in 5D`,
"buddies.nyanmaths": `Hippie in flip flops`,

"videoplayer": `Your navigator does not support video playing`
}

var frDict = {
"me": `Moi`,
"maindesc":
`Bonjour, je suis Mortimer Kerman.
Étudiant français, développeur sur mon temps libre, j'essaie actuellement de survivre en prépa.
Principalement backend, je passe mon temps sur plusieurs projets.
Je m'intéresse à la technologie, à l'espace et à la génération de terrain.

Addict au bruit de Perlin.`,
"copiedUsername": `Nom d'utilisateur Discord copié dans le presse-papier: mortimer_kerman`,
"copiedLink": `Lien copié dans le presse-papier`,

"languages.process": `Langages que mon cerveau peut gérer:`,
"languages.html": `HTML/CSS (oui c'est pas vraiment des langages)`,
"languages.markdown": `Markdown (Non cette page n'est pas en markdown)`,
"languages.toolsused": `Outils que j'ai pris la peine d'utiliser:`,
"languages.vscode": `VSCode (son frère maudit)`,
"languages.github": `Github (surprenant n'est-ce pas)`,
"languages.libs": `Beaucoup trop de bibliothèques j'ai l'impression`,
"languages.doc": `Un paquet de documentation`,
"languages.helloworld": `Langages où je sais écrire hello world:`,
"languages.hlsl": `HLSL (oui il n'y a pas de console en HLSL)`,

"projects": `Mes projets`,
"projects.repo": `Dépôt Github`,

"cosmoswanderer.desc":
`Cosmos Wanderer est un jeu mobile de shooter spatial en développement.
Vous pouvez prendre le contrôle d'un vaisseau spatial et naviguer entre des astéroïdes et d'autres obstacles, comme des vaisseaux ennemis, des débris, des missiles à tête chercheuse...`,
"cosmoswanderer.lowaction": `Faible action`,
"cosmoswanderer.highaction": `Haute action`,
"cosmoswanderer.desc2":
`Vous pouvez aussi améliorer votre vaisseau, obtenir des nouveaux skins, réaliser des succès...
Il sera disponique gratuitement sur le Google Play Store.`,
"cosmoswanderer.maxaction": `ACTION MAXIMALE !`,
"cosmoswanderer.carlcasey": `Musiques par CARLCASEY_LINK`,

"spacefactory":
`SpaceFactory était un projet de groupe fait pour l'édition 2023 des Trophées NSI, une compétition entre les classes de NSI de première et de teminale sur toute la France.
Fait en python avec Pygame, c'est un factory game dans l'espace, où vous pouvez bâtir votre propre usine pour extraire et raffiner des ressources.
`,
"spacefactory.normalday": `Un jour ordinaire sur SpaceFactory`,
"spacefactory.buildmenu": `Le menu de construction`,
"spacefactory.opportunities": `Le menu d'opportunités`,
"spacefactory.bestproject": `SpaceFactory a été élu meilleur projet Terminale de la région Bretagne.`,
"spacefactory.website": `Site officiel des Trophées NSI`,

"planetar.desc":
`Planetar est un petit outil de génération de cartes de planètes en cours de développement.
Fait pour Windows avec le framework .NET, il vous permet de générer des cartes de planètes en temps réel.`,
"planetar.screenshot": `Planetar, la capture d'écran`,
"planetar.maps": `Cartes d'altitude et d'humidité`,
"planetar.desc2":
`Vous pouvez paramétrer beaucoup d'aspects, comme le niveau de la mer, la couleur de la végétation, la quantité de montagnes...

Livré avec une vue 3D de la planète.`,
"planetar.exported": `Un exemple de carte exportée`,

"hollowknight.desc":
`Clouser's Hollow Knight physics mod est un mod Minecraft créé pour la map Minecraft Hollow Knight de Clouser.
Fait pour Minecraft Fabric 1.20.4, il ajoute plusieurs commandes et gamerules pour modifier la physique du joueur de manière à répliquer la physique de Hollow Knight.
La map est disponible au téléchargement sur MODRINTH_HOLLOWKNIGHT.`,
"hollowknight.desc2":
`Dans Hollow Knight, dès que le joueur relâche les touches de déplacement, il s'arrête dans les airs et peut immédiatement commencer à aller dans une autre direction.
Le saut est également sensible à la pression. Ça veut dire que plus vous appuyez, plus vous sautez haut.
Dans certaines circonstances, le joueur a également accès à un double saut, qui lui permet de répéter le saut sensible à la pression dans les airs.

Ce mod recrée ces effects et quelques autres.`,
"hollowknight.instantstop": `Physique d'arrêt immédiat`,
"hollowknight.pressurejump": `Saut sensible à la pression`,
"hollowknight.doublejump": `Double saut`,
"hollowknight.video": `Vidéo originale de Clouser`,
"hollowknight.map": `Lien de téléchargement de la map`,

"gallery": `Galerie de trucs aléatoires`,
"gallery.wallpaper": `Mon fond d'écran de PC (J'adore SpaceEngine)`,
"gallery.reason": `La raison pour laquelle mon UI fait n'importe quoi`,
"gallery.stellarsystem": `La fois où j'ai joué avec de la génération de systèmes stellaires`,
"gallery.mountains": `Une fois j'ai fait des montagnes procédurales`,
"gallery.robot": `Un jour j'ai fait un pitit robot mignion pour un jeu d'énigmes en 3D`,
"gallery.tootempting": `C'était trop tentant`,
"gallery.grass": `Preuve que je suis toujours un humain`,
"gallery.lod": `LODs montagneux`,
"gallery.globama": `Globama dans OpenGL`,
"gallery.crystals": `Génération de cristaux dans Minecraft`,
"gallery.platform": `Une petite plateforme volante pour mon robot`,
"gallery.blackhole": `Un trou noir, moddé dans Minecraft`,
"gallery.totally2d": `C'est une planète en 2D. OUI.`,
"gallery.mars": `Une fois j'ai fait un site du futur sur la colonisation martienne pour l'école`,
"gallery.jug": `Je n'ai pas créé cette merveille`,
"gallery.atmosphere": `Expérimentations de rendu d'atmosphère procédurale en 2D`,

"buddies": `Mes potes développeurs`,
"buddies.frablock": `Communiste`,
"buddies.ertalite": `Pousse des cailloux`,
"buddies.crafto": `Empile des caisses`,
"buddies.titanodelta": `Seigneur de guerre`,
"buddies.enigma": `Pense en 5D`,
"buddies.nyanmaths": `Hippie en claquettes`,

"videoplayer": `Votre navigateur ne supporte pas la lecture de vidéos`
}

UpdateLanguage();
