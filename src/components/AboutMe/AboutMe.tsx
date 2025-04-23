import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section
      className="relative my-32 mx-auto h-fit max-md:w-[90vw] lg:h-[100vh] lg:w-[1200px] xl:w-[1600px]"
      data-scroll-section
    >
      <h1
        className="p-0 font-AvenirHeavy text-[80px] leading-none text-white/20 md:text-[140px] lg:text-[200px] lg:text-white/20"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        ABOUT ME
      </h1>
      <div className="ml-[60px] pt-12 lg:mr-[57px] lg:ml-[263px]">
        <p
          className="my-6 italic text-white/40"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          “If it solves a real problem, I want to build it. If it scales, I want
          to optimize it.”
        </p>
        <h3
          className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[16px] text-transparent sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1400"
        >
          I'm Ojash Gurung — an international M.S. Computer Science student at
          Monroe University, passionate about backend systems, full-stack
          development, and AI-powered products.
          <br />
          <br />
          In 2025, I built{" "}
          <a
            className="font-medium text-white underline"
            href="https://www.selfai.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            SelfAI.
          </a>
          , a full-stack AI platform that lets users create personal AI agents
          using document-driven RAG pipelines. It integrates FastAPI,
          PostgreSQL, Pinecone, Redis, and OpenAI to deliver real-time,
          intelligent experiences.
          <br />
          <br />I love building things that matter, and I’m currently looking
          for software engineering or backend roles — with a long-term goal of
          working in AI infrastructure and LLM applications.
        </h3>
        <ul
          className="mx-auto mt-10 flex flex-col justify-center space-y-2 text-[16px] text-white/60"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          <li>
            📘 B.Sc. in Computer Science – Coventry University (2019–2022)
          </li>
          <li>🚀 Launched SelfAI – an AI platform for professional profiles</li>
          <li>🏆 Winner – 2021 IoT Expo (Smart Glasses project)</li>
          <li>🎯 Goal: Land a backend/AI role at a top-tier tech company</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
