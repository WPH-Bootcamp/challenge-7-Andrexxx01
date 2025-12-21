

const Content = () => {
    return (
      <>
        <div className="w-full h-[30px] text-center relative top-20 xl:w-[1440px] xl:h-[36px] xl:absolute xl:top-[747px]">
          <p className="w-full h-[30px] text-md font-bold xl:w-[1440px] xl:h-[36px] xl:text-2xl">
            Trusted by Global Innovators & Leading Brands
          </p>
        </div>
        <div className="w-full h-[128px] flex flex-row items-center relative top-19 overflow-hidden xl:top-62 before:absolute before:right-0 before:z-10 before:h-[98px] xl:before:h-[200px] xl:after:h-[200px] before:w-[45.55px] xl:before:w-[260px] xl:after:w-[260px] before:bg-[linear-gradient(to_right,hsla(220,24%,94%,0)_0%,#ffffff_100%)] after:absolute after:left-0 after:z-10 after:h-[98px] after:w-[45.55px] after:bg-[linear-gradient(to_right,#ffffff_0%,hsla(220,24%,94%,0)_100%)] xl:w-[1440px] xl:h-[200px] dark:before:bg-[linear-gradient(to_right,hsla(220,24%,94%,0)_0%,#000000_100%)] dark:after:bg-[linear-gradient(to_right,#000000_0%,hsla(220,24%,94%,0)_100%)]">
          <div className="flex flex-row gap-12 slider-track whitespace-nowrap min-w-max">
            {Array.from({ length: 9 }).map((_, i) => (
              <img
                key={i}
                src={`/Company logo${i === 0 ? "" : "-" + i}.svg`}
                className="h-[34px] grayscale xl:h-[48px]"
              />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <img
                key={`dup-${i}`}
                src={`/Company logo${i === 0 ? "" : "-" + i}.svg`}
                className="h-[34px] grayscale xl:h-[48px]"
              />
            ))}
          </div>
        </div>
      </>
    );
};

export default Content;