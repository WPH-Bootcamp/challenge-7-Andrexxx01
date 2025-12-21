

type Props = {
    name: string;
    title: string;
    img: string;
};

const TestimonialName:React.FC<Props> = ({name, title, img}) => {
    return(
      <>
        <div className="w-[329px] h-[56px] flex flex-col items-center justify-between relative top-18 xl:w-[546px] xl:h-[64px] xl:top-16">
          <h4 className="h-[28px] text-neutral-950 text-sm mt-4 font-semibold text-center xl:h-[32px] xl:text-lg dark:text-neutral-25">{name}</h4>
          <p className="h-[28px] text-primary-200 text-sm font-semibold text-center xl:h-[32px] xl:text-lg">{title}</p>
        </div>
        <img src={img} alt={name} className="w-[60px] h-[60px] absolute bottom-[-30px] xl:w-[75px] xl:h-[75px] xl:bottom-[-45px]"/>
      </>
    )
}

export default TestimonialName;