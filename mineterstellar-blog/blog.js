const articlesList = document.getElementById("articles-list");
const modalArticle = document.getElementById("modal-article");
const articleContent = document.getElementById("article-content");
const articleText = document.getElementById("article-text");
const copyArticle = document.getElementById("copyArticle");
let comments = null;

let articlesIds = [];

async function loadArticles() {
    try {
        const response = await fetch("./articles/articleslist.txt");

        if (!response.ok) throw new Error("Articles list couldn't be retreived");

        const text = await response.text();

        articlesIds = text.split("\n").map(line => line.trim()).filter(line => line.length > 0);

        await Promise.all(articlesIds.map(async (articleId, index) => { await loadArticleSum(articleId, index); }));

        sortArticles();

        if (urlParams.has("article")) openArticle(urlParams.get("article"));
    }
    catch (error) {
        console.error("Error :", error);
    }
}

async function loadArticleSum(id, index) {
    try {
        const response = await fetch(`articles/${id}.md`);

        if (!response.ok) {
            throw new Error(`Failed to load ${id}`);
        }

        const text = await response.text();

        const title = extractTitle(text);
        const date = extractDate(text);
        const thumbnail = extractThumbnail(text);
        const stats = await getArticleStats(id);

        displayArticleSum(id, title, date, thumbnail, stats, index);
    }
    catch (error) {
        console.error(`Error for ${id} :`, error);
    }
}

function sortArticles() {

    const articles = Array.from(articlesList.children);

    articles.sort((a, b) => {
        return parseInt(a.getAttribute("data-index")) - parseInt(b.getAttribute("data-index"));
    });

    articles.forEach(article => articlesList.appendChild(article));
}

async function getArticleStats(id) {

    let stats = {
        comments: 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0
    }

    try {
        const response = await fetch(`/api/github_discussions.php?user=Mortimer-Kerman&repo=mortimer-kerman.github.io&title=${id}`);

        if (!response.ok) {
            throw new Error(`Failed to load ${id}`);
        }

        try {
            console.log(response);
            const json = await response.json();

            stats.comments = json.comments;
            stats.laugh = json.reactions.laugh;
            stats.hooray = json.reactions.hooray;
            stats.confused = json.reactions.confused;
            stats.heart = json.reactions.heart;
            stats.rocket = json.reactions.rocket;
            stats.eyes = json.reactions.eyes;
        }
        catch (jsonError) { throw new Error(`JSON error: ${jsonError}`); }
    }
    catch (error) {
        console.error(`Error for ${id} :`, error);
    }

    return stats;
}

function extractTitle(text) {
    const titleMatch = text.match(/^# (.+)/m);
    return titleMatch ? titleMatch[1] : "No title found";
}

function extractDate(text) {
    const dateMatch = text.match(/\*([^\*]+)\*/);
    return dateMatch ? dateMatch[1] : "No date found";
}

function extractThumbnail(text) {
    const imgMatch = text.match(/<img[^>]+src="([^"]+)"[^>]*>/);
    return imgMatch ? imgMatch[1] : "";
}

