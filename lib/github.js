export async function fetchStarredRepos() {
    try {
        const headers = {};
        if (process.env.GITHUB_TOKEN) {
            headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(
            'https://api.github.com/users/louisphilip/starred?sort=created&direction=desc',
            {
                headers,
                next: { revalidate: 3600 }
            } // Revalidate every hour
        );

        if (!response.ok) {
            throw new Error('Failed to fetch starred repos');
        }

        const repos = await response.json();

        return repos.map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics
        }));
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
