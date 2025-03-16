import { useRef } from "react";
import Header from "./components/Header";
import handleScroll from "./scroll";
import Skill from "./components/Skill";
import Project from "./components/Project";

function App() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        section1Ref={() => handleScroll(section1Ref)}
        section2Ref={() => handleScroll(section2Ref)}
        section3Ref={() => handleScroll(section3Ref)}
        section4Ref={() => handleScroll(section4Ref)}
      />

      <main className="pt-[70px]">
        <section
          ref={section1Ref}
          className="section w-full section_inicio h-[calc(100vh_-_70px)] relative flex items-center flex-col pt-[30vh] justify-start max-md:gap-[30px]"
        >
          <div className="section_inicio__titulo1 h-[50px] w-fit flex justify-between items-center text-[#e0e0e0] mb-5 max-md:flex-col">
            <img
              className="section_inicio__foto h-[50px] mr-5"
              src="/Portafolio/symbols/html_simbolo.svg"
            />
            <h1 className="section_inicio__frase1 font-bold text-[40px] max-md:text-3xl">
              Hi!, I'm <span className="text-[#4caf50]">Víctor Fernández</span>,
            </h1>
          </div>
          <h1 className="section_inicio__frase2 font-normal text-[#b3b3b3] text-[35px] max-md:text-3xl max-md:text-center">
            student and frontend developer
          </h1>
        </section>

        <section
          ref={section2Ref}
          className="section h-fit w-full pt-[70px] section_sobreMi max-md:min-h-fit max-md:mb-[50px]"
        >
          <h2 className="section__titulo text-center text-[#e0e0e0] text-3xl tracking-[2px] relative after:content-[''] after:absolute after:-translate-x-2/4 after:w-[60px] after:h-[5px] after:bg-[#4caf50] after:rounded-[5px] after:left-2/4 after:top-[50px]">
            ABOUT ME
          </h2>
          <div className="section_sobreMi__containerGeneral w-4/5 grid grid-cols-[1.2fr_1fr] gap-x-5 m-auto pt-[30px] max-md:grid-cols-[1fr] max-md:grid-rows-[2.9fr_1fr]">
            <div className="section_sobreMi__container h-fit pr-[15%] max-md:pr-0">
              <h3 className="text-3xl text-[#3a7ca5] mb-5">Get to know me!</h3>
              <img
                className="section_sobreMi__img w-3/12 flex m-auto rounded-[50%]"
                src="/Portafolio/perfil.enc"
              />
              <div className="section_sobreMi__texto h-fit text-[22px] text-justify font-light leading-[35px] text-[#b3b3b3] mt-5 text-balance">
                <p>
                  I'm Víctor, frontend developer with a passion for creating
                  elegant and functional web interfaces. Experienced in HTML,
                  CSS, and JavaScript. Focused on designing intuitive and
                  accessible solutions. I love new challenges and learning to
                  improve my abilities. One of my hobbies is music, I enjoy
                  playing the guitar and exploring different genres of music.
                  Music helps me relax and inspires my creativity in web
                  development.
                </p>
              </div>
              <div className="section_sobreMi__redes w-full flex justify-center gap-5 items-center mt-5">
                <a
                  className="w-6 h-6 flex justify-center items-center transition-[background-color] duration-[0.3s] ease-[ease] p-5 rounded-[50%] hover:bg-[#1e1e1e]"
                  href="https://github.com/vfernandez24"
                >
                  <i className="text-xl text-[#b3b3b3] fa-brands fa-github" />
                </a>
                <a
                  className="w-6 h-6 flex justify-center items-center transition-[background-color] duration-[0.3s] ease-[ease] p-5 rounded-[50%] hover:bg-[#1e1e1e]"
                  href="https://www.linkedin.com/in/victor-fernandez-660598278/"
                >
                  <i className="text-xl text-[#b3b3b3] fa-brands fa-linkedin" />
                </a>
                <a
                  className="w-6 h-6 flex justify-center items-center transition-[background-color] duration-[0.3s] ease-[ease] p-5 rounded-[50%] hover:bg-[#1e1e1e]"
                  href="https://instagram.com/vf.ernandez_"
                >
                  <i className="text-xl text-[#b3b3b3] fa-brands fa-instagram" />
                </a>
                <a
                  className="w-6 h-6 flex justify-center items-center transition-[background-color] duration-[0.3s] ease-[ease] p-5 rounded-[50%] hover:bg-[#1e1e1e]"
                  href="mailto:germanfernanezblanco@gmail.com"
                >
                  <i className="text-xl text-[#b3b3b3] fa-solid fa-envelope" />
                </a>
              </div>
            </div>
            <div className="section_sobreMi__container">
              <h3 className="text-3xl text-[#3a7ca5] mb-5">Skills</h3>
              <div className="section_sobreMi__containerHabilidades flex flex-wrap gap-2.5 gap-y-2.5">
                <Skill
                  text="CSS3"
                  i={<i className="fab fa-css3-alt mr-[5px]"></i>}
                />
                <Skill
                  text="HTML5"
                  i={<i className="fab fa-html5 mr-[5px]"></i>}
                />
                <Skill
                  text="JavaScript"
                  i={<i className="fab fa-js mr-[5px]"></i>}
                />
                <Skill
                  text="TypeScript"
                  i={
                    <>
                      <img src="/Portafolio/symbols/ts-gris.png" />
                      <img src="/Portafolio/symbols/ts-hover.png" />
                    </>
                  }
                />
                <Skill
                  text="React"
                  i={<i className="fab fa-react mr-[5px]"></i>}
                />
                <Skill
                  text="TailwindCSS"
                  i={
                    <>
                      <img src="/Portafolio/symbols/tailwind-gris.png" />
                      <img src="/Portafolio/symbols/tailwind-hover.png" />
                    </>
                  }
                />
                <Skill
                  text="Vite"
                  i={
                    <>
                      <img src="/Portafolio/symbols/vite-gris.png" />
                      <img src="/Portafolio/symbols/vite-hover.png" />
                    </>
                  }
                />
                <Skill
                  text="Figma"
                  i={<i className="fab fa-figma mr-[5px]"></i>}
                />
                <Skill
                  text="Github"
                  i={<i className="fab fa-github mr-[5px]"></i>}
                />
                <Skill
                  text="Responsive Design"
                  i={<i className="fa-solid fa-mobile-alt mr-[5px]"></i>}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          ref={section3Ref}
          className="section h-fit w-full pt-[70px] section_proyectos"
        >
          <h2 className="section__titulo text-center text-[#e0e0e0] text-3xl tracking-[2px] relative after:content-[''] after:absolute after:-translate-x-2/4 after:w-[60px] after:h-[5px] after:bg-[#4caf50] after:rounded-[5px] after:left-2/4 after:top-[50px]">
            PROJECTS
          </h2>
          <div className="section_proyectos__contenedorProyectos w-[80vw] flex flex-col gap-[50px] items-center m-auto pt-10 justify-start max-md:gap-0">
            <Project
              description="Intuitive financial manager suitable for all types of clients, with all the necessary settings for comfortable customization for anyone."
              hrefRepo="https://github.com/vfernandez24/gestor-gastos"
              hrefWeb="https://vfernandez24.github.io/gestor-gastos"
              imgSrc="/Portafolio/planitUp.png"
              skills={
                <>
                  <Skill
                    text="CSS3"
                    i={<i className="fab fa-css3-alt mr-[5px]"></i>}
                  />
                  <Skill
                    text="HTML5"
                    i={<i className="fab fa-html5 mr-[5px]"></i>}
                  />
                  <Skill
                    text="TypeScript"
                    i={
                      <>
                        <img src="/Portafolio/symbols/ts-gris.png" />
                        <img src="/Portafolio/symbols/ts-hover.png" />
                      </>
                    }
                  />
                  <Skill
                    text="React"
                    i={<i className="fab fa-react mr-[5px]"></i>}
                  />
                  <Skill
                    text="TailwindCSS"
                    i={
                      <>
                        <img src="/Portafolio/symbols/tailwind-gris.png" />
                        <img src="/Portafolio/symbols/tailwind-hover.png" />
                      </>
                    }
                  />
                  <Skill
                    text="Vite"
                    i={
                      <>
                        <img src="/Portafolio/symbols/vite-gris.png" />
                        <img src="/Portafolio/symbols/vite-hover.png" />
                      </>
                    }
                  />
                  <Skill
                    text="Figma"
                    i={<i className="fab fa-figma mr-[5px]"></i>}
                  />
                  <Skill
                    text="Github"
                    i={<i className="fab fa-github mr-[5px]"></i>}
                  />
                  <Skill
                    text="Responsive Design"
                    i={<i className="fa-solid fa-mobile-alt mr-[5px]"></i>}
                  />
                </>
              }
              title="PlanitUp"
            />
            <Project
              description="Online store simulator with all its functionality except payment ones. Use images and data generated by AI"
              hrefRepo="https://github.com/vfernandez24/byteZone"
              hrefWeb="https://vfernandez24.github.io/byteZone"
              imgSrc="/Portafolio/byteZone.png"
              skills={
                <>
                  <Skill
                    text="CSS3"
                    i={<i className="fab fa-css3-alt mr-[5px]"></i>}
                  />
                  <Skill
                    text="HTML5"
                    i={<i className="fab fa-html5 mr-[5px]"></i>}
                  />
                  <Skill
                    text="JavaScript"
                    i={<i className="fab fa-js mr-[5px]"></i>}
                  />
                  <Skill
                    text="Figma"
                    i={<i className="fab fa-figma mr-[5px]"></i>}
                  />
                  <Skill
                    text="Github"
                    i={<i className="fab fa-github mr-[5px]"></i>}
                  />
                  <Skill
                    text="Responsive Design"
                    i={<i className="fa-solid fa-mobile-alt mr-[5px]"></i>}
                  />
                </>
              }
              title="byteZone"
            />
            <Project
              description="Wish list focuses on the price of the user's products. The data is stored in the localStorage"
              hrefRepo="https://github.com/vfernandez24/Tienda-localStorage"
              hrefWeb="https://vfernandez24.github.io/Tienda-localStorage"
              imgSrc="/Portafolio/tiendaLocalStorage.png"
              skills={
                <>
                  <Skill
                    text="CSS3"
                    i={<i className="fab fa-css3-alt mr-[5px]"></i>}
                  />
                  <Skill
                    text="HTML5"
                    i={<i className="fab fa-html5 mr-[5px]"></i>}
                  />
                  <Skill
                    text="JavaScript"
                    i={<i className="fab fa-js mr-[5px]"></i>}
                  />
                  <Skill
                    text="Figma"
                    i={<i className="fab fa-figma mr-[5px]"></i>}
                  />
                  <Skill
                    text="Github"
                    i={<i className="fab fa-github mr-[5px]"></i>}
                  />
                </>
              }
              title="tiendaLocalStorage"
            />
            <Project
              description="A simple application that generates a random color with each click. It displays the color code and changes the background accordingly"
              hrefRepo="https://github.com/vfernandez24/Color-Aleatorio"
              hrefWeb="https://vfernandez24.github.io/Color-Aleatorio"
              imgSrc="/Portafolio/randomColor.png"
              skills={
                <>
                  <Skill
                    text="CSS3"
                    i={<i className="fab fa-css3-alt mr-[5px]"></i>}
                  />
                  <Skill
                    text="HTML5"
                    i={<i className="fab fa-html5 mr-[5px]"></i>}
                  />
                  <Skill
                    text="JavaScript"
                    i={<i className="fab fa-js mr-[5px]"></i>}
                  />
                  <Skill
                    text="Github"
                    i={<i className="fab fa-github mr-[5px]"></i>}
                  />
                  <Skill
                    text="Responsive Design"
                    i={<i className="fa-solid fa-mobile-alt mr-[5px]"></i>}
                  />
                </>
              }
              title="Random Color"
            />
          </div>
          <a
            target="_blank"
            href="https://github.com/vfernandez24?tab=repositories"
            className="section_proyectos__btnVerMas max-md:mt-[50px] w-fit h-fit flex justify-center items-center text-xl transition-[color] duration-[0.3s] ease-[ease] text-[#3a7ca5] m-auto hover:text-[#3caf50]"
          >
            More projects
          </a>
        </section>

        <section
          ref={section4Ref}
          className="section h-fit w-full pt-[70px] section_contacto text-[#b3b3b3]"
        >
          <h2 className="section__titulo text-center text-[#e0e0e0] text-3xl tracking-[2px] relative after:content-[''] after:absolute after:-translate-x-2/4 after:w-[60px] after:h-[5px] after:bg-[#4caf50] after:rounded-[5px] after:left-2/4 after:top-[50px]">
            CONTACT
          </h2>
          <div className="section_contacto__container">
            <p className="section_contacto__texto block w-full text-3xl font-light text-center text-[#b3b3b3] pt-20 pb-[50px] px-[15%]">
              Do you have an idea for a project? Send me a message and I will be
              happy to hear it and surely participate in it
            </p>
            <div className="formulario w-full min-h-[calc(100vh_-_12vh)] h-fit flex justify-center items-center max-md:mt-[50px]">
              <h2 className="formulario__titulo" />
              <form
                action=""
                className="form block w-full text-[#b3b3b3] px-[20%] py-0 max-md:px-[10%]"
              >
                <label className="form__label max-md:w-full max-md:float-none w-[calc(47.5%)] float-left text-[#b3b3b3] mb-5 form__label--1 form__label--1-1 mr-[5%] block">
                  Nombre
                  <input
                    className="form__input mt-2.5 border-[none] bg-[#1e1e1e] focus:outline-none form__input--1 w-[calc(100%_-_15px)] h-10 pl-[15px] rounded-[10px] block"
                    type="text"
                  />
                </label>
                <label className="form__label max-md:w-full max-md:float-none w-[calc(47.5%)] float-left text-[#b3b3b3] mb-5 form__label--1 block">
                  Email
                  <input
                    className="form__input mt-2.5 border-[none] bg-[#1e1e1e] focus:outline-none form__input--1 w-[calc(100%_-_15px)] h-10 pl-[15px] rounded-[10px] block"
                    type="email"
                  />
                </label>
                <label className="text-[#b3b3b3]">
                  Mensaje
                  <textarea
                    id="textarea"
                    maxLength={200}
                    className="form__input mt-2.5 border-[none] bg-[#1e1e1e] focus:outline-none form__input--2 max-w-[calc(100%_-_15px)] min-w-[calc(100%_-_15px)] text-[15px] leading-[25px] mb-5 p-5 rounded-[10px] block"
                    rows={10}
                    defaultValue={""}
                  />
                </label>
                <span className="" id="textarea-leght">200</span>/200 caracteres restantes
                <input
                  type="submit"
                  defaultValue="Enviar"
                  className="form__input border-[none] bg-[#1e1e1e] focus:outline-none form__input--3 font-light text-xl cursor-pointer mt-5 m-auto px-[75px] py-[15px] rounded-[46px] hover:text-[#3a7ca5] block"
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer bg-[#1e1e1e] text-white px-0 py-5">
        <div className="footer-container flex justify-between items-center max-w-[1200px] mx-auto my-0 px-5 py-0">
          <div className="footer-logo">
            <img className="max-h-[50px]" src="img/v (3).png" alt="Logo" />
          </div>
          <div className="footer-social">
            <a href="https://github.com/vfernandez24" className="text-white no-underline mx-2.5 my-0 max-md:text-sm hover:underline hover:text-[#4caf50]" target="_blank">
              <i className="fab mr-[5px] fa-github" />
              Github
            </a>
            <a href="https://linkedin.com" className="text-white no-underline mx-2.5 my-0 max-md:text-sm hover:underline hover:text-[#4caf50]" target="_blank">
              <i className="fab mr-[5px] fa-linkedin" />
              Linkedin
            </a>
            <a href="https://instagram.com/vf.ernandez_" className="text-white no-underline mx-2.5 my-0 max-md:text-sm hover:underline hover:text-[#4caf50]" target="_blank">
              <i className="fab mr-[5px] fa-instagram" />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
