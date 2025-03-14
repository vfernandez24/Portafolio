import { ReactNode } from "react";

type Props = {
  text: string;
  i: ReactNode;
};

function Skill({ i, text }: Props) {
  return (
    <div
      className={`habilidad text-[#b3b3b3] w-fit h-10 flex justify-center items-center border border-[#b3b3b3] transition-all duration-[0.3s] ease-[ease] cursor-default px-2.5 py-[5px] rounded-[7px] border-solid ${text}`}
    >
      {i}
      {text}
    </div>
  );
}

export default Skill;
