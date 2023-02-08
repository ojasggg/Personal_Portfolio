import { Contact } from "../components";

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
      <main className="m-auto mb-20 mt-20 flex h-fit flex-col lg:w-[1100px] xl:w-[1500px]">
        <section className="mt-10 flex flex-col items-center">
          <p className="max-w-[700px] text-center font-AvenirHeavy text-[40px] text-white/40">
            I am <span className="text-white">not a Professional Designer</span>{" "}
            , I just create design using my intuition and little experience and
            to get some inspiration I need to explore some of the top designs
            that online creators have created from Creative Designer to web
            designer to motion designer.
          </p>
          <p className="mt-32 font-AvenirHeavy text-[40px]">SiteCredits</p>
          <ul className="mt-10 flex flex-col items-center gap-4">
            {siteCredits.map((credit, index) => (
              <li
                key={index}
                className="font-AvenirMedium text-[30px] text-white/60"
              >
                {credit}
              </li>
            ))}
          </ul>

          <p className="mt-20 max-w-[700px] p-0 text-center font-AvenirHeavy text-[80px] uppercase leading-tight tracking-tighter text-white">
            Thankyou Very Much!
          </p>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default SiteCredit;
