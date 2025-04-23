import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { achievements } from "../../constants/achievements";

const AchievementCard = ({
  achievement,
  images,
}: {
  achievement: (typeof achievements)[0];
  images: string[];
}) => {
  return (
    <div className="lg:flex lg:gap-10">
      <div className="grid max-h-fit grid-cols-2 grid-rows-2 gap-4 lg:ml-[100px] lg:max-w-[36%]">
        {images.map((img, index) => (
          <div
            key={index}
            className={index === 0 ? "col-span-2 w-full" : "w-full"}
          >
            <img
              src={img}
              alt={achievement.project}
              className={`rounded ${
                index !== 0 ? "lg:h-[138px] xl:h-fit" : ""
              } w-full`}
            />
          </div>
        ))}
      </div>
      <div className="z-[10] mx-auto mt-0 w-[90%] lg:mt-[50px]">
        <p
          className="font-AvenirBook text-[14px] text-white/60 lg:text-[18px]"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          {achievement.year}
        </p>
        <div className="flex items-center gap-2 lg:gap-4 lg:pt-2">
          <h3
            className="z-10 p-0 font-AvenirMedium text-[14px] uppercase leading-none text-white lg:text-[22px] xl:text-[26px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {achievement.event}
          </h3>
          <div
            className="h-[2px] w-10 rounded-full bg-white xl:h-1"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          />
          <p
            className="z-10 p-0 font-AvenirLight text-[14px] uppercase leading-none text-white/60 lg:text-[16px] xl:text-[18px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {achievement.organization}
          </p>
        </div>
        <div className="mt-4">
          <p
            className="leading-wide max-w-[800px] font-AvenirRoman text-[16px] text-white/60 lg:text-[20px] xl:text-[24px] xl:leading-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="font-AvenirMedium text-white">
              {`${achievement.title} of ${achievement.event}`}
            </span>
            , my team{" "}
            <span className="font-AvenirMedium text-white">
              {achievement.team}
            </span>{" "}
            we created a{" "}
            <span className="font-AvenirMedium text-white">
              {achievement.project}
            </span>
            . {achievement.summary}
          </p>
        </div>
        {(achievement.github || achievement.video) && (
          <div className="mt-8 flex items-center gap-4 lg:mt-[30px]">
            {achievement.github && (
              <Link
                className="flex items-center gap-2 rounded-full bg-white py-[10px] px-[30px] text-black transition-all duration-200 ease-in hover:scale-105"
                to={achievement.github}
                target="_blank"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
                  Github
                </p>
                <BsArrowUpRight size={16} />
              </Link>
            )}
            {achievement.video && (
              <Link
                className="flex items-center gap-2 rounded-full border border-white/60 bg-transparent py-[10px] px-[30px] transition-all duration-200 ease-in hover:scale-105"
                to={achievement.video}
                target="_blank"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <p className="font-AvenirMedium text-[14px] uppercase lg:text-[16px]">
                  Project Video
                </p>
                <BsArrowUpRight size={16} />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="relative mx-auto my-24 h-fit lg:w-[1100px] xl:w-[1500px]">
      <h1
        className="absolute top-10 left-0 z-[-1] p-0 font-AvenirHeavy text-[70px] uppercase leading-none tracking-tighter text-white/20 lg:text-[160px] xl:text-[200px] xl:text-white/10"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        Achievements
      </h1>
      <div className="space-y-10 pt-[240px]">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            images={achievement.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
