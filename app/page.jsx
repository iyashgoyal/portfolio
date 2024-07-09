// components
import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
/* import Services from "@/components/Services"; */
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className = "scrollbar-hide" >
    <main>
      <Hero />
      <About />
      {/*       <Services /> */}
      <Work />
      <Cta />
    </main>
    </div>
  );
}
