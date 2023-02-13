import { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

type navItems = {
  itemName: string;
  active: boolean;
  link: string;
};

const navItems: navItems[] = [
  { itemName: "Home", active: true, link: "/home" },
  { itemName: "About", active: false, link: "/about" },
  { itemName: "Projects", active: false, link: "/projects" },
];

const Navbar = () => {
  const location = useLocation();
  const [urlPath, setUrlPath] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setUrlPath(location.pathname);
  }, [location]);

  return (
    <section className="w-screen overflow-hidden" data-scroll-section>
      <nav className="mx-auto flex w-[90%] items-center justify-between py-6 lg:w-[1200px] lg:pb-4 xl:w-[1600px]">
        {/* Ojash Gurung Logo */}
        <Link className="relative" to={"/home"}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            className="rotateVertical_o"
          >
            <path
              d="M29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5ZM5.03943 14.5C5.03943 19.7249 9.27507 23.9606 14.5 23.9606C19.7249 23.9606 23.9606 19.7249 23.9606 14.5C23.9606 9.27507 19.7249 5.03943 14.5 5.03943C9.27507 5.03943 5.03943 9.27507 5.03943 14.5Z"
              fill="white"
            />
          </svg>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            className="rotateVertical_g absolute top-[14px] left-[10px] z-[10]"
          >
            <path
              d="M26.4693 13.987C27.8487 13.9279 29.0569 15.0046 28.8785 16.3737C28.54 18.9707 27.5019 21.4443 25.8535 23.5193C23.6834 26.2511 20.601 28.1088 17.1719 28.7517C13.7427 29.3946 10.1968 28.7795 7.18446 27.0193C4.17216 25.2591 1.89552 22.4718 0.772169 19.1687C-0.351177 15.8656 -0.245897 12.2682 1.0687 9.03648C2.38329 5.80474 4.81904 3.15534 7.92913 1.5743C11.0392 -0.00673288 14.6151 -0.413386 18.0008 0.428943C20.5724 1.06874 22.9033 2.39653 24.7549 4.24873C25.731 5.2252 25.4298 6.81525 24.3003 7.60939V7.60939C23.1709 8.40352 21.6108 8.10892 20.5492 7.22609C19.4618 6.32182 18.1771 5.66586 16.7841 5.31929C14.5751 4.76971 12.242 5.03504 10.2128 6.06659C8.18363 7.09814 6.59441 8.82675 5.7367 10.9353C4.87899 13.0439 4.8103 15.391 5.54323 17.5461C6.27616 19.7012 7.76157 21.5198 9.72696 22.6683C11.6923 23.8167 14.0059 24.218 16.2433 23.7986C18.4806 23.3791 20.4917 22.167 21.9077 20.3846C22.8005 19.2607 23.419 17.9575 23.7296 16.5777C24.0329 15.2307 25.0899 14.0461 26.4693 13.987V13.987Z"
              fill="white"
            />
            <path
              d="M16 16.5C16 15.1193 17.1193 14 18.5 14H26C27.1046 14 28 14.8954 28 16V16.5C28 17.8807 26.8807 19 25.5 19H18.5C17.1193 19 16 17.8807 16 16.5V16.5Z"
              fill="white"
            />
          </svg>
        </Link>
        {/* Nav Items for Larger Screen*/}
        <ul className="flex items-center justify-center gap-[40px] max-lg:hidden">
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={`${
                urlPath === navItem.link ? "text-white" : "text-white/60"
              } font-AvenirRoman text-[14px] uppercase`}
            >
              <Link to={navItem.link}>{navItem.itemName}</Link>
            </li>
          ))}
          <Link
            className="cursor-pointer rounded-lg border border-white p-2 px-4 font-AvenirRoman text-[14px] uppercase"
            to="/files/Resume.pdf"
            target="_blank"
            download
          >
            Resume
          </Link>
        </ul>
        <div
          onClick={() => setToggleMenu((prev) => !prev)}
          className="lg:hidden"
        >
          {toggleMenu ? (
            <RxCross2 size={30} />
          ) : (
            <HiOutlineMenuAlt1 size={30} />
          )}
        </div>
      </nav>
      <div
        className={`absolute z-[999] ${
          toggleMenu ? "right-0" : "-right-full"
        } h-screen w-[100vw] bg-black transition-all delay-100 duration-300 ease-in-out md:hidden`}
      >
        <div className="mt-10">
          <ul className="flex flex-col items-center justify-center gap-2">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={`${
                  urlPath === navItem.link ? " text-white" : "text-white/60"
                } p-4 text-center font-AvenirRoman text-[20px] uppercase`}
              >
                <Link to={navItem.link} onClick={() => setToggleMenu(false)}>
                  {navItem.itemName}
                </Link>
              </li>
            ))}
            <li className="mt-2 cursor-pointer rounded-lg border border-white p-4 px-6 text-center font-AvenirRoman text-[20px] uppercase">
              <Link
                to="/files/Resume.pdf"
                download
                target={"_blank"}
                onClick={() => setToggleMenu(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
