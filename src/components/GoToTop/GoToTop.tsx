import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-1/2 z-[99] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white/10 text-white/60 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white/20 hover:text-white lg:h-12 lg:w-12"
          aria-label="Go to top"
        >
          <BsArrowUpCircle size={24} />
        </button>
      )}
    </>
  );
};

export default GoToTop;
