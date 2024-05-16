import React from 'react';
import ProjectItem from "@/app/components/Projects/ProjectItem";
import filterRepo from "@/app/components/Projects/ProjectHelpers";


export default async function ProjectGallery() {


// @ts-ignore
    let result= await filterRepo()



    return (
        <div>
            <h1>My GitHub Repositories</h1>
            <ul>
                {result.map((repo:any) => (
                    <ProjectItem imageUrl={repo.imageUrl} title = {repo.name} desc = {repo.description} key={repo.id}/>
                ))}
            </ul>
        </div>
    );
};
