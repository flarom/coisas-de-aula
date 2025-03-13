async function loadRSS() {
    try {
        const response = await fetch('rss.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const items = xml.querySelectorAll("item");
        const feed = document.getElementById("rss-feed");

        items.forEach(item => {
            const title = item.querySelector("title")?.textContent || "Sem título";
            const pubDate = item.querySelector("pubDate")?.textContent || "Data desconhecida";
            const description = item.querySelector("description")?.textContent || "Sem descrição";

            const titleId = title.toLowerCase().replace(/\s+/g, '-');

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("rss-item");

            const titleDiv = document.createElement("div");
            titleDiv.classList.add("rss-title-container");

            const titleElement = document.createElement("h2");
            titleElement.textContent = title;
            titleElement.classList.add("rss-title");
            titleElement.id = titleId;

            const dateElement = document.createElement("p");
            dateElement.textContent = pubDate;
            dateElement.classList.add("rss-pub-date");

            titleDiv.appendChild(titleElement);
            titleDiv.appendChild(dateElement)

            const descriptionElement = document.createElement("div");
            descriptionElement.innerHTML = description;
            descriptionElement.classList.add("rss-description");

            itemDiv.appendChild(titleDiv);
            itemDiv.appendChild(descriptionElement);

            feed.appendChild(itemDiv);
        });
    } catch (error) {
        console.error("Erro ao carregar o RSS:", error);
    }
}

loadRSS();