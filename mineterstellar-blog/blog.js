const articlesList = document.getElementById("articles-list");
const modalArticle = document.getElementById("modal-article");
const articleContent = document.getElementById("article-content");
const articleText = document.getElementById("article-text");
const comments = document.getElementById("comments");
const copyArticle = document.getElementById("copyArticle");

let articlesIds = [];

async function loadArticles() {
    try {
        const response = await fetch("articles/articleslist.txt");

        if (!response.ok) throw new Error("Articles list couldn't be retreived");

        const text = await response.text();

        articlesIds = text.split("\n").map(line => line.trim()).filter(line => line.length > 0);

        articlesIds.forEach(async articleId => {
            await loadArticleSum(articleId);
        });
    }
    catch (error) {
        console.error("Error :", error);
    }
}

async function loadArticleSum(id) {
    try {
        const response = await fetch(`articles/${id}.md`);

        if (!response.ok) {
            throw new Error(`Failed to load ${id}`);
        }

        const text = await response.text();

        const title = extractTitle(text);
        const date = extractDate(text);
        const thumbnail = extractThumbnail(text);

        displayArticleSum(id, title, date, thumbnail);
    }
    catch (error) {
        console.error(`Error for ${id} :`, error);
    }
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

function displayArticleSum(id, title, date, thumbnail) {

    const articleSum = document.createElement("div");
    articleSum.classList.add("article-sum");
    articleSum.onclick = () => { openArticle(id); };

    const titleElem = document.createElement("h3");
    titleElem.textContent = title;

    const dateElem = document.createElement("i");
    dateElem.textContent = date;

    const imgElem = document.createElement('img');
    imgElem.loading = "lazy";
    imgElem.src = thumbnail;
    
    articleSum.appendChild(titleElem);
    articleSum.appendChild(dateElem);
    articleSum.appendChild(imgElem);

    articlesList.appendChild(articleSum);
}

async function loadArticleHtml(articleId) {
    try {
        const response = await fetch(`articles/${articleId}.md`);
        const markdownText = await response.text();
        const htmlContent = marked.parse(markdownText);
        articleText.innerHTML = htmlContent;
        document.title = extractTitle(markdownText);
        comments.src = `comments.html?article=${articleId}&style=${document.body.classList.contains("light") ? "light" : "dark"}&lang=${language}`;
    } catch (error) {
        console.error(`Error for ${articleId} :`, error);
        articleText.innerHTML = "<p>Failed to load the article.</p>";
    }
}

function openArticle(articleId)
{
    if (!articlesIds.includes(articleId)) return;

    modalArticle.style.display = "flex";
    document.body.style.overflow = "hidden";
    articleContent.style.overflow = "auto";

    copyArticle.onclick = () => {
        url = `${window.location.protocol}//${window.location.hostname}${window.location.pathname}?article=${articleId}`;
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
    comments.style.height = "0px";
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

if(urlParams.has("article")) openArticle(urlParams.get("article"));

function updateCommentsHeight() {
    comments.style.height = (comments.contentWindow.document.body.scrollHeight + 20) + "px";
}

comments.onload = function() {
    updateCommentsHeight();
    setInterval(updateCommentsHeight, 1000);
};

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