function displayArticleSum(id, title, date, thumbnail, stats, index) {

    const articleSum = document.createElement("div");
    articleSum.setAttribute("data-index", index);
    articleSum.classList.add("article-sum");
    articleSum.onclick = () => { openArticle(id); };

    const titleElem = document.createElement("h3");
    titleElem.textContent = title;

    const dateElem = document.createElement("i");
    dateElem.textContent = date;

    const imgElem = document.createElement("img");
    imgElem.loading = "lazy";
    imgElem.src = thumbnail;
    
    const statsElem = document.createElement("div");

    const comments = document.createElement("div");
    comments.className = "reaction";
    //<svg width="30px" height="30px"><use href="/sprites.svg#comments"/></svg>
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("width", "1em");
    icon.setAttribute("height", "1em");
    const svgSource = document.createElementNS("http://www.w3.org/2000/svg", "use");
    svgSource.setAttribute("href", "/sprites.svg#comments");
    icon.appendChild(svgSource);
    comments.appendChild(icon);

    comments.innerHTML += stats.comments;
    statsElem.appendChild(comments);

    if(stats.laugh > 0) {
        const reaction = document.createElement("div");
        reaction.className = "reaction";
        reaction.innerText += `😄 ${stats.laugh}`;
        statsElem.appendChild(reaction);
    }
    if(stats.hooray > 0) {
        const reaction = document.createElement("div");
        reaction.className = "reaction";
        reaction.innerText += `🎉 ${stats.hooray}`;
        statsElem.appendChild(reaction);
    }
    if(stats.confused > 0) {
        const reaction = document.createElement("div");
        reaction.className = "reaction";
        reaction.innerText += `😕 ${stats.confused}`;
        statsElem.appendChild(reaction);
    }
    if(stats.heart > 0) {
        const reaction = document.createElement("div");
        reaction.className = "reaction";
        reaction.innerText += `❤️ ${stats.heart}`;
        statsElem.appendChild(reaction);
    }
    if(stats.rocket > 0) {
        const reaction = document.createElement("div");
        reaction.className = "reaction";
        reaction.innerText += `🚀 ${stats.rocket}`;
        statsElem.appendChild(reaction);
    }
    if(stats.eyes > 0) {
        const reaction = document.createElement("div");
        reaction.className = "reaction";
        reaction.innerText += `👀 ${stats.eyes}`;
        statsElem.appendChild(reaction);
    }

    articleSum.appendChild(titleElem);
    articleSum.appendChild(dateElem);
    articleSum.appendChild(imgElem);
    articleSum.appendChild(statsElem);

    articlesList.appendChild(articleSum);
}

async function loadArticleHtml(articleId) {
    try {
        const response = await fetch(`articles/${articleId}.md`);
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        articleText.innerHTML = htmlContent;
        document.title = extractTitle(markdownText);

        if (comments) comments.remove();

        comments = document.createElement("iframe");
        comments.id = "comments";
        comments.src = `comments.html?article=${articleId}&style=${document.body.classList.contains("light") ? "light" : "dark"}&lang=${language}`;
        comments.onload = function() {
            updateCommentsHeight();
            setInterval(updateCommentsHeight, 1000);
        };
        comments.style.height = "0px";

        articleContent.appendChild(comments);
    }
    catch (error) {
        console.error(`Error for ${articleId} :`, error);
        articleText.innerHTML = "<p>Failed to load the article.</p>";
    }
}

function openArticle(articleId) {
    if (!articlesIds.includes(articleId)) return;

    modalArticle.style.display = "flex";
    document.body.style.overflow = "hidden";
    articleContent.style.overflow = "auto";

    copyArticle.onclick = () => {
        url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?article=${articleId}`;
        navigator.clipboard.writeText(url);
        showSnack(getLoc("copiedLink", `Copied link to clipboard`));
    };

    urlParams.set("article", articleId);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
    window.history.replaceState({}, "", newUrl);

    var script = document.getElementById("markdownScript");

    if (script)
    {
        loadArticleHtml(articleId);
    }
    else
    {
        script = document.createElement("script");
        script.id = "markdownScript";
        script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
        script.onload = () => { loadArticleHtml(articleId); };
        document.head.appendChild(script);
    }

    modalArticle.focus();
    
    history.pushState(null, '', location.href);
}

function closeArticle()
{
    modalArticle.style.display = "none";
    document.body.style.overflow = "auto";
    document.title = "Mineterstellar dev blog";
    urlParams.delete("article");
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
    window.history.replaceState({}, "", newUrl);
}

function updateCommentsHeight()
{
    let mobileComments = isMobile();

    let commentsHeight = comments.contentWindow.document.body.scrollHeight;

    if(mobileComments) commentsHeight *= 2;

    comments.contentWindow.postMessage({ mobile : mobileComments }, "*");
    
    comments.style.height = (commentsHeight + 20) + "px";
}

function articleOpen() {
    return modalArticle.style.display == "flex";
}

document.addEventListener("keydown", (event) => {
    if (articleOpen()) {
        if (event.key === "Escape") closeArticle();
    }
}, false);

window.addEventListener('popstate', function (event) {
    if (articleOpen()) {
        closeArticle();
        event.preventDefault();
    }
});

window.onload = loadArticles;
