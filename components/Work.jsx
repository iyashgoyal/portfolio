"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    image: "/work/formzy home page.png",
    category: "next js / fullstack",
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

const Work = () => {
  return (
    <section className="relative mb-12 lg:mb-48">
      <div className=" flex flex-col lg:container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            These are some of my latest projects
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className=" max-w-[335px] mx-auto relative lg:max-w-[800px] absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}>
            {/* mostrar solo los primero 4 proyectos en el slider */}
            {projectsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
