import Button from "../../ui/Button";

const Hero = () => {
  return (
    <>
      <section className="w-full h-[240px] px-4 relative mt-[125px] flex flex-col justify-between items-start gap-2 xl:w-[653px] xl:h-[300px] xl:mt-[230px] xl:ml-[140px]">
        <div className="w-full h-[156px] flex flex-col justify-between items-start gap-2 xl:w-[653px] xl:h-[212px]">
          <h2 className="min-w-[361px] max-w-[calc(100%_-_15px)] h-[88px] text-4xl font-bold tracking-tight xl:w-[653px] xl:h-[136px] xl:text-6xl">
            Your Tech Partner for
            <span className="text-[#ff6c37]"> Smarter Growth</span>
          </h2>
          <p className="min-w-[361px] max-w-[calc(100%_-_15px)] h-[60px] text-md font-semibold xl:w-[653px] xl:h-[68px] xl:text-xl">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </div>
        <Button
          href="#talk"
          label="Let's Talk"
          className="w-full xl:min-w-[200px] xl:max-w-[200px] xl:h-[48px] xl:text-base xl:font-bold max-w-[calc(100%_-_15px)] h-[44px] text-sm font-bold bg-primary-200 hover:bg-orange-700 duration-500 text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)]"
        />
      </section>
      <img
        src="/purple. Surround the phone with glowing tech icons like gear, code, and cloud. The background should be a Light modern grid with soft shadows and ambient lighting, giving a clean, futuristic, and professional SaaS or IT agency feel._ gearnya tolong.svg"
        alt="image-1-light"
        className="w-full min-w-[391px] h-[391px] relative top-[43px] left-[1px] right-[1px] object-contain opacity-90 brightness-108 dark:hidden xl:w-[747px] xl:h-[747px] xl:absolute xl:top-0 xl:left-[696px] xl:z-[-10] xl:dark:z-[-10]"
      />
      <img
        src="/Image Hero.svg"
        alt="image-1-dark"
        className="hidden dark:block dark:w-full dark:min-w-[391px] dark:h-[391px] dark:relative dark:top-[43px] dark:left-[1px] dark:right-[1px] dark:object-contain dark:xl:w-[747px] dark:xl:h-[747px] dark:xl:absolute dark:xl:top-0 dark:xl:left-[696px] dark:xl:z-[-10]"
      />
    </>
  );
};

export default Hero;
