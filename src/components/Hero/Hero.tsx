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
        className="sm:mt-[300px] lg:mt-0 mb-[46px] py-0 text-center font-Valencia text-[100px] leading-none text-white lg:text-[140px]"
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
          MSCS Student at Monroe University <span className="text-[12px] lg:text-sm">(Expected Graduation, Sep 2026)</span><br></br></span>
      </h3>
      <h3
        className="w-[80%] mt-4 text-center font-AvenirRoman text-[22px] lg:text-[28px] leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span>| Software Development | Artificial Intelligence |<br></br>| Python | Rest Framework |</span>
      </h3>
      
        
    </section>
  );
};

export default Hero;
