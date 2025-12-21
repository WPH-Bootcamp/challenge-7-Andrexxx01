

const Footer = () => {
    return (
      <section className="w-full min-w-[393px] h-[544px] relative top-24 flex flex-col items-center justify-center px-4 py-6 gap-2 xl:w-[1440px] xl:h-[408px] xl:top-60 xl:py-5 xl:px-35 xl:gap-2">
        <div className="w-full h-[496px] rounded-[24px] border-[1px] p-5 gap-6 flex flex-col items-start justify-center bg-neutral-50 border-[#dfdfdf] xl:w-[1160px] xl:h-[328px] xl:p-10 xl:gap-15 xl:items-center dark:bg-neutral-950 dark:border-neutral-800">
          <div className="w-full h-[132px] gap-6 flex flex-col items-start justify-between xl:w-[1080px] xl:h-[88px] xl:flex-row-reverse">
            <div className="w-full h-[32px] gap-[8.48px] flex items-center justify-start xl:w-[158.63px] xl:h-[36px] xl:gap-[9.6px]">
              <img
                src="/logo-symbol.svg"
                alt="logo-symbol"
                className="w-[26.13px] h-[28.66px] xl:w-[29.59px] xl:h-[32.46px]"
              />
              <h3 className="w-full h-[32px] text-black text-[21.19px] leading-[31.79px] font-semibold xl:w-[120px] xl:h-[36px] xl:text-[24px] xl:leading-[36px] dark:text-neutral-25">
                Your Logo
              </h3>
            </div>
            <h2 className="w-full h-[76px] text-neutral-950 text-display-sm font-bold xl:w-[281px] xl:h-[88px] xl:text-display-lg dark:text-neutral-25">
              LET'S DISCUSS YOUR IDEAS
            </h2>
          </div>
          <div className="w-full h-[0px] border-[1px] border-[#dfdfdf] xl:w-[1080px] dark:border-neutral-800"></div>
          <div className="w-full h-[276px] flex flex-col gap-6 items-start justify-between xl:w-[1080px] xl:h-[40px] xl:flex-row xl:items-center">
            <div className="w-full h-[212px] flex flex-col gap-2 items-start justify-between xl:w-[447px] xl:h-[36px] xl:flex-row xl:items-center xl:justify-between">
              <a
                href="#about"
                className="text-neutral-950 text-sm font-medium xl:text-md dark:text-neutral-25 hover:text-purple-500 duration-500 cursor-pointer"
              >
                About
              </a>
              <a
                href="#service"
                className="text-neutral-950 text-sm font-medium xl:text-md dark:text-neutral-25 hover:text-purple-500 duration-500 cursor-pointer"
              >
                Service
              </a>
              <a href="#portofolio" className="text-neutral-950 text-sm font-medium xl:text-md dark:text-neutral-25 hover:text-purple-500 duration-500 cursor-pointer">
                Projects
              </a>
              <a href="#testimonials" className="text-neutral-950 text-sm font-medium xl:text-md dark:text-neutral-25 hover:text-purple-500 duration-500 cursor-pointer">
                Testimonials
              </a>
              <a href="#faq" className="text-neutral-950 text-sm font-medium xl:text-md dark:text-neutral-25 hover:text-purple-500 duration-500 cursor-pointer">
                FAQ
              </a>
            </div>
            <div className="w-[208px] h-[40px] flex gap-s-xl items-center justify-between">
              <img
                src="/Social Media.svg"
                alt="facebook-logo"
                className="w-10 h-10 border-[1px] border-[#dfdfdf] rounded-full dark:invert dark:border-transparent"
              />
              <img
                src="/Social Media-1.svg"
                alt="instagram-logo"
                className="w-10 h-10 border-[1px] border-[#dfdfdf] rounded-full dark:invert dark:border-transparent"
              />
              <img
                src="/Social Media-2.svg"
                alt="linkedin-logo"
                className="w-10 h-10 border-[1px] border-[#dfdfdf] rounded-full dark:invert dark:border-transparent"
              />
              <img
                src="/Social Media-3.svg"
                alt="tiktok-logo"
                className="w-10 h-10 border-[1px] border-[#dfdfdf] rounded-full dark:invert dark:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;