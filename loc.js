
const languageSelector = document.getElementById("language");
const languageDisplay = document.getElementById("language-display");

var language = (navigator.language || navigator.userLanguage).toLowerCase();

if(language.startsWith("fr")) languageSelector.value = "fr";

languageSelector.addEventListener("change", function()
{
    language = languageSelector.value;
    UpdateLanguage();
});

function UpdateLanguage()
{
    if (language.startsWith("fr")) languageDisplay.textContent = "🇫🇷";
    else languageDisplay.textContent = "🇬🇧";
    
    document.querySelectorAll("[loc]").forEach(function(element)
    {
        if (language.startsWith("fr")) element.innerHTML = frDict[element.getAttribute("loc")];
        else element.innerHTML = enDict[element.getAttribute("loc")];
    });
}

var enDict = {
"me": `Me`,
"maindesc":
`Hi, I'm Mortimer Kerman.<br/>
French student, dev on my free time, I am currently trying to survive in my prep class.<br/>
Mostly backend, I spend my time on multiple projects.<br/>
I'm interested in tech, space, and terrain generation.
<br/><br/>
Perlin noise addict.`,

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
"cosmoswanderer.desc":
`Cosmos Wanderer is a mobile space shooter game under developpement.<br/>
You can take the control of a space ship and travel through asteroids, and many other obstacles, such as enemy ships, debris, homing missiles...`,
"cosmoswanderer.lowaction": `Low action`,
"cosmoswanderer.highaction": `High action`,
"cosmoswanderer.desc2":
`You can also upgrade your ship, get new skins, meet achievements...<br/>
It will be available on the Google Play Store for free.`,
"cosmoswanderer.maxaction": `MAX ACTION !`,
"cosmoswanderer.carlcasey": `Musics by <a href="https://youtube.com/@WhiteBatAudio">Carl Casey @White Bat Audio</a>`,

"spacefactory":
`SpaceFactory was a group project made for the 2023 edition of the "Trophées NSI", a competition between French high school computer classes.<br/>
Made in python with Pygame, it's a factory game in space, where you can build your own factory to extract and refine resources.<br/>
`,
"spacefactory.normalday": `A normal day in SpaceFactory`,
"spacefactory.buildmenu": `The build menu`,
"spacefactory.opportunities": `Opportunities menu`,
"spacefactory.bestproject": `SpaceFactory was elected as the best <i>Terminale</i> project of the Brittany region.<br/>`,
"spacefactory.repo": `Github repo`,
"spacefactory.website": `Trophées NSI official website`,

"planetar.desc":
`Planetar is a small WIP planet map generation tool.<br/>
Made for Windows with the .NET framework, it allows you to generate planet maps in real time.`,
"planetar.screenshot": `Planetar, the screenshot`,
"planetar.maps": `Height and humidity maps`,
"planetar.desc2":
`You can parameter a lot of aspects, like sea level, vegetation color, mountains amount...
<br/><br/>
Comes with a 3D view of the planet.`,
"planetar.exported": `An example of exported map`,

"gallery": `Random stuff gallery`,
"gallery.wallpaper": `My PC wallpaper (I love SpaceEngine)`,
"gallery.reason": `The reason why my UI has flaws`,
"gallery.stellarsystem": `That one time I played with stellar system generation`,
"gallery.mountains": `Once, I generated procedural mountains`,
"gallery.robot": `One day I made a cute lil robot for a 3D puzzle game`,
"gallery.tootempting": `That was too tempting`,
"gallery.human": `Proof that I'm still a human`,
"gallery.lod": `Mountainous LODs`,
"gallery.globama": `Globama in OpenGL`,
"gallery.crystals": `Crystal generation in Minecraft`,
"gallery.platform": `A tiny flying platform for my robot`,
"gallery.blackhole": `A black hole, modded into Minecraft`,
"gallery.totally2d": `This is a 2D planet. YES.`,
"gallery.mars": `Once I made a mars colonization future website for school`,
"gallery.jug": `I sadly didn't made this`,

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
`Bonjour, je suis Mortimer Kerman.<br/>
Étudiant français, développeur sur mon temps libre, j'essaie actuellement de survivre en prépa.<br/>
Principalement backend, je passe mon temps sur plusieurs projets.<br/>
Je m'intéresse à la technologie, à l'espace et à la génération de terrain.
<br/><br/>
Addict au bruit de Perlin.`,

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
"cosmoswanderer.desc":
`Cosmos Wanderer est un jeu mobile de shooter spatial en développement.<br/>
Vous pouvez prendre le contrôle d'un vaisseau spatial et naviguer entre des astéroïdes et d'autres obstacles, comme des vaisseaux ennemis, des débris, des missiles à tête chercheuse...`,
"cosmoswanderer.lowaction": `Faible action`,
"cosmoswanderer.highaction": `Haute action`,
"cosmoswanderer.desc2":
`Vous pouvez aussi améliorer votre vaisseau, obtenir des nouveaux skins, réaliser des succès...<br/>
Il sera disponique gratuitement sur le Google Play Store.`,
"cosmoswanderer.maxaction": `ACTION MAXIMALE !`,
"cosmoswanderer.carlcasey": `Musiques par <a href="https://youtube.com/@WhiteBatAudio">Carl Casey @White Bat Audio</a>`,

"spacefactory":
`SpaceFactory était un projet de groupe fait pour l'édition 2023 des Trophées NSI, une compétition entre les classes de NSI de première et de teminale sur toute la France.<br/>
Fait en python avec Pygame, c'est un factory game dans l'espace, où vous pouvez bâtir votre propre usine pour extraire et raffiner des ressources.<br/>
`,
"spacefactory.normalday": `Un jour ordinaire sur SpaceFactory`,
"spacefactory.buildmenu": `Le menu de construction`,
"spacefactory.opportunities": `Le menu d'opportunités`,
"spacefactory.bestproject": `SpaceFactory a été élu meilleur projet Terminale de la région Bretagne.`,
"spacefactory.repo": `Dépôt Github`,
"spacefactory.website": `Site officiel des Trophées NSI`,

"planetar.desc":
`Planetar est un petit outil de génération de cartes de planètes en cours de développement.<br/>
Fait pour Windows avec le framework .NET, il vous permet de générer des cartes de planètes en temps réel.`,
"planetar.screenshot": `Planetar, la capture d'écran`,
"planetar.maps": `Cartes d'altitude et d'humidité`,
"planetar.desc2":
`Vous pouvez paramétrer beaucoup d'aspects, comme le niveau de la mer, la couleur de la végétation, la quantité de montagnes...
<br/><br/>
Livré avec une vue 3D de la planète.`,
"planetar.exported": `Un exemple de carte exportée`,

"gallery": `Galerie de trucs aléatoires`,
"gallery.wallpaper": `Mon fond d'écran de PC (J'adore SpaceEngine)`,
"gallery.reason": `La raison pour laquelle mon UI fait n'importe quoi`,
"gallery.stellarsystem": `La fois où j'ai joué avec de la génération de systèmes stellaires`,
"gallery.mountains": `Une fois j'ai fait des montagnes procédurales`,
"gallery.robot": `Un jour j'ai fait un pitit robot mignion pour un jeu d'énigmes en 3D`,
"gallery.tootempting": `C'était trop tentant`,
"gallery.human": `Preuve que je suis toujours un humain`,
"gallery.lod": `LODs montagneux`,
"gallery.globama": `Globama dans OpenGL`,
"gallery.crystals": `Génération de cristaux dans Minecraft`,
"gallery.platform": `Une petite plateforme volante pour mon robot`,
"gallery.blackhole": `Un trou noir, moddé dans Minecraft`,
"gallery.totally2d": `C'est une planète en 2D. OUI.`,
"gallery.mars": `Une fois j'ai fait un site du futur sur la colonisation martienne pour l'école`,
"gallery.jug": `Je n'ai pas créé cette merveille`,

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
