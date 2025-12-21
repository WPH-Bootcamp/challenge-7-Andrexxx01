import { useState } from "react";
import { TestimonialCard } from "../../ui/TestimonialCard";

type Testimonials = {
    quote : string;
    name : string;
    title : string;
    img : string;
};

const Slides: Testimonials[] = [
  {
    quote:
      "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
    name: "Sarah Tan",
    title: "Product Manager at Finovate",
    img: "/Ellipse 1.svg",
  },
  {
    quote:
      "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
    name: "Emily Chen",
    title: "Marketing Head at Tech Solutions",
    img: "/Ellipse 1-1.svg",
  },
  {
    quote:
      "“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”",
    name: "John Lee",
    title: "Creative Director at Innovate Corp",
    img: "/Ellipse 1 2.svg",
  },
];

const Testimonials = () => {
    const[index, setIndex] = useState<0|1|2>(0);

    const next = () => {
        setIndex(((prev) => (((prev + 1) % 3 ) as 0|1|2)));
    };
    return (
      <section
        id="testimonials"
        className="w-full min-w-[393px] h-[583px] relative top-18 flex flex-col items-center justify-center py-10 gap-12 xl:w-[1440px] xl:h-[723px] xl:top-60 xl:py-20 xl:gap-20 xl:overflow-hidden"
      >
        <div className="w-full h-[115px] flex flex-col items-center justify-between">
          <h3 className="text-[28px] leading-[38px] text-neutral-950 font-bold text-center xl:text-[40px] xl:leading-[48px] dark:text-neutral-25">
            What Partners Say About Working With Us
          </h3>
          <p className="text-sm text-neutral-400 font-medium text-center xl:text-lg">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>
        <div className="w-full min-w-[1115px] xl:hidden flex items-center justify-center">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Slides.map((item, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  title={item.title}
                  img={item.img}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden xl:flex w-[1440px] justify-center gap-6 relative">
          <TestimonialCard {...Slides[(index + 2) % 3]} />
          <TestimonialCard {...Slides[index]} highlight />
          <TestimonialCard {...Slides[(index + 1) % 3]} />
          <div className="hidden xl:block absolute h-[400px] w-[705px] left-0 top-0 bg-gradient-to-r from-white to-transparent dark:from-black pointer-events-none" />
          <div className="hidden xl:block absolute right-0 top-0 h-[400px] w-[705px] bg-gradient-to-l from-white to-transparent dark:from-black pointer-events-none" />
        </div>
        <img
          onClick={next}
          src={
            index === 0
              ? "/pagination-left.svg"
              : index === 1
              ? "/pagination-middle.svg"
              : "/pagination-right.svg"
          }
          alt="pagination"
          className="w-9 h-2 xl:w-12 xl:h-3 cursor-pointer dark:hidden"
        />
        <img
          onClick={next}
          src={
            index === 0
              ? "/paginationDark-left.svg"
              : index === 1
              ? "/paginationDark-middle.svg"
              : "/paginationDark-right.svg"
          }
          alt="pagination"
          className="hidden dark:block w-9 h-2 xl:w-12 xl:h-3 cursor-pointer"
        />
      </section>
    );
}

export default Testimonials;