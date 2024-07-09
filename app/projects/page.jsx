"use client";
import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    image: "/work/formzy home page.png",
    category: "next js",
    name: "Formzy - Ai form builder",
    description:
      "An Ai enabled form builder using  Next.js 14, React, Tailwind CSS, Postgresql, Shad cn/ui , Stripe, Clerk.",
    link: "https://formzy.vercel.app/",
    github: "https://github.com/iyashgoyal/Formzy---An-Ai-enabled-Form-Builder",
  },
  {
    image: "/work/passkeeper.png",
    category: "Fullstack",
    name: "Passkeeper",
    description:
      "Password manager created using React, Mongodb, Expressjs, Nodejs, Tailwind CSS ",
    //link: "",
    github: "https://github.com/iyashgoyal/PassKeeper",
  },
  {
    image: "/work/Spotify clone.png",
    category: "HTML CSS JS",
    name: "Spotify clone",
    description:
      "A functional clone of spotify web app using html css and javascript ",
    //link: "",
    github: "https://github.com/iyashgoyal/Spotify-Clone",
  },
  {
    image: "/work/todo.png",
    category: "FullStack",
    name: "iTask - your task planner",
    description:
      "Responsive Todolist to plan your day to day tasks built using Reactjs ",
    //link: "",
    github: "https://github.com/iyashgoyal/iTask-your-task-planner",
  },
];

//remove category duplicates
const Projects = () => {
  // Create unique categories and organize projects
  const { categories, projectsByCategory } = useMemo(() => {
    const categoriesSet = new Set(["all"]);
    const projectsByCategory = { all: [] };

    projectsData.forEach(project => {
      const lowercaseCategory = project.category.toLowerCase();
      categoriesSet.add(lowercaseCategory);
      
      if (!projectsByCategory[lowercaseCategory]) {
        projectsByCategory[lowercaseCategory] = [];
      }
      projectsByCategory[lowercaseCategory].push(project);
      projectsByCategory.all.push(project);
    });

    return {
      categories: Array.from(categoriesSet),
      projectsByCategory
    };
  }, []);

  const [category, setCategory] = useState("all");

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          MY Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-32">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] md-12 mx-auto md:border dark:border-none">
            {categories.map((cat, index) => (
              <TabsTrigger
                onClick={() => setCategory(cat)}
                value={cat}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projectsByCategory[category].map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;