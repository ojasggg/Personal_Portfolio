import gif3 from "../assets/Gifs/disappointed-face.gif";

const Error = () => {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center gap-4">
      <h1 className="p-0 font-AvenirMedium leading-none lg:text-[200px] xl:text-[300px]">
        404
      </h1>
      <p className="font-AvenirMedium text-white/60 lg:text-[24px] xl:text-[36px]">
        sorry, couldn’t find the page that you were <br /> looking for{" "}
        <span className="inline-block">
          <img src={gif3} alt="Tense Emoji Gif" width={30} />
        </span>
      </p>
    </main>
  );
};

export default Error;
