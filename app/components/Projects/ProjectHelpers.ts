import axios from 'axios';

async function fetchRepo() {
    const username = process.env.GITHUB_USER_NAME;
    const token = process.env.GITHUB_TOKEN;

    try {
        let response = await fetch(`https://api.github.com/users/${username}/repos`, {
            cache: 'no-store',
            method: 'GET',
            headers: {
                Authorization: `token ${token}`,
            },
        });
        let data = await response.json();

        return data.map((repo: { id: any; name: any; description: any; html_url: any; language: any; pushed_at: any; }) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            pushed_at: repo.pushed_at,
        }));
    } catch (error) {
        console.error('Error fetching repositories', error);
        return [];
    }
}

async function fetchImageUrl(owner: string | undefined, repo: any, token: string | undefined) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/img.png`;
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });
        return response.data.download_url;
    } catch (error) {
        // @ts-ignore
        console.error(`Error fetching image URL for ${repo}`, error.response?.data || error.message);
        return null;
    }
}

const excluded_repo_names = [
    "Blockchain-Ledger", "CustomJavaThread", "Generative-Recursion-Sudoku-Solver", "jpmc-swe-t2",
    "nazifishrak", "EJS-Express-templated-to-do-app", "Ecommerce-MERN", "Drum-Kit-with-JS",
    "DiceRollerGame", "DailyPython", "NodeJs-Setup", "Ecommerce-MERN"
];

async function filterRepo() {
    const repositories = await fetchRepo();
    const filtered_repo_list = [];

    for (const repo of repositories) {
        if (!excluded_repo_names.includes(repo.name)) {
            const imageUrl = await fetchImageUrl(process.env.GITHUB_USER_NAME, repo.name, process.env.GITHUB_TOKEN);
            if (imageUrl!=null){
                filtered_repo_list.push({ ...repo, imageUrl });
            }

        }
    }

    return filtered_repo_list;
}

(async () => {
    const result = await filterRepo();
})();

export default filterRepo;
