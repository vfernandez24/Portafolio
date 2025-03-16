import HeaderLink from "./HeaderLink";
import { useState } from "react";

type Props = {
  section1Ref: (ref: React.RefObject<HTMLDivElement>) => void;
  section2Ref: (ref: React.RefObject<HTMLDivElement>) => void;
  section3Ref: (ref: React.RefObject<HTMLDivElement>) => void;
  section4Ref: (ref: React.RefObject<HTMLDivElement>) => void;
};

function Header({ section1Ref, section2Ref, section3Ref, section4Ref }: Props) {
  const [menu, setMenu] = useState(true);

  return (
    <header
      id="nav"
      className="header h-[70px] w-full z-[1] flex justify-center items-center fixed left-0 top-0 bg-transparent max-md:h-[10vh] max-md:bg-[#121212]"
    >
      <img
        src="/Portafolio/public/icon2.png"
        className="header__logo hidden max-md:flex max-md:h-full"
      />
      <div
        className={`header__nav w-fit max-md:absolute max-md:w-full max-md:transition-all max-md:duration-300 max-md:ease-in max-md:overflow-hidden max-md:top-[10vh] ${
          menu == true ? "max-md:max-h-[280px]" : " max-md:max-h-0"
        }`}
      >
        <ul className="header__list flex gap-5 max-md:flex-col max-md:w-full max-md:gap-0">
          <HeaderLink
            functionEnlace={section1Ref}
            functionMenu={() => setMenu(!menu)}
            text="Home"
          />
          <HeaderLink
            functionEnlace={section2Ref}
            functionMenu={() => setMenu(!menu)}
            text="About Me"
          />
          <HeaderLink
            functionEnlace={section3Ref}
            functionMenu={() => setMenu(!menu)}
            text="Projects"
          />
          <HeaderLink
            functionEnlace={section4Ref}
            functionMenu={() => setMenu(!menu)}
            text="Contact"
          />
        </ul>
      </div>
      <div
        onClick={() => setMenu(!menu!)}
        className="header__btn hidden max-md:flex absolute text-[40px] text-[#b3b3b3] right-[2vh] top-[2vh] hover:text-[#4caf50]"
      >
        <i className="fa-solid fa-bars" />
      </div>
    </header>
  );
}

export default Header;

// Enlaces: body, about me, projects y contact
