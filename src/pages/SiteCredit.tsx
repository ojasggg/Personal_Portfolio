import { useEffect } from "react";
import ReactGA from "react-ga";
import { Contact, Navbar, Transition } from "../components";

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
      <Transition />
      <Navbar />
      <main className="mx-auto mb-20 mt-20 flex h-fit w-[95%] flex-col lg:w-[1100px] xl:w-[1500px]">
        <section className="mt-10 flex flex-col items-center">
          <p className="max-w-[700px] text-center font-AvenirHeavy text-[26px] leading-tight text-white/40 lg:text-[40px]">
            I am <span className="text-white">not a Professional Designer</span>{" "}
            , I just created this design by my little experience of Web
            designing and from research of may inspiring designs out there in
            the Internet. I explore some of the top designs that experienced
            Creative Designer, FrontEnd Developers, UI/UX Designers, Motion
            Graphics Designers have created and got inspired by their works.
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
