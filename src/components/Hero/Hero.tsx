const Hero = () => {
  return (
    <section
      id="home"
      className="flex h-[70vh] flex-col items-center justify-center leading-none lg:h-[80vh]"
      data-scroll-section
    >
      <h1
        className="mb-[46px] py-0 text-center font-Valencia text-[100px] leading-none text-white sm:mt-[300px] lg:mt-0 lg:text-[140px]"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Ojash Gurung
      </h1>
      <h3
        className="w-[50%] text-center font-AvenirRoman text-[22px] lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span className="leading-relaxed">
          Software Developer Intern @ VeraAI{" "}
        </span>
      </h3>
      <h3
        className="w-[50%] text-center font-AvenirRoman text-[22px] lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span className="leading-relaxed">
          MSCS Student @ Monroe University{" "}
          <span className="text-[1px] lg:text-sm">
            (Expected Graduation, April 2026)
          </span>
          <br></br>
        </span>
      </h3>
      <h3
        className="mt-4 w-[80%] text-center font-AvenirRoman text-[22px] leading-relaxed text-gray-400 lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span>
          | FullStack · AI · RAG · Cloud |<br />| Python · Java · FastAPI ·
          PostgreSQL · Next.js |
        </span>
      </h3>
      <p
        className="mt-12 text-center text-[16px] text-gray-400"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Founder of{" "}
        <a
          className="text-lg font-medium text-white underline"
          href="https://www.selfai.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          SelfAI.
        </a>{" "}
        — building intelligent, shareable profiles powered by RAG pipelines.
      </p>
    </section>
  );
};

export default Hero;
