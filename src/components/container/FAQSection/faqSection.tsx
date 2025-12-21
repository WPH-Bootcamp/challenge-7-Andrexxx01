import { useState } from "react";
import Button from "../../ui/Button";

type FAQState = {
    q1:boolean;
    q2:boolean;
    q3:boolean;
    q4:boolean;
    q5:boolean;
};

const FAQSection = () => {
    const[open, setOpen] = useState<FAQState>({
        q1 : true,
        q2 : false,
        q3 : false,
        q4 : false,
        q5 : false,
    });

    return (
      <section
        className="w-full min-w-[393px] relative top-18 flex flex-col items-center justify-center px-4 py-10 gap-6 xl:w-[1440px] xl:top-60 xl:py-20 xl:px-30 xl:gap-12"
        id="faq"
      >
        <div className="w-full h-[82px] flex flex-col gap-4 items-start justify-between xl:w-[1200px] xl:h-[112px] xl:flex-row xl:items-end xl:justify-between">
          <h3 className="w-full h-[38px] text-[28px] leading-[38px] font-bold text-neutral-950 xl:max-w-[340px] xl:h-[112px] xl:text-display-xl xl:text-left xl:flex xl:items-center xl:leading-13 dark:text-neutral-25">
            Need Help? Start Here.
          </h3>
          <p className="w-full h-[28px] text-sm font-medium text-neutral-400 xl:max-w-[245px] xl:h-16 xl:text-lg xl:flex xl:min-w-[245px] xl:text-right">
            Everything you need to know — all in one place.
          </p>
        </div>
        <div className="w-full h-[0px] border-[1px] border-[#dfdfdf]"></div>
        <div className="w-full flex flex-col gap-6 items-start justify-between relative xl:flex-row xl:gap-[73px] xl:w-[1200px]">
          <div className="w-full min-w-[393px] flex flex-col gap-7 items-start justify-between relative xl:w-[798px]">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-start relative">
                <p className="text-neutral-950 dark:text-neutral-25 text-lg font-bold xl:text-display-xs">
                  What services do you offer?
                </p>
                <div
                  onClick={() => setOpen({ ...open, q1: !open.q1 })}
                  className="cursor-pointer relative w-6 h-6"
                >
                  <span className="absolute w-[16px] h-0 rounded-full right-0 top-[15px] border-[1.5px] border-neutral-950 dark:border-neutral-25" />
                  {!open.q1 && (
                    <span
                      className="absolute h-[16px] w-0 top-[8px] left-[14.5px] border-[1.5px] rounded-full
                               border-neutral-950 dark:border-neutral-25"
                    />
                  )}
                </div>
              </div>
              {open.q1 && (
                <p className="w-full text-neutral-400 text-sm font-medium xl:text-xl">
                  We provide custom web/app development, cloud solutions, UX/UI
                  design, and more.
                </p>
              )}
            </div>
            <div className="w-full h-[0px] border-[1px] border-[#dfdfdf]" />
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-start relative">
                <p className="text-neutral-950 dark:text-neutral-25 text-lg font-bold xl:text-display-xs">
                  How do I know if this is right for my business?
                </p>
                <div
                  onClick={() => setOpen({ ...open, q2: !open.q2 })}
                  className="cursor-pointer relative w-6 h-6"
                >
                  <span className="absolute w-[16px] h-0 rounded-full right-0 top-[15px] border-[1.5px] border-neutral-950 dark:border-neutral-25" />
                  {!open.q2 && (
                    <span
                      className="absolute h-[16px] w-0 top-[8px] left-[14.5px] border-[1.5px] rounded-full
                               border-neutral-950 dark:border-neutral-25"
                    />
                  )}
                </div>
              </div>
              {open.q2 && (
                <p className="w-full text-neutral-400 text-sm font-medium xl:text-xl">
                  Book a free consult — we’ll assess your goals and recommend
                  the right approach.
                </p>
              )}
            </div>
            <div className="w-full h-[0px] border-[1px] border-[#dfdfdf]" />
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-start relative">
                <p className="text-neutral-950 dark:text-neutral-25 text-lg font-bold xl:text-display-xs">
                  How much does a project cost?
                </p>
                <div
                  onClick={() => setOpen({ ...open, q3: !open.q3 })}
                  className="cursor-pointer relative w-6 h-6"
                >
                  <span className="absolute w-[16px] h-0 rounded-full right-0 top-[15px] border-[1.5px] border-neutral-950 dark:border-neutral-25" />
                  {!open.q3 && (
                    <span
                      className="absolute h-[16px] w-0 top-[8px] left-[14.5px] border-[1.5px] rounded-full
                               border-neutral-950 dark:border-neutral-25"
                    />
                  )}
                </div>
              </div>
              {open.q3 && (
                <p className="w-full text-neutral-400 text-sm font-medium xl:text-xl">
                  Every project is different. Let’s talk about your needs to get
                  a tailored estimate.
                </p>
              )}
            </div>
            <div className="w-full h-[0px] border-[1px] border-[#dfdfdf]" />
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-start relative">
                <p className="text-neutral-950 dark:text-neutral-25 text-lg font-bold xl:text-display-xs">
                  How long does it take?
                </p>
                <div
                  onClick={() => setOpen({ ...open, q4: !open.q4 })}
                  className="cursor-pointer relative w-6 h-6"
                >
                  <span className="absolute w-[16px] h-0 rounded-full right-0 top-[15px] border-[1.5px] border-neutral-950 dark:border-neutral-25" />
                  {!open.q4 && (
                    <span
                      className="absolute h-[16px] w-0 top-[8px] left-[14.5px] border-[1.5px] rounded-full
                               border-neutral-950 dark:border-neutral-25"
                    />
                  )}
                </div>
              </div>
              {open.q4 && (
                <p className="w-full text-neutral-400 text-sm font-medium xl:text-xl">
                  Depends on scope — but we always prioritize quality and
                  deadlines.
                </p>
              )}
            </div>
            <div className="w-full h-[0px] border-[1px] border-[#dfdfdf]" />
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-start relative">
                <p className="text-neutral-950 dark:text-neutral-25 text-lg font-bold xl:text-display-xs">
                  Can I start with a small project first?
                </p>
                <div
                  onClick={() => setOpen({ ...open, q5: !open.q5 })}
                  className="cursor-pointer relative w-6 h-6"
                >
                  <span className="absolute w-[16px] h-0 rounded-full right-0 top-[15px] border-[1.5px] border-neutral-950 dark:border-neutral-25" />
                  {!open.q5 && (
                    <span
                      className="absolute h-[16px] w-0 top-[8px] left-[14.5px] border-[1.5px] rounded-full
                               border-neutral-950 dark:border-neutral-25"
                    />
                  )}
                </div>
              </div>
              {open.q5 && (
                <p className="w-full text-neutral-400 text-sm font-medium xl:text-xl">
                  Absolutely. We often begin with MVPs or pilot projects.
                </p>
              )}
            </div>
          </div>
          <div className="w-full rounded-[16px] bg-primary-300 p-5 gap-4 flex flex-col items-start justify-center xl:min-w-[329px] xl:max-w-[329px] xl:h-[453.38px] xl:rounded-[24px] xl:p-6 xl:gap-6 xl:absolute xl:right-0">
            <div className="w-full h-[70px] gap-1 flex flex-col items-start justify-between xl:min-w-[281px] xl:max-w-[281px] xl:h-[156px]">
              <h4 className="w-full h-[38px] text-white text-display-sm font-bold xl:min-w-[281px] xl:max-w-[281px] xl:h-[88px] xl:text-display-lg">
                Let’s talk it through
              </h4>
              <p className="w-full h-[28px] text-white text-sm font-semibold xl:min-w-[281px] xl:max-w-[281px] xl:h-[64px] xl:text-lg">
                book a free consultation with our team.
              </p>
            </div>
            <img
              src="/Consultation Image.svg"
              alt="consultation-image"
              className="w-full h-[175.21px] rounded-[16px] xl:min-w-[281px] xl:max-w-[281px] xl:h-[153.38px]"
            />
            <Button
              href="#talk"
              label="Free Consultation"
              className="w-full h-[44px] bg-[#000000] text-md text-white font-bold hover:bg-neutral-600 duration-500 shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] xl:min-w-[281px] xl:max-w-[281px] xl:h-[48px] dark:bg-white dark:text-[#000000]"
            />
          </div>
        </div>
      </section>
    );
};

export default FAQSection;