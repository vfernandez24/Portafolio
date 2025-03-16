type Props = {
  functionMenu: () => void;
  functionEnlace: (ref: React.RefObject<HTMLDivElement>) => void;
  text: string;
};

function HeaderLink({ functionMenu, functionEnlace, text }: Props) {
  return (
    <li
      className="header__item w-fit text-[#b3b3b3] flex justify-center items-center transition-all duration-[0.5s] ease-[ease] bg-[#12121249] **:cursor-pointer cursor-pointer backdrop-blur-[10px] m-0 px-5 py-2.5 p-0 rounded-[10px] hover:text-[#4caf50] hover:bg-[#25252579] list-none max-md:w-full max-md:h-[70px] max-md:border-b-[#e0e0e0] max-md:p-0 max-md:rounded-none max-md:border-b max-md:border-solid"
      onClick={() => {
        functionMenu;
        functionEnlace;
      }}
    >
      <button className="link__animation header__link w-fit text-inherit p-0 text-nowrap">
        {text}
      </button>
    </li>
  );
}

export default HeaderLink;
