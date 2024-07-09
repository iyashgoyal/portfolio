import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
   RiBriefcase4Fill,
   RiGitRepositoryCommitsFill,
   RiTodoFill,
   RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";

const Hero = () => {
   return (
      <section className=" lg: h-[84vh] lg: pt-8 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
         <div className="container mx-auto">
            <div className="flex justify-between gap-x-64">
               {/* text */}
               <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
                  <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                     Web Developer
                  </div>
                  <h1 className="h1 mb-4 w-[120%]">Hello, my name is Yash Goyal</h1>
                  <p className="subtitle  max-w-[490px] mx-auto lg:mx-0">
                     I am Aspiring Full Stack Developer and Python Enthusiast This is a brief description wilh insights into myself, my vocational
                     journey, and what I engage in professionally.
                  </p>
                  {/* botones */}
                  <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12">
                     <Link href="/contact">
                        <Button className="gap-x-2">
                           Contact me <Send size={18} />
                        </Button>
                     </Link>
                     <a target="_blank" href="https://drive.google.com/file/d/1xdPd5-qw0BvueFbnHfJiEzS5HBIcW2-W/view?usp=sharing">
                     <Button variant="secondary" className="gap-x-2">
                        
                        Download CV <Download size={18} />
                     </Button>
                     </a>
                  </div>
                  {/* socials */}
                  <Socials
                     containerStyles="flex gap-x-6 mx-auto lg:mx-0"
                     iconsStyles="text-foreground text--[22px] hover:text-primary transition-all"
                  />
               </div>
               {/* image */}
               <div className="hidden lg:flex relative">
                  {/* Badge 1 */}
                  {/*<Badge
                     containerStyles="absolute top-[24%] -left-[5rem]"
                     icon={<RiBriefcase4Fill />}
                     endCountNum={3}
                     badgeText="Años desempleado"
                  />*/}
                  {/* Badge 2 */}
                  {/*<Badge
                     containerStyles="absolute top-[80%] -left-[1rem]"
                     icon={<RiTodoFill />}
                     endCountNum={0}
                     endCountText="k"
                     badgeText={
                        <span className="text-sm leading-none">
                           Proyectos Terminados
                        </span>
                     }
                  />*/}
                  {/* Badge 3 */}
                  {/*<Badge
                     containerStyles="absolute top-[55%] -right-8"
                     icon={<RiGitRepositoryCommitsFill />}
                     endCountNum={140}
                     badgeText={
                        <span className="text-sm leading-none">
                           Code Commits
                        </span>
                     }
                  />*/}
                  <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                  <DevImg
                     containerStyles="bg-hero_shape w-[510px] h-[489px] bg-no-repeat relative bg-bottom"
                     imgSrc="/hero/developer.webp"
                  />
               </div>
            </div>
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce">
               <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
