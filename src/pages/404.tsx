import gif3 from "../assets/Gifs/disappointed-face.gif";
import { Contact, Navbar, Transition } from "../components";

const Error = () => {
  return (
    <>
      <Transition />
      <Navbar />
      <main className="flex h-[90vh] flex-col items-center justify-center gap-4">
        <h1 className="p-0 font-AvenirMedium text-[160px] leading-none lg:text-[200px] xl:text-[260px]">
          404
        </h1>
        <p className="font-AvenirMedium text-white/60 lg:text-[24px] xl:text-[36px]">
          sorry, couldn’t find the page that you were <br /> looking for{" "}
          <span className="inline-block">
            <img src={gif3} alt="Tense Emoji Gif" width={30} />
          </span>
        </p>
      </main>
      <Contact />
    </>
  );
};

export default Error;
