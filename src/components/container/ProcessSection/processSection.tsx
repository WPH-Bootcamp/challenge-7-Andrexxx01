import { useState } from "react";
   
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
  });

  const handleStepClick = (key: keyof typeof activeStep) => {
    setActiveStep({...activeStep, [key]: !activeStep[key] });
  };
  

  return (
    <section className="w-full min-w-[393px] h-[853px] px-4 py-10 gap-6 flex flex-col items-center justify-center relative top-18 xl:w-[1440px] xl:h-[1099px] xl:top-60 xl:px-35 xl:py-20 xl:gap-16">
      <div className="w-full h-[105px] gap-[11px] flex flex-col items-center justify-between xl:w-[1160px] xl:h-[99px]">
        <h3 className="w-full h-[38px] text-display-sm font-bold text-center text-neutral-950 flex items-center justify-center xl:text-[40px] xl:leading-[48px] dark:text-neutral-25">
          Our Process
        </h3>
        <p className="w-full h-[56px] text-sm font-medium text-center text-neutral-400 flex items-center justify-center xl:text-lg">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>
      <div className="w-full min-w-[361px] h-[644px] flex flex-col gap-4 items-end justify-between xl:w-[1160px] xl:h-[776px] xl:gap-4 xl:relative">
        <div className="w-full left-0 max-w-[calc(100%_-_52px)] h-[94px] rounded-[16px] border-[1px] p-4 gap-1 flex flex-col items-start justify-center bg-neutral-50 border-[#dedcdc] relative before:absolute before:bg-neutral-300 before:left-[-35px] before:w-[1px] before:h-[94px] before:top-[45px] xl:w-[532px] xl:h-[116px] xl:absolute xl:left-0 xl:before:left-[580px] xl:before:top-[72px] dark:border-neutral-900 dark:bg-neutral-950 dark:before:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center absolute left-[-55px] text-xs font-bold text-white xl:w-12 xl:h-12 xl:text-base xl:left-[556px]">
            1
          </div>
          <img
            src={activeStep.step1 ? "/chevron-up.svg" : "/chevron-down.svg"}
            onClick={() => handleStepClick("step1")}
            alt="minimize-logo"
            className="w-6 h-6 flex items-center justify-center absolute top-4 right-4 dark:invert cursor-pointer"
          />
          <h4 className="h-[30px] text-base font-bold text-neutral-950 xl:text-xl xl:h-[34px] flex items-center justify-start dark:text-neutral-25">
            Discovery & Consultation
          </h4>
          {activeStep.step1 && (
            <p className="h-[28px] text-sm font-medium text-neutral-400 xl:text-base xl:h-[30px] flex items-center justify-start">
              Understand Your Needs & Goals
            </p>
          )}
        </div>
        <div className="w-full left-0 max-w-[calc(100%_-_52px)] h-[94px] rounded-[16px] border-[1px] p-4 gap-1 flex flex-col items-start justify-center bg-neutral-50 border-[#dedcdc] relative before:absolute before:bg-neutral-300 before:left-[-35px] before:w-[1px] before:h-[94px] before:top-[45px] xl:w-[532px] xl:h-[116px] xl:gap-1 xl:absolute xl:left-157 xl:top-[132px] xl:before:left-[-48px] xl:before:top-[72px] dark:border-neutral-900 dark:bg-neutral-950 dark:before:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center absolute left-[-55px] text-xs font-bold text-white xl:w-12 xl:h-12 xl:text-base xl:left-[-72px]">
            2
          </div>
          <img
            src={activeStep.step2 ? "/chevron-up.svg" : "/chevron-down.svg"}
            onClick={() => handleStepClick("step2")}
            alt="minimize-logo"
            className="w-6 h-6 flex items-center justify-center absolute top-4 right-4 dark:invert cursor-pointer"
          />
          <h4 className="h-[30px] text-base font-bold text-neutral-950 xl:text-xl xl:h-[34px] flex items-center justify-start dark:text-neutral-25">
            Planning & Strategy
          </h4>
          {activeStep.step2 && (
            <p className="h-[28px] text-sm font-medium text-neutral-400 xl:text-base xl:h-[30px] flex items-center justify-start">
              Build a Clear, Scalable Roadmap
            </p>
          )}
        </div>
        <div className="w-full left-0 max-w-[calc(100%_-_52px)] h-[94px] rounded-[16px] border-[1px] p-4 gap-1 flex flex-col items-start justify-center bg-neutral-50 border-[#dedcdc] relative before:absolute before:bg-neutral-300 before:left-[-35px] before:w-[1px] before:h-[94px] before:top-[45px] xl:w-[532px] xl:h-[116px] xl:gap-1 xl:absolute xl:left-0 xl:top-[264px] xl:before:left-[580px] xl:before:top-[72px] dark:border-neutral-900 dark:bg-neutral-950 dark:before:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center absolute left-[-55px] text-xs font-bold text-white xl:w-12 xl:h-12 xl:text-base xl:left-[556px]">
            3
          </div>
          <img
            src={activeStep.step3 ? "/chevron-up.svg" : "/chevron-down.svg"}
            onClick={() => handleStepClick("step3")}
            alt="minimize-logo"
            className="w-6 h-6 flex items-center justify-center absolute top-4 right-4 dark:invert cursor-pointer"
          />
          <h4 className="h-[30px] text-base font-bold text-neutral-950 xl:text-xl xl:h-[34px] flex items-center justify-start dark:text-neutral-25">
            Design & Prototyping
          </h4>
          {activeStep.step3 && (
            <p className="h-[28px] text-sm font-medium text-neutral-400 xl:text-base xl:h-[30px] flex items-center justify-start">
              Craft UX That Converts
            </p>
          )}
        </div>
        <div className="w-full left-0 max-w-[calc(100%_-_52px)] h-[94px] rounded-[16px] border-[1px] p-4 gap-1 flex flex-col items-start justify-center bg-neutral-50 border-[#dedcdc] relative before:absolute before:bg-neutral-300 before:left-[-35px] before:w-[1px] before:h-[94px] before:top-[45px] xl:w-[532px] xl:h-[116px] xl:gap-1 xl:absolute xl:left-157 xl:top-[396px] xl:before:left-[-48px] xl:before:top-[72px] dark:border-neutral-900 dark:bg-neutral-950 dark:before:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center absolute left-[-55px] text-xs font-bold text-white xl:w-12 xl:h-12 xl:text-base xl:left-[-72px]">
            4
          </div>
          <img
            src={activeStep.step4 ? "/chevron-up.svg" : "/chevron-down.svg"}
            onClick={() => handleStepClick("step4")}
            alt="minimize-logo"
            className="w-6 h-6 flex items-center justify-center absolute top-4 right-4 dark:invert cursor-pointer"
          />
          <h4 className="h-[30px] text-base font-bold text-neutral-950 xl:text-xl xl:h-[34px] flex items-center justify-start dark:text-neutral-25">
            Development & Implementation
          </h4>
          {activeStep.step4 && (
            <p className="h-[28px] text-sm font-medium text-neutral-400 xl:text-base xl:h-[30px] flex items-center justify-start">
              Deliver With Speed & Precision
            </p>
          )}
        </div>
        <div className="w-full left-0 max-w-[calc(100%_-_52px)] h-[94px] rounded-[16px] border-[1px] p-4 gap-1 flex flex-col items-start justify-center bg-neutral-50 border-[#dedcdc] relative before:absolute before:bg-neutral-300 before:left-[-35px] before:w-[1px] before:h-[94px] before:top-[45px] xl:w-[532px] xl:h-[116px] xl:gap-1 xl:absolute xl:left-0 xl:top-[528px] xl:before:left-[580px] xl:before:top-[72px] dark:border-neutral-900 dark:bg-neutral-950 dark:before:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center absolute left-[-55px] text-xs font-bold text-white xl:w-12 xl:h-12 xl:text-base xl:left-[556px]">
            5
          </div>
          <img
            src={activeStep.step5 ? "/chevron-up.svg" : "/chevron-down.svg"}
            onClick={() => handleStepClick("step5")}
            alt="minimize-logo"
            className="w-6 h-6 flex items-center justify-center absolute top-4 right-4 dark:invert cursor-pointer"
          />
          <h4 className="h-[30px] text-base font-bold text-neutral-950 xl:text-xl xl:h-[34px] flex items-center justify-start dark:text-neutral-25">
            Testing & Optimization
          </h4>
          {activeStep.step5 && (
            <p className="h-[28px] text-sm font-medium text-neutral-400 xl:text-base xl:h-[30px] flex items-center justify-start">
              Ensure Quality at Every Step
            </p>
          )}
        </div>
        <div className="w-full left-0 max-w-[calc(100%_-_52px)] h-[94px] rounded-[16px] border-[1px] p-4 gap-1 flex flex-col items-start justify-center bg-neutral-50 border-[#dedcdc] relative xl:w-[532px] xl:h-[116px] xl:gap-1 xl:absolute xl:left-157 xl:top-[660px] dark:border-neutral-900 dark:bg-neutral-950">
          <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center absolute left-[-55px] text-xs font-bold text-white xl:w-12 xl:h-12 xl:text-base xl:left-[-72px]">
            6
          </div>
          <img
            src={activeStep.step6 ? "/chevron-up.svg" : "/chevron-down.svg"}
            onClick={() => handleStepClick("step6")}
            alt="minimize-logo"
            className="w-6 h-6 flex items-center justify-center absolute top-4 right-4 dark:invert cursor-pointer"
          />
          <h4 className="h-[30px] text-base font-bold text-neutral-950 xl:text-xl xl:h-[34px] flex items-center justify-start dark:text-neutral-25">
            Launch & Growth
          </h4>
          {activeStep.step6 && (
            <p className="h-[28px] text-sm font-medium text-neutral-400 xl:text-base xl:h-[30px] flex items-center justify-start">
              Scale, Measure & Improve Continuously
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;