import sanitizeHtml from 'sanitize-html';

export async function fetchMediumArticles() {
    try {
        let url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@louisphilip_s';
        if (process.env.RSS2JSON_API_KEY) {
            url += `&api_key=${process.env.RSS2JSON_API_KEY}`;
        }

        const response = await fetch(
            url,
            { next: { revalidate: 3600 } } // Revalidate every hour
        );

        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }

        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('RSS feed parsing failed');
        }

        return data.items.map((article, index) => ({
            id: article.guid || index,
            title: article.title,
            link: article.link,
            pubDate: article.pubDate,
            thumbnail: extractImage(article.description) || article.thumbnail,
            categories: article.categories,
            description: cleanDescription(article.description),
        }));
    } catch (error) {
        console.error('Error fetching Medium articles:', error);
        return [];
    }
}

function extractImage(content) {
    if (!content) return null;
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
}

function cleanDescription(description) {
    if (!description) return '';
    // Remove HTML tags using a robust library
    const cleanText = sanitizeHtml(description, { allowedTags: [], allowedAttributes: {} });
    // Truncate
    return cleanText.length > 150 ? cleanText.substring(0, 150) + '...' : cleanText;
}
