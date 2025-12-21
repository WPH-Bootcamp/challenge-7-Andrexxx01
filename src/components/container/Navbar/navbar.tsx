import { useState } from "react";
import HamburgerButton from "../../ui/HamburgerButton";
import Button from "../../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 h-[64px] flex flex-row items-center justify-between py-s-3xl px-s-xl xl:w-[1440px] xl:h-[84px] xl:px-[140px] fixed backdrop-blur-2xl z-[100] dark:backdrop-blur-md">
      <div className="w-[141px] h-[32px] flex flex-row gap-[8.53px] items-center justify-start p-s-none xl:w-[158.63px] xl:h-[36px] xl:gap-[9.6px]">
        <img
          src="/logo-symbol.svg"
          alt="company-logo"
          className="w-[26.3px] h-[28.85px] flex items-center justify-center xl:w-[29.59px] xl:h-[32.46px]"
        />
        <h1 className="w-[97px] h-[32px] flex items-center justify-center text-[20px] leading-[32px] font-semibold xl:w-[109px] xl:h-[36px] xl:text-[22px] xl:leading-[36px]">
          Your Logo
        </h1>
      </div>
      <ul className="xl:w-[499px] xl:h-[36px] xl:gap-[12px] xl:flex xl:flex-row xl:items-center xl:justify-between hidden">
        <li>
          <a
            href="#about"
            className="text-md font-semibold hover:text-purple-500 duration-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#service"
            className="text-md font-semibold hover:text-purple-500 duration-500"
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#portofolio"
            className="text-md font-semibold hover:text-purple-500 duration-500"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="text-md font-semibold hover:text-purple-500 duration-500"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-md font-semibold hover:text-purple-500 duration-500"
          >
            FAQ
          </a>
        </li>
      </ul>
      <Button
        href="#talk"
        label="Let's Talk"
        className="hidden xl:flex xl:w-[197px] xl:h-[44px] xl:bg-primary-200 xl:text-sm xl:font-bold xl:text-white xl:hover:bg-orange-700 xl:duration-500 xl:shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)]"
      />

      {/* panggil komponen UI */}
      <HamburgerButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <nav className="xl:hidden fixed top-0 left-0 w-full h-screen z-[999] bg-white dark:bg-black">
          <div className="w-full h-[64px] flex flex-row items-center justify-between py-s-3xl px-s-xl">
            <div className="w-[141px] h-[32px] flex flex-row gap-[8.53px] items-center justify-start p-s-none">
              <img
                src="/logo-symbol.svg"
                alt="company-logo"
                className="w-[26.3px] h-[28.85px] flex items-center justify-center"
              />
              <h1 className="w-[97px] h-[32px] flex items-center justify-center text-[20px] leading-[32px] font-semibold">
                Your Logo
              </h1>
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className="w-[24px] h-[24px] relative bg-transparent hover:scale-125 cursor-pointer transition-all duration-300 ease-in-out"
            >
              <span className="absolute w-[20px] h-[2px] left-[2px] bg-black top-[10.5px] rotate-[45deg] rounded-full dark:bg-white"></span>
              <span className="absolute w-[20px] h-[2px] left-[2px] bg-black top-[10.5px] rotate-[135deg] rounded-full dark:bg-white"></span>
            </div>
          </div>
          <div className="w-full h-[284px] left-4 flex flex-col items-start justify-between gap-3 relative">
            <a
              href="#about"
              id="menu-link1"
              onClick={() => setIsOpen(false)}
              className="flex flex-col justify-center h-[36px] items-center text-sm font-semibold hover:text-purple-500 duration-500"
            >
              About
            </a>
            <a
              href="#service"
              id="menu-link2"
              onClick={() => setIsOpen(false)}
              className="flex flex-col justify-center items-center h-[36px] text-sm font-semibold hover:text-purple-500 duration-500"
            >
              Service
            </a>
            <a
              href="#portofolio"
              id="menu-link3"
              onClick={() => setIsOpen(false)}
              className="flex flex-col justify-center items-center h-[36px] text-sm font-semibold hover:text-purple-500 duration-500"
            >
              Porfolio
            </a>
            <a
              href="#testimonials"
              id="menu-link4"
              onClick={() => setIsOpen(false)}
              className="flex flex-col justify-center items-center h-[36px] text-sm font-semibold hover:text-purple-500 duration-500"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              id="menu-link5"
              onClick={() => setIsOpen(false)}
              className="flex flex-col justify-center items-center h-[36px] text-sm font-semibold hover:text-purple-500 duration-500"
            >
              FAQ
            </a>
            <Button
              onClick={() => setIsOpen(false)}
              href="#talk"
              id="cta-btn"
              label="Let's Talk"
              className="w-full max-w-[calc(100%_-_30px)] h-[44px] text-sm font-bold bg-primary-200 hover:bg-orange-700 duration-500 text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)]"
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
