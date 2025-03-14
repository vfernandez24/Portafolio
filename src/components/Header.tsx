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
      className="header h-[70px] w-full z-[1] flex justify-center items-center fixed left-0 top-0 bg-transparent"
    >
      <img src="/public/icon2.png" className="header__logo hidden" />
      <div className="header__nav w-fit">
        <ul className="header__list flex gap-5">
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
      <div onClick={() => setMenu(!menu!)} className="header__btn hidden">
        <i className="fa-solid fa-bars" />
      </div>
    </header>
  );
}

export default Header;

// Enlaces: body, about me, projects y contact
