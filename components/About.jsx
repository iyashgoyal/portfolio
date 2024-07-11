import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yash Goyal",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7428911176",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 04 Sep,2003",
  },
  {
    icon: <MailIcon size={20} />,
    text: "work.yashgoyal@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "ABES Engineering College",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Uttar Pradesh, India",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "ABES Engineering College Aff. AKTU",
        qualification: "Btech in Computer Science",
        years: "2025",
      },
      {
        university: "Sun Valley International School (CBSE)",
        qualification: "XII",
        years: "2021",
      },
      {
        university: "Sun Valley International School (CBSE)",
        qualification: "X",
        years: "2019",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        head: "Programming:\t",
        name: "Python, C++, Javascript, HTML, CSS, SQL",
      },
      {
        head: " Framework & Library:\t",
        name: "NextJS, React, MongoDB, Node.js, Express",
      },
      {
        head: "Soft Skills:\t",
        name: "Public Speaking, Active Listener, Event Management, Team Player, Critical Thinking",
      },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/git.svg" },
      { imgPath: "/about/node.svg" },
      { imgPath: "/about/database.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="lg:h-[860px] pb-12 lg:py-24">
      <div className="container ">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto ">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          {/* image */}
          <div className="hidden lg:flex flex-1 relative ">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer2.webp"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] lg:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 w-[100%] lg:mt-8 lg:w-[125%]">
                {/* personal */}
                <TabsContent value="personal">
                  <div className=" text-center ">
                    <h3 className="h3 mb-4">
                      Passionate about building innovative web applications and
                      solving complex problems with code
                    </h3>
                    <p className="subtitle max-w-screen ">
                      I specialize in crafting intuitive websites with MERN and
                      Python. delivering dynamic and engaging user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid lg:grid-cols-2 gap-6 gap-x-14 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto lg:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div className="lg:min-w-[120%] text-left ">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages</div>
                      <div className="border-b border-border"></div>
                      <div>Hindi - Native</div>
                      <div>English - Fluent</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div className="flex-col justify-center items-center ml-12">
                    <h3 className="h3 mb-8 text-center lg:text-left">
                      My academic journey
                    </h3>
                    {/* experiencia y educacion wrapper */}
                    <div className="grid justify-center items-center md:grid-cols-2 gap-y-8">
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills & tools */}
                <TabsContent value="skills">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-8">Things i use everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            const { head } = item;
                            return (
                              <div
                                className="w-2/4 text-center lg:text-left mx-auto lg:mx-0"
                                key={index}
                              >
                                <span className="capitalize font-bold">
                                  {head}
                                </span>
                                <br></br>
                                <span className="font-medium ">{name}</span>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 lg:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center lg:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt="icons"
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
