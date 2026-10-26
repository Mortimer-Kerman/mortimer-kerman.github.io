const languageSelector = document.getElementById("language") ?? new Object();
const urlParams = new URLSearchParams(window.location.search);

const availableLanguages = {
    "en": "English",
    "fr": "French",
    "es": "Español",
    "de": "Deutsch"
};

const locDicts = {};

let language = (navigator.language || navigator.userLanguage).toLowerCase()

function initLoc() {
    if (document.referrer) {
        const referrerUrl = new URL(document.referrer);

        if (referrerUrl.origin === window.location.origin) {
            const langParam = referrerUrl.searchParams.get("lang");

            if (langParam && !urlParams.has("lang")) urlParams.set("lang", langParam);
        }
    }
    
    let languageFound = false;
    for (const [lang, name] of Object.entries(availableLanguages)) {

        if (language.startsWith(lang)) {
            language = lang;
            languageFound = true;
        }
    
        var option = document.createElement("option");
        option.value = lang;
        option.textContent = getFlagEmote(lang) + " " + name;
        if (languageSelector.appendChild) languageSelector.appendChild(option);
    };

    if (!languageFound) language = "en";
    
    if (urlParams.has("lang") && (urlParams.get("lang") in availableLanguages)) language = urlParams.get("lang");
    
    languageSelector.value = language;
    
    if (languageSelector.addEventListener) languageSelector.addEventListener("change", updateLanguage);

    updateLanguage();
}

async function updateLanguage() {
    language = languageSelector.value;

    var flag = language;
    if (flag == "en") flag = "gb";

    if (languageSelector.parentElement) {
        languageSelector.parentElement.style.setProperty("--flagurl", `url(https://flagicons.lipis.dev/flags/4x3/${flag}.svg)`);
        if (flag == "tok") languageSelector.parentElement.style.setProperty("--flagurl", `url(https://upload.wikimedia.org/wikipedia/commons/2/20/Toki_Pona_trans_flag.svg)`);
    }

    if (!(language in locDicts)) {
        locDicts[language] = await fetchLocDict(language);
    }

    document.querySelectorAll("[loc]").forEach((element) => {
        element.innerHTML = getLoc(element.getAttribute("loc"), element.innerHTML);
    });

    document.querySelectorAll("[descloc]").forEach((element) => {
        element.setAttribute("desc", getLoc(element.getAttribute("descloc"), element.getAttribute("desc")));
    });

    document.documentElement.lang = language;

    urlParams.set("lang", language);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
    window.history.replaceState({}, "", newUrl);

    if (languageSelector.blur) languageSelector.blur();
}

function getLoc(locKey, defaultLoc) {
    return getLocLang(locKey, defaultLoc, language);
}

function getLocLang(locKey, defaultLoc, lang) {
    const dict = locDicts[lang] ?? {};

    if (dict[locKey] != undefined) return parseLoc(dict[locKey]);

    if (lang != "en") return getLocLang(locKey, defaultLoc, "en");

    return defaultLoc;
}

const locParseMap = {
    "\n": "<br/>",
    "CARLCASEY_LINK": `<a href="https://youtube.com/@WhiteBatAudio" target="_blank" rel="noopener noreferrer">Carl Casey @White Bat Audio</a>`,
    "MODRINTH_HOLLOWKNIGHT": `<a href="https://modrinth.com/modpack/hollowknight" target="_blank" rel="noopener noreferrer">Modrinth</a>`,
    "GISCUS_LINK": `<a target="_blank" rel="noopener noreferrer" href="https://giscus.app">Giscus</a>`,
    "BUDDY_FRABLOCK": `<a onclick="mentionBuddy('Frablock')">Frablock</a>`,
    "BUDDY_ENIGMA": `<a onclick="mentionBuddy('Enigma')">Enigma</a>`,
    "BUDDY_ZOWEPSILON": `<a onclick="mentionBuddy('Zowepsilon')">Zowε</a>`,
};

function parseLoc(loc) {
    if (Array.isArray(loc)) loc = loc.join("\n");
    return loc.replace(/CARLCASEY_LINK|MODRINTH_HOLLOWKNIGHT|GISCUS_LINK|BUDDY_FRABLOCK|BUDDY_ENIGMA|BUDDY_ZOWEPSILON|\n/g, match => locParseMap[match]);
}

function getFlagEmote(countryCode) {
    if (countryCode == "en") return "🇬🇧";
    if (countryCode == "tok") return "🇹🇵";
    const codePoints = countryCode.toUpperCase().split("").map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

async function fetchLocDict(lang) {
    try {
        const response = await fetch(`/lang/${lang}.json`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }
    catch (error) {
        console.error(error);
        return {};
    }
}

initLoc();
