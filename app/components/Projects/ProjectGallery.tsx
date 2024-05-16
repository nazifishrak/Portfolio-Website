import React from 'react';
import axios from 'axios';
import ProjectItem from "@/app/components/Projects/ProjectItem";
async function fetchRepo() {
    const username = process.env.GITHUB_USER_NAME;
    const token = process.env.GITHUB_TOKEN;

    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `token ${token}`,
            },
        });

        return response.data.map((repo: { id: any; name: any; description: any; }) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
        }));
    } catch (error) {
        console.error('Error fetching repositories', error);
        return [];
    }
}


export default async function ProjectGallery() {



    const repositories = await fetchRepo()


    return (
        <div>
            <h1>My GitHub Repositories</h1>
            <ul>
                {repositories.map((repo:any) => (
                    <ProjectItem title = {repo.name} desc = {repo.description} key={repo.id}/>
                ))}
            </ul>
        </div>
    );
};
