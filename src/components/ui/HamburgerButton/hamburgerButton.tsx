type Props = {
  open: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ open, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="w-[24px] h-[24px] xl:hidden hover:scale-125 cursor-pointer transition-all duration-300 ease-in-out"
    >
      {open ? (
        // If menu open → Show "X" icon button
        <div className="w-[24px] h-[24px] relative bg-transparent hover:scale-125 cursor-pointer transition-all duration-300 ease-in-out">
          <span className="absolute w-[20px] h-[2px] left-[2px] bg-black top-[10.5px] rotate-[45deg] rounded-full dark:bg-white"></span>
          <span className="absolute w-[20px] h-[2px] left-[2px] bg-black top-[10.5px] rotate-[135deg] rounded-full dark:bg-white"></span>
        </div>
      ) : (
        // If menu closed → Show hamburger 3 lines button
        <div className="w-[24px] h-[24px] py-1 flex flex-col justify-between items-center">
          <span className="h-[2px] w-[18px] rounded-full bg-black dark:bg-white"></span>
          <span className="h-[2px] w-[18px] rounded-full bg-black dark:bg-white"></span>
          <span className="h-[2px] w-[18px] rounded-full bg-black dark:bg-white"></span>
        </div>
      )}
    </div>
  );
}

export default HamburgerButton;
