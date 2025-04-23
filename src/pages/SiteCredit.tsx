import { useEffect } from "react";
import ReactGA from "react-ga";
import { Contact, Navbar } from "../components";

const siteCredits: string[] = [
  "React",
  "Tailwind CSS",
  "Vite",
  "Vercel",
  "GSAP",
  "React Router",
  "React Icons",
  "Microsoft GIF Icons",
  "https://www.pexels.com/",
  "https://www.taimoorshahzada.com/",
  "https://www.davidobodo.com/",
  "https://sureshmurali.github.io/",
];

const SiteCredit = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto mb-20 mt-20 flex h-fit w-[95%] flex-col lg:w-[1100px] xl:w-[1500px]">
        <section className="mt-10 flex flex-col items-center text-center">
          <p className="max-w-[1000px] font-AvenirHeavy text-[22px] leading-normal text-white/60 lg:text-[26px]">
            I want to acknowledge that{" "}
            <span className="text-white">I'm not a professional designer</span>.
            This portfolio is the result of countless hours of learning,
            remixing, and drawing inspiration from amazing designers,
            developers, and creators around the world. Every pixel you see is
            built with curiosity, persistence, and appreciation for great
            design.
          </p>

          <h2
            className="mt-20 font-AvenirHeavy text-[32px] uppercase text-white lg:text-[40px]"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            Site Credits
          </h2>

          <ul className="mt-6 flex flex-col items-center gap-2">
            {siteCredits.map((credit, index) => {
              const isLink = credit.startsWith("http");
              return (
                <li
                  key={index}
                  className="font-AvenirRoman text-[18px] text-white/60 transition-all hover:text-white lg:text-[24px]"
                  data-aos="fade-down"
                  data-aos-delay={`${200 + index * 100}`}
                  data-aos-duration="800"
                >
                  {isLink ? (
                    <a href={credit} target="_blank" rel="noopener noreferrer">
                      {new URL(credit).hostname.replace("www.", "")}
                    </a>
                  ) : (
                    credit
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default SiteCredit;
