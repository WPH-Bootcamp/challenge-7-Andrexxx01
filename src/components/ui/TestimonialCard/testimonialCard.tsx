import TestimonialQuote from "./testimonialQuote";
import TestimonialName from "./testimonialName";

type Props = {
    quote : string;
    name: string;
    title: string;
    img: string;
    highlight?: boolean;
};

const TestimonialCard:React.FC<Props> = ({
    quote,
    name,
    title,
    img,
    highlight = false,
}) => {
    return(
        <div className={`w-[361px] h-[284px] border-[1px] rounded-[16px] pt-4 px-4 pb-12 gap-4 flex flex-col items-center justify-center bg-neutral-50 border-[#dedcdc] xl:w-[594px] xl:h-[292px] xl:pt-6 xl:px-6 xl:gap-6 relative dark:bg-neutral-950 dark:border-neutral-900 ${highlight ? "xl:before:h-[200px] xl:before:w-[300px] xl:before:absolute xl:before:bg-gradient-to-r xl:before:from-[#ff6c37] xl:before:to-[#dedcdc] xl:before:top-[-1.5px] xl:before:left-[-1.5px] xl:before:z-[-10] xl:before:rounded-[16px]" : ""}`}>
            <TestimonialQuote quote={quote} />
            <TestimonialName name={name} title={title} img={img} />
        </div>
    );
};

export default TestimonialCard;