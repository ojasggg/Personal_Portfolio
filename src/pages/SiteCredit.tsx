import { useEffect } from "react";
import ReactGA from "react-ga";
import { Contact, Navbar } from "../components";

const siteCredits = [
  "React",
  "Tailwind",
  "Dribble",
  "Behance",
  "Vite",
  "Vercel",
  "gsap",
  "react-router",
  "react-icons",
  "microsoft gif icons",
  "https://www.pexels.com/",
  "https://www.taimoorshahzada.com/",
  "https://www.davidobodo.com/",
  "https://sureshmurali.github.io/",
];

const SiteCredit = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Navbar />
      <main className="mx-auto mb-20 mt-20 flex h-fit w-[95%] flex-col lg:w-[1100px] xl:w-[1500px]">
        <section className="mt-10 flex flex-col items-center">
          <p className="max-w-[1000px] text-center font-AvenirHeavy text-[26px] leading-normal text-white/40">
            I want to clarify that,{" "}
            <span className="text-white">I am not a professional designer</span>{" "}
            but I have created this design using my limited experience in web
            design and researching many inspiring designs on the internet. I
            explored some of the top designs created by experienced creative
            designers, front-end developers, UI/UX designers, and motion
            graphics designers, and found inspiration in their work.
          </p>
          <p
            className="mt-16 font-AvenirHeavy text-[26px] lg:mt-32 lg:text-[40px]"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            SiteCredits
          </p>
          <ul className="mt-4 flex flex-col items-center gap-2">
            {siteCredits.map((credit, index) => (
              <li
                key={index}
                className="font-AvenirRoman text-[20px] text-white/60 lg:text-[30px]"
                data-aos="fade-down"
                data-aos-offset="0"
                data-aos-delay={`${200 + index * 100}`}
                data-aos-duration="800"
              >
                {credit}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default SiteCredit;
