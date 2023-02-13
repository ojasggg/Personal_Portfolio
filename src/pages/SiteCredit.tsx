import { Contact, Navbar, Transition } from "../components";

const siteCredits = [
  "React",
  "Tailwind",
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
  return (
    <>
      {/* <Transition /> */}
      <Navbar />
      <main className="mx-auto mb-20 mt-20 flex h-fit w-[95%] flex-col lg:w-[1100px] xl:w-[1500px]">
        <section className="mt-10 flex flex-col items-center">
          <p className="max-w-[700px] text-center text-center font-AvenirHeavy text-[26px] leading-tight text-white/40 lg:text-[40px]">
            I am <span className="text-white">not a Professional Designer</span>{" "}
            , I just create design using my intuition and little experience and
            to get some inspiration I need to explore some of the top designs
            that online creators have created from Creative Designer to web
            designer to motion designer.
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

          {/* <p className="mt-20 max-w-[700px] p-0 text-center font-AvenirHeavy text-[80px] uppercase leading-tight tracking-tighter text-white">
            Thankyou Very Much!
          </p> */}
        </section>
      </main>
      <Contact />
    </>
  );
};

export default SiteCredit;
