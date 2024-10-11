const languageSelector = document.getElementById("language");
const urlParams = new URLSearchParams(window.location.search);

function initLoc()
{
    var language = (navigator.language || navigator.userLanguage).toLowerCase();
    
    let languageFound = false;
    langList.forEach((lang) => {

        if (language.startsWith(lang))
        {
            language = lang;
            languageFound = true;
        }
    
        var option = document.createElement("option");
        option.value = lang;
        option.textContent = getFlagEmote(lang) + " " + getLocLang("langName", lang, lang);
        languageSelector.appendChild(option);
    });
    if(!languageFound) language = "en";
    
    if (urlParams.has("lang") && langList.includes(urlParams.get("lang"))) language = urlParams.get("lang");
    
    languageSelector.value = language;
    
    languageSelector.addEventListener("change", UpdateLanguage);
}

function UpdateLanguage()
{
    language = languageSelector.value;

    var flag = language;
    if (flag == "en") flag = "gb";

    languageSelector.parentElement.style.setProperty("--flagurl", `url(https://flagicons.lipis.dev/flags/4x3/${flag}.svg)`);
    
    document.querySelectorAll("[loc]").forEach(function(element)
    {
        element.innerHTML = getLoc(element.getAttribute("loc"), element.innerHTML);
    });

    document.querySelectorAll("[descloc]").forEach(function(element)
    {
        element.setAttribute("desc", getLoc(element.getAttribute("descloc"), element.getAttribute("desc")));
    });

    urlParams.set("lang", language);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
    window.history.replaceState({}, "", newUrl);

    languageSelector.blur();
}

function getLoc(locKey, defaultLoc)
{
    return getLocLang(locKey, defaultLoc, language);
}

function getLocLang(locKey, defaultLoc, lang)
{
    const dict = getLocDict(lang);

    if (dict[locKey] != undefined) return parseLoc(dict[locKey]);

    if (lang != "en" && enDict[locKey] != undefined) return parseLoc(enDict[locKey]);

    return defaultLoc;
}

function parseLoc(loc) {
    return loc.replaceAll("\n","<br/>")
    .replaceAll("CARLCASEY_LINK",`<a href="https://youtube.com/@WhiteBatAudio" target="_blank" rel="noopener noreferrer">Carl Casey @White Bat Audio</a>`)
    .replaceAll("MODRINTH_HOLLOWKNIGHT",`<a href="https://modrinth.com/modpack/hollowknight" target="_blank" rel="noopener noreferrer">Modrinth</a>`)
    .replaceAll("BUDDY_FRABLOCK",`<a onclick="mentionBuddy('Frablock')">Frablock</a>`)
    .replaceAll("BUDDY_ENIGMA",`<a onclick="mentionBuddy('Enigma')">Enigma</a>`);
}

