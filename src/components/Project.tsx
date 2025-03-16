import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  skills: ReactNode;
  hrefWeb: string;
  hrefRepo: string;
};

function Project({
  title,
  description,
  imgSrc,
  skills,
  hrefWeb,
  hrefRepo,
}: Props) {
  return (
    <div className="section_proyectos__proyecto w-full h-[400px] grid grid-cols-[5fr_6fr] gap-x-[30px] text-[#b3b3b3] max-md:h-fit max-md:flex max-md:items-center max-md:flex-col max-md:justify-start">
      <div className="section_proyectos__img">
        <div className="section_proyectos__pc">
          <img
            className="h-[300px] w-auto transition-all duration-[0.3s] ease-[ease] max-md:max-w-full max-md:object-contain"
            src={imgSrc}
          />
        </div>
      </div>
      <div className="section_proyectos__div max-md:w-full max-md:h-fit">
        <h3
          className="text-[#ffb74d] text-[40px] text-center font-bold font-[Arial,_Helvetica,_sans-serif] max-md:text-[10vw] max-md:whitespace-nowrap max-md:overflow-hidden max-md:text-ellipsis"
          style={{ textSizeAdjust: "100%" }}
        >
          {title}
        </h3>
        <p className="text-[25px] font-light min-h-[112px] text-justify pt-2.5">
          {description}
        </p>
        <div className="section_proyectos__tec flex flex-row flex-wrap gap-2.5 pt-2.5 justify-start">
          {skills}
        </div>
        <div className="section_proyectos__divEnlaces flex gap-2.5 pt-[30px] items-end justify-end">
          <a
            target="_blank"
            href={hrefWeb}
            className="section_proyectos__links flex justify-center items-center text-xl text-[#b3b3b3] transition-all duration-[0.3s] ease-[ease] bg-[#1e1e1e] px-2.5 py-[5px] rounded-[5px] hover:text-[#e0e0e0]"
          >
            Web
          </a>
          <a
            target="_blank"
            href={hrefRepo}
            className="section_proyectos__links flex justify-center items-center text-xl text-[#b3b3b3] transition-all duration-[0.3s] ease-[ease] bg-[#1e1e1e] px-2.5 py-[5px] rounded-[5px] hover:text-[#e0e0e0]"
          >
            Codigo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
