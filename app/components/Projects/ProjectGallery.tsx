import React from 'react';
import ProjectItem from "@/app/components/Projects/ProjectItem";
import filterRepo from "@/app/components/Projects/ProjectHelpers";


export default async function ProjectGallery() {
    interface Repository {
        id: number;
        name: string;
        description: string;
        language: string;
        url: string;
        pushed_at: string;
        imageUrl: string;
    }
// @ts-ignore
    let result: Repository[] = await filterRepo();
    // console.log(result)
    result.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());



    return (
        <div>

            <h1 className="text-center mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">From <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Github</span>
            </h1>


            <ul>
                {result.map((repo: any) => (
                    <ProjectItem imageUrl={repo.imageUrl} title={repo.name} desc={repo.description}
                                 language={repo.language}  url={repo.url} date={repo.pushed_at} key={repo.id}/>
                ))}
            </ul>
        </div>
    );
};
