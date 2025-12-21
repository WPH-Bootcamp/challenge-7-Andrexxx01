

const Portfolios = () => {
    return (
      <section
        id="portofolio"
        className="w-full min-w-[393px] h-[1568px] relative top-18 flex flex-col items-center justify-center px-4 py-10 gap-6 xl:w-[1440px] xl:h-[772px] xl:top-60 xl:py-20 xl:px-35 xl:gap-16"
      >
        <div className ="w-full h-[143px] gap-[11px] flex flex-col items-center justify-between xl:w-[1160px] xl:h-[99px]">
          <h3 className ="w-full h-[76px] text-neutral-950 text-[28px] leading-[38px] font-bold text-center xl:w-[1160px] xl:h-[56px] xl:text-[40px] xl:leading-[48px] dark:text-neutral-25">
            From Vision to Launch! Projects We’re Proud Of
          </h3>
          <p className ="w-full h-[56px] text-neutral-400 text-sm font-medium text-center xl:w-[1160px] xl:h-[32px] xl:text-lg">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>
        <div className ="w-full h-[1321px] gap-5 flex flex-col items-start justify-between xl:w-[1159px] xl:h-[449px] xl:flex-row">
          <div className ="w-full h-[427px] gap-[8px] flex flex-col items-start justify-between xl:w-[373px] xl:h-[449px] xl:gap-3">
            <img
              src="/Frame 1618873821.svg"
              alt="portofolio-1"
              className ="w-full h-[361px] rounded-[16px] flex items-center justify-center xl:w-[373px] xl:h-[373px]"
            />
            <div className ="w-full h-[58px] flex flex-col items-start justify-between xl:w-[373px] xl:h-[64px]">
              <p className ="w-full h-[28px] text-primary-200 text-sm font-medium flex items-center xl:w-[373px] xl:h-[30px] xl:text-base">
                Landing Page
              </p>
              <h4 className ="w-full h-[30px] text-neutral-950 text-base font-bold flex items-center xl:w-[373px] xl:h-[34px] xl:text-xl dark:text-neutral-25">
                Portofolio 1
              </h4>
            </div>
          </div>
          <div className ="w-full h-[427px] gap-[8px] flex flex-col items-start justify-between xl:w-[373px] xl:h-[449px] xl:gap-3">
            <img
              src="/image 214.svg"
              alt="portofolio-2"
              className ="w-full h-[361px] rounded-[16px] flex items-center justify-center xl:w-[373px] xl:h-[373px]"
            />
            <div className ="w-full h-[58px] flex flex-col items-start justify-between xl:w-[373px] xl:h-[64px]">
              <p className ="w-full h-[28px] text-primary-200 text-sm font-medium flex items-center xl:w-[373px] xl:h-[30px] xl:text-base">
                Landing Page
              </p>
              <h4 className ="w-full h-[30px] text-neutral-950 text-base font-bold flex items-center xl:w-[373px] xl:h-[34px] xl:text-xl dark:text-neutral-25">
                Portofolio 2
              </h4>
            </div>
          </div>
          <div className ="w-full h-[427px] gap-[8px] flex flex-col items-start justify-between xl:w-[373px] xl:h-[449px] xl:gap-3">
            <img
              src="/Frame 1618873821-1.svg"
              alt="portofolio-3"
              className ="w-full h-[361px] rounded-[16px] flex items-center justify-center xl:w-[373px] xl:h-[373px]"
            />
            <div className ="w-full h-[58px] flex flex-col items-start justify-between xl:w-[373px] xl:h-[64px]">
              <p className ="w-full h-[28px] text-primary-200 text-sm font-medium flex items-center xl:w-[373px] xl:h-[30px] xl:text-base">
                Landing Page
              </p>
              <h4 className ="w-full h-[30px] text-neutral-950 text-base font-bold flex items-center xl:w-[373px] xl:h-[34px] xl:text-xl dark:text-neutral-25">
                Portofolio 3
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolios;