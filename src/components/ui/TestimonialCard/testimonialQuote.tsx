

const TestimonialQuote:React.FC<{quote:string}> = ({quote}) => {
    return (
      <div className="w-[329px] h-[148px] gap-3 flex flex-col items-center justify-between absolute top-4 xl:w-[546px] xl:h-[132px] xl:top-7">
        <img
          src="/tdesign_quote-filled.svg"
          alt="quote-img"
          className="w-16 h-16 absolute top-[-40px] left-0 xl:w-20 xl:h-20 xl:top-[-57px] xl:left-[20px]"
        />
        <img
          src="/Rating.svg"
          alt="rating-img"
          className="w-[136px] h-[24px]"
        />
        <p className="h-[112px] text-neutral-950 font-semibold text-sm text-center xl:h-[96px] xl:text-lg dark:text-neutral-25">
          {quote}
        </p>
      </div>
    );
}

export default TestimonialQuote;