const Hero = () => {
  return (
    <section
      className="flex h-[70vh] flex-col items-center justify-center leading-none lg:h-[80vh]"
      data-scroll-section
    >
      <h1
        className="mb-[46px] py-0 text-center font-Valencia text-[120px] leading-none text-white lg:text-[140px]"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Ojash Gurung
      </h1>
      <h3
        className="text-center font-AvenirRoman text-[24px] lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span>MERN Stack Developer</span> & UI/UX Designer
      </h3>
    </section>
  );
};

export default Hero;
