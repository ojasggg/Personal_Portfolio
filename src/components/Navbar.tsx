import { Link } from "react-router-dom";

type navItems = {
  itemName: string;
  active: boolean;
  link: string;
  button: boolean;
};

const navItems: navItems[] = [
  { itemName: "Home", active: true, link: "/home", button: false },
  { itemName: "About", active: false, link: "/about", button: false },
  { itemName: "Projects", active: false, link: "/projects", button: false },
  { itemName: "Resume", active: false, link: "/resume", button: true },
];

const Navbar = () => {
  return (
    <nav className="m-auto mt-[30px] flex items-center justify-between lg:w-[1200px] xl:w-[1600px]">
      {/* Ojash Gurung Logo */}
      <div>
        {/* TODO: Logo Animation 
        1) Rotate Individual letters
        2) Add Name along side the logo 
        */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.0078 14.5039C29.0078 22.5142 22.5142 29.0078 14.5039 29.0078C6.49361 29.0078 0 22.5142 0 14.5039C0 6.49361 6.49361 0 14.5039 0C22.5142 0 29.0078 6.49361 29.0078 14.5039ZM5.02693 14.5039C5.02693 19.7379 9.26991 23.9809 14.5039 23.9809C19.7379 23.9809 23.9809 19.7379 23.9809 14.5039C23.9809 9.26991 19.7379 5.02693 14.5039 5.02693C9.26991 5.02693 5.02693 9.26991 5.02693 14.5039Z"
            fill="white"
          />
          <path
            d="M37.672 24.983C39.0601 24.983 40.2076 26.1166 39.9682 27.4839C39.5187 30.0518 38.382 32.4676 36.6577 34.4639C34.3821 37.0984 31.2348 38.8265 27.7905 39.3327C24.3463 39.8389 20.8348 39.0894 17.8974 37.221C14.96 35.3527 12.7926 32.4901 11.791 29.156C10.7893 25.822 11.0203 22.2389 12.4417 19.061C13.8631 15.8832 16.3801 13.3226 19.533 11.8468C22.686 10.371 26.2646 10.0785 29.6154 11.0227C32.1544 11.7382 34.4342 13.1275 36.2245 15.0225C37.1778 16.0316 36.8451 17.6099 35.6868 18.3749C34.5284 19.1399 32.9858 18.7871 31.9439 17.8699C30.8869 16.9393 29.6277 16.2489 28.2519 15.8612C26.0625 15.2443 23.7242 15.4354 21.6641 16.3997C19.6039 17.364 17.9593 19.0371 17.0305 21.1135C16.1018 23.19 15.9509 25.5312 16.6053 27.7097C17.2598 29.8882 18.676 31.7586 20.5953 32.9794C22.5147 34.2002 24.8091 34.69 27.0596 34.3592C29.3101 34.0284 31.3665 32.8993 32.8535 31.1779C33.7877 30.0962 34.458 28.8261 34.8272 27.4671C35.1911 26.1275 36.2838 24.983 37.672 24.983Z"
            fill="white"
          />
          <path
            d="M26.4068 27.5249C26.4068 26.121 27.5448 24.983 28.9487 24.983H36.7733C38.1771 24.983 39.3152 26.121 39.3152 27.5249C39.3152 28.9288 38.1772 30.0668 36.7733 30.0668H28.9487C27.5448 30.0668 26.4068 28.9288 26.4068 27.5249Z"
            fill="white"
          />
        </svg>
      </div>
      {/* Nav Items */}
      <ul className="flex items-center justify-center gap-[40px] ">
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className={`${
              navItem.active || navItem.button ? "text-white" : "text-white/60"
            } ${
              navItem.button
                ? "cursor-pointer rounded-lg border border-white p-2 px-4"
                : ""
            } font-AvenirRoman text-[14px] uppercase`}
          >
            <Link to={navItem.link}>{navItem.itemName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
