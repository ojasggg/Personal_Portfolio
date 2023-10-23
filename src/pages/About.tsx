import { Contact, Navbar, Transition } from "../components";
import Profile from "../assets/Images/Personal/Picture.jpg";
import Nepal from "../assets/Images/Personal/Nepal.jpg";
import UI from "../assets/Images/Personal/UI.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="m-auto mb-40 mt-16 flex h-fit flex-col lg:mt-20 lg:w-[1100px] xl:w-[1500px]">
        <section className="relative h-fit">
          <div className="absolute top-3 left-0 z-[1] ">
            <h1 className="p-0 font-Valencia text-[160px] leading-none text-white lg:text-[200px] xl:text-[240px]">
              Ojash
            </h1>
            <h1 className="absolute top-28 left-20 p-0 font-Valencia text-[160px] leading-none text-white lg:top-32 lg:left-28 lg:text-[200px] xl:top-36 xl:text-[240px]">
              Gurung
            </h1>
          </div>
          <div className="mt-[200px] flex items-center justify-center lg:mt-[100px]">
            <div className="relative h-[400px] lg:h-[600px] lg:w-[500px] xl:h-[800px] xl:w-[600px]">
              <img
                className=" h-[400px] object-cover lg:h-[600px] lg:w-[500px] xl:h-[800px] xl:w-[600px]"
                src={Profile}
              />
              <div className="absolute top-6 left-6 z-[-1] h-[400px] w-[260px] border border-white/60 lg:h-[600px] lg:w-[500px] xl:h-[800px] xl:w-[600px]"></div>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <div className="flex h-fit flex-col gap-0 font-Valencia text-[100px] leading-none tracking-wide lg:text-[200px]">
            <p
              className="p-0 leading-none"
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Data Science
            </p>
            <div className="m-0 flex w-full justify-end pr-6 lg:pr-0">
              <p
                className="p-0 leading-none"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                Artificial Intelligence
              </p>
            </div>
            <p
              className="p-0 leading-none"
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Web Developer
            </p>
          </div>
          <div className="mt-20 flex gap-10">
            <div className="hidden flex-col items-center gap-2 py-6 lg:flex">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-10 font-AvenirHeavy text-black"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="0"
                data-aos-duration="800"
              >
                2000
              </div>
              <div
                className="w-[2px] rounded-full bg-white lg:h-[250px] xl:h-[350px]"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="1000"
              ></div>
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-10 font-AvenirHeavy text-black"
                data-aos="fade-down"
                data-aos-offset="0"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                2023
              </div>
            </div>
            <div className="flex flex-col gap-14 lg:gap-20">
              <div className="m-auto flex w-[90%] flex-col gap-4 lg:m-0 lg:w-[95%] lg:flex-row ">
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-AvenirRoman text-[20px] text-white/60  xl:text-[24px]"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    Hi! I was born in Kathmandu, Nepal in 2000. Ever since my
                    childhood, I have loved playing cricket and working with
                    electronics. When I was 11 years old, my aunt gave me my
                    first PC.
                  </h3>
                  <h3
                    className="font-AvenirRoman text-[20px] text-white/60 xl:text-[24px]"
                    data-aos="fade-down"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    During my graduation, I participated in numerous projects
                    with my team and independently learned about machine
                    learning algorithms and their applications. Initially, I
                    found concepts such as supervised learning, unsupervised
                    learning, and reinforcement learning to be challenging and
                    confusing. However, as I began to apply these concepts to
                    real-world scenarios, I slowly started to comprehend their
                    applications and potential uses.
                  </h3>
                </div>
                <img
                  src={Nepal}
                  alt="NepalTemple"
                  className="lg:w-[40%]"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />
              </div>
              <div className="m-auto flex w-[90%] flex-col gap-4 lg:m-0 lg:w-[95%] lg:flex-row">
                <img
                  src={UI}
                  alt="NepalTemple"
                  className="order-last lg:order-first lg:w-[40%]"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />

                <h3
                  className="font-AvenirRoman text-[20px] text-white/60 xl:text-[24px]"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  I have a keen interest in web development as well. It's not
                  just because of creating websites, but to showcasing my
                  projects. This is the main reason for creating my website.
                  Another important reason for studying machine learning and web
                  development is to participate in open-source contributions
                  such as Hackathon, Hacktoberfest, GSOC, and many more. I have
                  constantly been part of these Hackathon tournaments and have
                  given my sufficient time getting involved in open source
                  communities. I have also started mentoring some of my local
                  students. I love to share what I learn because when I was
                  researching and studying, I had no one to guide me.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default About;
