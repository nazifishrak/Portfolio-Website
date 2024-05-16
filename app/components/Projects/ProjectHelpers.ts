import axios from 'axios';

async function fetchRepo() {
    const username = process.env.GITHUB_USER_NAME;
    const token = process.env.GITHUB_TOKEN;

    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `token ${token}`,
            },
        });

        return response.data.map((repo: { id: any; name: any; description: any; html_url: any; language: any; }) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
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
            // Fetch the image URL for the repository
            const imageUrl = await fetchImageUrl(process.env.GITHUB_USER_NAME, repo.name, process.env.GITHUB_TOKEN);
            console.log(imageUrl)
            if (imageUrl!=null){
                filtered_repo_list.push({ ...repo, imageUrl });
            }

        }
    }

    console.log(filtered_repo_list);
    return filtered_repo_list;
}

(async () => {
    const result = await filterRepo();
    console.log(result);
})();

export default filterRepo;