function getFlagEmote(countryCode)
{
    if(countryCode == "en") return "🇬🇧";
    const codePoints = countryCode.toUpperCase().split("").map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function getLocDict(lang)
{
    if (lang == "fr") return frDict;
    if (lang == "es") return esDict;
    if (lang == "de") return deDict;
    return enDict;
}

const langList = ["en","fr","es","de"];

var enDict = {
"langName": `English`,
"me": `Me`,
"maindesc":
`Hi, I'm Mortimer Kerman.
French student, dev on my free time, survivor of prep class, I am currently sailing in IT IUT.
Mostly backend, I spend my time on multiple projects.
I'm interested in tech, space, and terrain generation.

Perlin noise addict.`,
"copiedUsername": `Copied Discord username to clipboard: `,
"copiedLink": `Copied link to clipboard`,
"lightmode": `Light theme`,
"darkmode": `Dark theme`,

"languages.process": `Languages that my brain can process:`,
"languages.html": `HTML/CSS (yes those aren't really programming languages)`,
"languages.toolsused": `Tools that I bothered myself to use:`,
"languages.vscode": `VSCode (its uncanny brother)`,
"languages.github": `Github (wow so surprising)`,
"languages.libs": `Too many libraries I guess`,
"languages.doc": `A lot of documentation`,
"languages.helloworld": `Languages where I know how to print hello world:`,
"languages.hlsl": `HLSL (yes there is no console in HLSL)`,

"projects": `My projects`,
"projects.repo": `Github repo`,
"back": `Back`,
"copyarticle": `Copy article link`,

"cosmoswanderer.desc":
`Cosmos Wanderer is a mobile space shooter game under developpement.
You can take the control of a space ship and travel through asteroids, and many other obstacles, such as enemy ships, debris, homing missiles...`,
"cosmoswanderer.lowaction": `Low action`,
"cosmoswanderer.highaction": `High action`,
"cosmoswanderer.desc2":
`You can also upgrade your ship, get new skins, meet achievements...
It will be available on the Google Play Store for free.`,
"cosmoswanderer.maxaction": `MAX ACTION!`,
"cosmoswanderer.carlcasey": `Musics by CARLCASEY_LINK`,

"spacefactory":
`SpaceFactory was a group project with BUDDY_FRABLOCK made for the 2023 edition of the "Trophées NSI", a competition between French high school computer classes.
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

"mineterstellar.desc":
`Mineterstellar is a Minecraft mod reprducing the 2014 Christopher Nolan's Interstellar movie into Minecraft.
It adds planets, space suits, TARS, music, and environments from the movie.`,
"mineterstellar.desc2":
`I started this project many years ago for Minecraft Forge 1.12.2.
As the time passed, this version became more and more deprecated, and my mod was getting a huge technical debt.
That's why I decided in August 2024 to remake it entirely from scratch for Fabric 1.21.`,
"mineterstellar.miller": `Miller's planet`,
"mineterstellar.edmund": `Edmund's planet`,
"mineterstellar.mann1": `Mann's planet`,
"mineterstellar.mann2": `TARS on Mann's planet`,
"mineterstellar.mann3": `"You fucking coward..."`,
"mineterstellar.blog": `Mineterstellar dev blog`,
"mineterstellar.blog.desc":
`On this page, I'll publish short articles about Mineterstellar's development progress.
Please note that the articles are published in english and are not translated.`,
"mineterstellar.curseforge": `Original Mineterstellar Curseforge page`,

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
"gallery.scattering": `I simulated with BUDDY_ENIGMA an atmosphere in Godot for my prep class final project`,

"buddies": `My dev buddies`,
"buddies.frablock": `Communist`,
"buddies.ertalite": `Pushing rocks`,
"buddies.awkaze": `Copy/paste god`,
"buddies.jordi": `Catalan`,
"buddies.vexmea": `Femboy`,
"buddies.crafto": `Box stacker`,
"buddies.anatom": `Furry`,
"buddies.enigma": `Thinking in 5D`,
"buddies.nyanmaths": `Hippie in flip flops`,
"buddies.yapudjus": `CAAAAAAAAATTTT`,
"buddies.axelatlantid": `Entity`,
"buddies.rypoint": `Entrepreneur`,

"videoplayer": `Your navigator does not support video playing`,
"translation": ``
}

var frDict = {
"langName": `Français`,
"me": `Moi`,
"maindesc":
`Bonjour, je suis Mortimer Kerman.
Étudiant français, développeur sur mon temps libre, rescapé de la prépa, je navigue actuellement en IUT informatique.
Principalement backend, je passe mon temps sur plusieurs projets.
Je m'intéresse à la technologie, à l'espace et à la génération de terrain.

Addict au bruit de Perlin.`,
"copiedUsername": `Nom d'utilisateur Discord copié dans le presse-papier: `,
"copiedLink": `Lien copié dans le presse-papier`,
"lightmode": `Thème clair`,
"darkmode": `Thème sombre`,

"languages.process": `Langages que mon cerveau peut gérer:`,
"languages.html": `HTML/CSS (oui c'est pas vraiment des langages de programmation)`,
"languages.toolsused": `Outils que j'ai pris la peine d'utiliser:`,
"languages.vscode": `VSCode (son frère maudit)`,
"languages.github": `Github (surprenant n'est-ce pas)`,
"languages.libs": `Beaucoup trop de bibliothèques j'ai l'impression`,
"languages.doc": `Un paquet de documentation`,
"languages.helloworld": `Langages où je sais écrire hello world:`,
"languages.hlsl": `HLSL (oui il n'y a pas de console en HLSL)`,

"projects": `Mes projets`,
"projects.repo": `Dépôt Github`,
"back": `Retour`,
"copyarticle": `Copier le lien de l'article`,

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
`SpaceFactory était un projet de groupe avec BUDDY_FRABLOCK fait pour l'édition 2023 des Trophées NSI, une compétition entre les classes de NSI de première et de teminale sur toute la France.
Fait en python avec Pygame, c'est un factory game dans l'espace, où vous pouvez bâtir votre propre usine pour extraire et raffiner des ressources.`,
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

"mineterstellar.desc":
`Mineterstellar est un mod Minecraft recréant dans Minecraft le film Interstellar, de Christopher Nolan.
Il ajoute les planètes, les combinaisons spatiales, TARS, la musique, et les environnements du film.`,
"mineterstellar.desc2":
`J'ai démarré ce projet il y a plusieurs années pour Minecraft Forge 1.12.2.
Avec les années, cette version est devenue de plus en plus obsolète, et mon mod accumulait une énorme dette technique.
C'est pourquoi j'ai décidé en Août 2024 de le refaire entièrement depuis zéro pour Fabric 1.21.`,
"mineterstellar.miller": `La planète de Miller`,
"mineterstellar.edmund": `La planète d'Edmund`,
"mineterstellar.mann1": `La planète de Mann`,
"mineterstellar.mann2": `TARS sur la planète de Mann`,
"mineterstellar.mann3": `"Putain de lâche..."`,
"mineterstellar.blog": `Blog de développement de Mineterstellar`,
"mineterstellar.blog.desc":
`Sur cette page, je publierai des courts articles sur l'avancée du développement de Mineterstellar.
Veuillez noter que les articles sont publiés en anglais et ne sont pas traduits.`,
"mineterstellar.curseforge": `Page Curseforge originale de Mineterstellar`,

"gallery": `Galerie de trucs aléatoires`,
"gallery.wallpaper": `Mon fond d'écran de PC (J'adore SpaceEngine)`,
"gallery.reason": `La raison pour laquelle mon UI fait n'importe quoi`,
"gallery.stellarsystem": `La fois où j'ai joué avec de la génération de systèmes stellaires`,
"gallery.mountains": `Une fois j'ai fait des montagnes procédurales`,
"gallery.robot": `Un jour j'ai fait un pitit robot mignon pour un jeu d'énigmes en 3D`,
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
"gallery.scattering": `J'ai simulé avec BUDDY_ENIGMA une atmosphère dans Godot pour mon TIPE`,

"buddies": `Mes potes développeurs`,
"buddies.frablock": `Communiste`,
"buddies.ertalite": `Pousse des cailloux`,
"buddies.awkaze": `Dieu du copier-coller`,
"buddies.jordi": `Catalan`,
"buddies.vexmea": `Femboy`,
"buddies.crafto": `Empile des caisses`,
"buddies.anatom": `Furry`,
"buddies.enigma": `Pense en 5D`,
"buddies.nyanmaths": `Hippie en claquettes`,
"buddies.yapudjus": `CHAAAAAAAATTTT`,
"buddies.axelatlantid": `Entité`,
"buddies.rypoint": `Entrepreneur`,

"videoplayer": `Votre navigateur ne supporte pas la lecture de vidéos`,
"translation": ``
}

var esDict = {
"langName": `Español`,
"me": `Yo`,
"maindesc":
`Hola, soy Mortimer Kerman.
Soy un estudiante francés y un desarrollador sobre mi tiempo libre. Sobrevivió de la clase preparatoria y ahora me desenvuelvo en instituto de tecnología en informática.
Principalmente backend, me paso el tiempo en varios proyectos.
Me interesan la tecnología, el espacio y la generación de terreno.

Adicto al ruido Perlin.`,
"copiedUsername": `Nombre de usuario Discord copiado en el portapapeles: `,
"copiedLink": `Enlace copiado en el portapapeles`,
"lightmode": `Modo claro`,
"darkmode": `Mobo oscuro`,

"languages.process": `Lenguajes que mi cerebro puede manejar:`,
"languages.html": `HTML/CSS (lo sé, no son realmente lenguajes de programación)`,
"languages.toolsused": `Herramientas que me he tomado la molestia para usar:`,
"languages.vscode": `VSCode (su hermano extraño)`,
"languages.github": `Github (sorprendente, ¿ eh ?)`,
"languages.libs": `Me parece que hay demasiado bibliotecas`,
"languages.doc": `Un montón de documentaciones`,
"languages.helloworld": `Lenguajes con los cuales sé escribir hello world:`,
"languages.hlsl": `HLSL (lo sé, no hay consola en HLSL)`,

"projects": `Mis proyectos`,
"projects.repo": `Repositorio Github`,
"back": `Atrás`,
"copyarticle": `Copiar enlace del artículo`,

"cosmoswanderer.desc":
`Cosmos Wanderer es un juego móvil de shooter espacial en vías de desarrollo.
Puede tomar el control de una nave espacial y navegar entre los asteroides y otros obstáculos como naves enemigas, desechos, misiles guiados...`,
"cosmoswanderer.lowaction": `Menor acción`,
"cosmoswanderer.highaction": `Mayor acción`,
"cosmoswanderer.desc2":
`Puede también mejorar su nave, conseguir nuevas skins, conseguir logros…
Estará accesible gratuitamente en el Google Play Store.`,
"cosmoswanderer.maxaction": `¡ACCIÓN  MAXIMA!`,
"cosmoswanderer.carlcasey": `Música por CARLCASEY_LINK`,

"spacefactory":
`SpaceFactory fue un proyecto de grupo con BUDDY_FRABLOCK hecho por la edición 2023 de los “Trophées NSI”, una competición entre clases de bachillerato de informática en toda Francia.
Hecho en python con Pygame, es un juego de fábrica en el espacio donde puede construir su propia fábrica para extraer y refinar recursos.`,
"spacefactory.normalday": `Un día común en SpaceFactory`,
"spacefactory.buildmenu": `El menú de construcción`,
"spacefactory.opportunities": `El menú de oportunidades`,
"spacefactory.bestproject": `SpaceFactory fue elegido mejor proyecto “Terminale” de la región Bretaña.`,
"spacefactory.website": `Sitio oficial de los Trophées NSI`,

"planetar.desc":
`Planetar es una pequeña herramienta para generar mapas de planetas que está en vías de desarollo.
Hecha para Windows con el framework .NET, permite generar mapas de planetas en tiempo real.`,
"planetar.screenshot": `Planetar, la captura de pantalla`,
"planetar.maps": `Mapas de altitud y humedad`,
"planetar.desc2":
`Puede configurar muchos aspectos como el nivel del mar, el color de la vegetación, la cantidad de montañas…

Entregado con una vista 3D del planeta.`,
"planetar.exported": `Un ejemplo de mapa exportado`,

"hollowknight.desc":
`Clouser's Hollow Knight physics mod es un mod Minecraft creado por el mapa Minecraft Hollow Knight de Clouser.
Hecho para Minecraft Fabric 1.20.4, añade varios comandos y Gamerules para cambiar la física del jugador a fin de reproducir la física de Hollow Knight.
El mapa está disponible para descargarlo en MODRINTH_HOLLOWKNIGHT.`,
"hollowknight.desc2":
`En Hollow Knight, tan pronto como el jugador suelte las teclas de dirección, se para en el aire y puede dirigirse en otra dirección.
También el salto está sensible a la pulsación. Es decir, cuanto más pulsa, más alto salta.
En algunas condiciones, el jugador tiene también acceso a un doble salto que le permite reiterar el salto sensible a la pulsación en el aire.

Este mod reproduce estos efectos y algunos otros.`,
"hollowknight.instantstop": `Física de parada inmediata`,
"hollowknight.pressurejump": `Salto sensible a la pulsación`,
"hollowknight.doublejump": `Doble salto`,
"hollowknight.video": `Vídeo original de Clouser`,
"hollowknight.map": `Enlace de descarga del mapa`,

"mineterstellar.desc":
`Mineterstellar es un mod Minecraft que reproduce la peli Interstellar por Christopher Nolan en Minecraft.
Añade planetas, trajes espaciales, TARS, la música y el entorno de la pelí.`,
"mineterstellar.desc2":
`Empecé este proyecto hace unos años para Minecraft Forge 1.12.2.
Con el tiempo, esta versión volvió cada vez más anticuado y mi mod amontonó una inmensa deuda técnica.
Por ello decidí en Agosto de 2024 hacerlo de nuevo desde cero para Fabric 1.21.`,
"mineterstellar.miller": `El planeta de Miller`,
"mineterstellar.edmund": `El planeta de Edmunds`,
"mineterstellar.mann1": `El planeta de Mann`,
"mineterstellar.mann2": `TARS en el planeta de Mann`,
"mineterstellar.mann3": `"Eres un desgraciado..."`,
"mineterstellar.blog": `Blog de desarrollo de Mineterstellar`,
"mineterstellar.blog.desc":
`En esta página, publicaré pequeños artículos sobre el progreso del desarrollo de Mineterstellar.
Tenga en cuenta que los artículos se publican en inglés y no se traducen.`,
"mineterstellar.curseforge": `Página Curseforge original de Mineterstellar`,

"gallery": `Galería de cosas casuales`,
"gallery.wallpaper": `El fondo de pantalla de mi PC (Me encanta SpaceEngine)`,
"gallery.reason": `La razón por la que mi UI hace tonterías`,
"gallery.stellarsystem": `Esa vez que juegué con la generación de sistemas estelares`,
"gallery.mountains": `Una vez hice montañas procedimentales`,
"gallery.robot": `Un día, hice un pequeñito robot lindo para un juego de enigmas en 3D`,
"gallery.tootempting": `No pude resistir`,
"gallery.grass": `Prueba que todavía soy un ser humano`,
"gallery.lod": `LODs de montañas`,
"gallery.globama": `Globama en OpenGL`,
"gallery.crystals": `Generación de cristales en Minecraft`,
"gallery.platform": `Una pequeña plataforma volaroda para mi robot`,
"gallery.blackhole": `Un agujero negro creado en Minecraft`,
"gallery.totally2d": `Es un planeta en 2D. SÍ.`,
"gallery.mars": `Una vez hice un sitio del futuro sobre la colonización marciana para mi escuela`,
"gallery.jug": `Por desgracia, no creé esto`,
"gallery.atmosphere": `Pruebas de reproducción de atmosfera procedimental en 2D`,
"gallery.scattering": `Simulé con BUDDY_ENIGMA una atmosfera in Godot para mi proyecto final de clase preparatoria`,

"buddies": `Mis compañeros desarrolladores`,
"buddies.frablock": `Comunista`,
"buddies.ertalite": `Empuja rocas`,
"buddies.awkaze": `Dios para copiar y pegar`,
"buddies.jordi": `Catalán`,
"buddies.vexmea": `Femboy`,
"buddies.crafto": `Apila cajas`,
"buddies.anatom": `Furry`,
"buddies.enigma": `Piensa en 5D`,
"buddies.nyanmaths": `Hippie con chanclas`,
"buddies.yapudjus": `GAAAAAATOOOOOO`,
"buddies.axelatlantid": `Entidad`,
"buddies.rypoint": `Emprendedor`,

"videoplayer": `Su navegador no soporta la lectura de vídeos`,
"translation": `No traduje esta página, mi español es demasiado inestable por desgracia :(`//Esta página no ha sido traducida por mí, mi español está demasiado oxidado para eso :(
}

var deDict = {
"langName": `Deutsch`,
"me": `Ich`,
"maindesc":
`Hallo, ich bin Mortimer Kerman.
Französischer Student, Entwickler in meiner Freizeit, Überlebender der Vorbereitungsklasse, ich segle derzeit im Informatik-IUT.
Hauptsächlich Backend-Entwicklung, verbringe ich meine Zeit mit verschiedenen Projekten.
Ich interessiere mich für Technologie, Weltraum und Terrain-Generierung.

Perlin-Rausch-Süchtiger.`,
"copiedUsername": `Discord-Benutzername in die Zwischenablage kopiert: `,
"copiedLink": `Link in die Zwischenablage kopiert`,
"lightmode": `Helles Thema`,
"darkmode": `Dunkles Thema`,

"languages.process": `Sprachen, die mein Gehirn verarbeiten kann:`,
"languages.html": `HTML/CSS (ja, es sind keine wirklichen Programmiersprachen)`,
"languages.toolsused": `Werkzeuge, die ich mir mühevoll ausgesucht habe:`,
"languages.vscode": `VSCode (sein unheimlicher Bruder)`,
"languages.github": `Github (wow, so überraschend)`,
"languages.libs": `Zuviele Bibliotheken, denke ich`,
"languages.doc": `Eine Menge Dokumentation`,
"languages.helloworld": `Sprachen, in denen ich "Hello World" drucken kann:`,
"languages.hlsl": `HLSL (ja, es gibt keine Konsole in HLSL)`,

"projects": `Meine Projekte`,
"projects.repo": `Github-Repository`,
"back": `Zurück`,
"copyarticle": `Artikellink kopieren`,

"cosmoswanderer.desc":
`Cosmos Wanderer ist ein mobiles Weltraum-Shooter-Spiel in Entwicklung.
Du kannst die Kontrolle über ein Raumschiff übernehmen und durch Asteroiden und viele andere Hindernisse reisen, wie feindliche Schiffe, Trümmer, homing missiles...`,
"cosmoswanderer.lowaction": `Geringe Action`,
"cosmoswanderer.highaction": `Hohe Action`,
"cosmoswanderer.desc2":
`Du kannst auch dein Schiff verbessern, neue Skins erhalten, Erfolge erzielen...
Es wird kostenlos im Google Play Store erhältlich sein.`,
"cosmoswanderer.maxaction": `MAXIMALE ACTION!`,
"cosmoswanderer.carlcasey": `Musik von CARLCASEY_LINK`,

"spacefactory":
`SpaceFactory war ein Gruppenprojekt mit BUDDY_FRABLOCK, das für die 2023er Ausgabe der "Trophées NSI" gemacht wurde, einem Wettbewerb zwischen französischen Informatikklassen.
Es wurde in Python mit Pygame erstellt und ist ein Fabrikspiel im Weltraum, in dem du deine eigene Fabrik zum Extrahieren und Raffinieren von Ressourcen aufbauen kannst.`,
"spacefactory.normalday": `Ein normaler Tag in SpaceFactory`,
"spacefactory.buildmenu": `Das Bau-Menü`,
"spacefactory.opportunities": `Das Chancen-Menü`,
"spacefactory.bestproject": `SpaceFactory wurde als das beste <i>Terminale</i> Projekt der Bretagne gewählt.`,
"spacefactory.website": `Offizielle Website der Trophées NSI`,

"planetar.desc":
`Planetar ist ein kleines WIP-Werkzeug zur Generierung von Planetenkarten.
Es wurde für Windows mit dem .NET-Framework erstellt und ermöglicht es dir, Planetenkarten in Echtzeit zu generieren.`,
"planetar.screenshot": `Planetar, der Screenshot`,
"planetar.maps": `Höhen- und Feuchtigkeitskarten`,
"planetar.desc2":
`Du kannst viele Aspekte anpassen, wie den Meeresspiegel, die Vegetationsfarbe, die Anzahl der Berge...

Kommt mit einer 3D-Ansicht des Planeten.`,
"planetar.exported": `Ein Beispiel für eine exportierte Karte`,

"hollowknight.desc":
`Clouser's Hollow Knight Physics Mod ist ein Minecraft-Mod, der für die Hollow Knight Minecraft-Karte von Clouser erstellt wurde.
Es wurde für Minecraft Fabric 1.20.4 erstellt und fügt mehrere Befehle und Spielregeln hinzu, um die Physik des Spielers zu bearbeiten, um die Physik von Hollow Knight zu replizieren.
Die Karte ist zum Download auf MODRINTH_HOLLOWKNIGHT verfügbar.`,
"hollowknight.desc2":
`In Hollow Knight stoppt der Spieler, sobald er die Bewegungstasten loslässt, in der Luft und kann sofort in eine andere Richtung bewegen.
Außerdem ist der Sprung druckempfindlich. Das bedeutet, je länger du drückst, desto höher springst du.
In bestimmten Situationen hat der Spieler auch die Fähigkeit zu doppeltem Sprung, mit der er den druckempfindlichen Sprung in der Luft wiederholen kann.

Dieser Mod rekreiert diese Effekte und noch mehr.`,
"hollowknight.instantstop": `Sofortige Stop-Physik`,
"hollowknight.pressurejump": `Druckempfindlicher Sprung`,
"hollowknight.doublejump": `Doppelter Sprung`,
"hollowknight.video": `Clousers originales Video`,
"hollowknight.map": `Offizieller Kartendownload`,

"mineterstellar.desc": 
`Mineterstellar ist eine Minecraft-Mod, die den Film Interstellar von Christopher Nolan aus dem Jahr 2014 in Minecraft nachbildet.
Sie fügt Planeten, Raumanzüge, TARS, Musik und Umgebungen aus dem Film hinzu.`,
"mineterstellar.desc2": 
`Ich habe dieses Projekt vor vielen Jahren für Minecraft Forge 1.12.2 begonnen.
Mit der Zeit wurde diese Version immer veralteter, und mein Mod hatte eine große technische Schuld angesammelt.
Deshalb habe ich im August 2024 beschlossen, es komplett neu von Grund auf für Fabric 1.21 zu erstellen.`,
"mineterstellar.miller": `Millers Planet`,
"mineterstellar.edmund": `Edmunds Planet`,
"mineterstellar.mann1": `Manns Planet`,
"mineterstellar.mann2": `TARS auf Manns Planet`,
"mineterstellar.mann3": `"Sie elender Feigling..."`,
"mineterstellar.blog": `Mineterstellar-Entwicklungsblog`,
"mineterstellar.blog.desc": 
`Auf dieser Seite werde ich kurze Artikel über den Fortschritt der Entwicklung von Mineterstellar veröffentlichen.
Bitte beachten Sie, dass die Artikel auf Englisch veröffentlicht werden und nicht übersetzt sind.`,
"mineterstellar.curseforge": `Ursprüngliche Mineterstellar-Seite auf Curseforge`,

"gallery": `Zufällige Galerie`,
"gallery.wallpaper": `Mein PC-Hintergrundbild (Ich liebe SpaceEngine)`,
"gallery.reason": `Der Grund, warum meine UI Fehler hat`,
"gallery.stellarsystem": `Das eine Mal, als ich mit der Generierung von Sternensystemen gespielt habe`,
"gallery.mountains": `Einmal habe ich prozedurale Berge generiert`,
"gallery.robot": `Eines Tages habe ich einen süßen kleinen Roboter für ein 3D-Puzzle-Spiel gemacht`,
"gallery.tootempting": `Das war zu verlockend`,
"gallery.grass": `Beweis, dass ich immer noch ein Mensch bin`,
"gallery.lod": `Berg-LODs`,
"gallery.globama": `Globama in OpenGL`,
"gallery.crystals": `Kristall-Generierung in Minecraft`,
"gallery.platform": `Eine kleine fliegende Plattform für meinen Roboter`,
"gallery.blackhole": `Ein schwarzes Loch, in Minecraft modifiziert`,
"gallery.totally2d": `Das ist ein 2D-Planet. JA.`,
"gallery.mars": `Einmal habe ich eine Zukunftswebsite zur Mars-Kolonisierung für die Schule gemacht`,
"gallery.jug": `Leider habe ich das nicht gemacht`,
"gallery.atmosphere": `Experimentierungen mit prozeduralem 2D-Atmosphärenrendering`,
"gallery.scattering": `Ich habe mit BUDDY_ENIGMA eine Atmosphäre in Godot für mein TIPE-Projekt simuliert`,

"buddies": `Meine Entwicklerfreunde`,
"buddies.frablock": `Kommunist`,
"buddies.ertalite": `Steine schubsen`,
"buddies.awkaze": `Gott des Kopierens und Einfügens`,
"buddies.jordi": `Katalane`,
"buddies.vexmea": `Femboy`,
"buddies.crafto": `Kisten stapeln`,
"buddies.anatom": `Furry`,
"buddies.enigma": `Denkt in 5D`,
"buddies.nyanmaths": `Hippie in Flip-Flops`,
"buddies.yapudjus": `KAAAAAATZEEEEE`,
"buddies.axelatlantid": `Objekt`,
"buddies.rypoint": `Unternehmer`,

"videoplayer": `Ihr Browser unterstützt keine Videowiedergabe`,
"translation": `Diese Seite wurde von ChatGPT 4o übersetzt und von eine nicht professionelle Person korrigiert.`
}

initLoc();
UpdateLanguage();
