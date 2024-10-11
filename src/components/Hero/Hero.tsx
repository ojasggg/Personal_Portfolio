import Profile from "../../assets/Images/Profile/Profile.png";

const Hero = () => {
  return (
    <section
      className="flex h-[70vh] flex-col items-center justify-center leading-none lg:h-[80vh]"
      data-scroll-section
    >
      {/* Hiding Image of my-self to land Internship */}
      {/* <img
        src={Profile}
        alt="Profile Picture"
        width={240}
        className="mb-10"
        data-aos="fade-down"
        data-aos-delay="600"
      /> */}
      <h1
        className="mb-[46px] py-0 text-center font-Valencia text-[120px] leading-none text-white lg:text-[140px]"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Ojash Gurung
      </h1>
      <h3
        className="w-[50%] text-center font-AvenirRoman text-[24px] lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span className="leading-relaxed">
          MSCS Student at Monroe University <span className="text-sm">(Expected Graduation, Sep 2026)</span><br></br>| Software Development | Artificial Intelligence |<br></br>| SpringBoot | React.js |
        </span>
      </h3>
    </section>
  );
};

export default Hero;
