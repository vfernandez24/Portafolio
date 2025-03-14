import { useRef } from "react";
import Header from "./components/Header";
import handleScroll from "./scroll";
import Skill from "./components/Skill";

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
          className="section w-full section_inicio h-[calc(100vh_-_70px)] relative flex items-center flex-col pt-[30vh] justify-start"
        >
          <div className="section_inicio__titulo1 h-[50px] w-fit flex justify-between items-center text-[#e0e0e0] mb-5">
            <img
              className="section_inicio__foto h-[50px] mr-5"
              src="/public/symbols/html_simbolo.svg"
            />
            <h1 className="section_inicio__frase1 font-bold text-[40px]">
              Hi!, I'm <span className="text-[#4caf50]">Víctor Fernández</span>,
            </h1>
          </div>
          <h1 className="section_inicio__frase2 font-normal text-[#b3b3b3] text-[35px]">
            student and frontend developer
          </h1>
        </section>

        <section
          ref={section2Ref}
          className="section h-fit w-full pt-[70px] section_sobreMi"
        >
          <h2 className="section__titulo text-center text-[#e0e0e0] text-3xl tracking-[2px] relative after:content-[''] after:absolute after:-translate-x-2/4 after:w-[60px] after:h-[5px] after:bg-[#4caf50] after:rounded-[5px] after:left-2/4 after:top-[50px]">
            ABOUT ME
          </h2>
          <div className="section_sobreMi__containerGeneral w-4/5 grid grid-cols-[1.2fr_1fr] gap-x-5 m-auto pt-[30px]">
            <div className="section_sobreMi__container h-fit pr-[15%]">
              <h3 className="text-3xl text-[#3a7ca5] mb-5">Get to know me!</h3>
              <img
                className="section_sobreMi__img w-3/12 flex m-auto rounded-[50%]"
                src="/public/perfil.enc"
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
                      <img src="/public/symbols/ts-gris.png" />
                      <img src="/public/symbols/ts-hover.png" />
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
                      <img src="/public/symbols/tailwind-gris.png" />
                      <img src="/public/symbols/tailwind-hover.png" />
                    </>
                  }
                />
                <Skill
                  text="Vite"
                  i={
                    <>
                      <img src="/public/symbols/vite-gris.png" />
                      <img src="/public/symbols/vite-hover.png" />
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
          <div className="section_proyectos__contenedorProyectos">
            <div className="section_proyectos__proyecto">
              <div className="section_proyectos__img">
                <div className="section_proyectos__pc">
                  <img src="img/Diseño_sin_título_(11)-transformed.png" />
                </div>
              </div>
              <div className="section_proyectos__div">
                <h3>byteZone</h3>
                <p>
                  Online store simulator with all its functionality except
                  payment ones. Use images and data generated by AI
                </p>
                <div className="section_proyectos__tec">
                  <div className="habilidad html">
                    <i className="fa-brands fa-html5" />
                    HTML
                  </div>
                  <div className="habilidad css">
                    <i className="fa-brands fa-css3-alt" />
                    CSS
                  </div>
                  <div className="habilidad js ">
                    <i className="fa-brands fa-js" />
                    JavaScript
                  </div>
                  <div className="habilidad github">
                    <i className="fa-brands fa-github" />
                    Github
                  </div>
                  <div className="habilidad responsive">
                    <i className="fa-solid fa-mobile-alt" />
                    Responsive Design
                  </div>
                </div>
                <div className="section_proyectos__divEnlaces">
                  <a
                    target="_blank"
                    href="https://vfernandez24.github.io/weather/index.html"
                    className="section_proyectos__links"
                  >
                    Web
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/vfernandez24/weather"
                    className="section_proyectos__links"
                  >
                    Codigo
                  </a>
                </div>
              </div>
            </div>
            <div className="section_proyectos__proyecto">
              <div className="section_proyectos__img">
                <div className="section_proyectos__pc">
                  <img src="img/Diseño_sin_título_(13)-transformed.png" />
                </div>
              </div>
              <div className="section_proyectos__div">
                <h3>tiendaLocalStorage</h3>
                <p>
                  Wish list focuses on the price of the user's products. The
                  data is stored in the localStorage
                </p>
                <div className="section_proyectos__tec">
                  <div className="habilidad figma">
                    <i className="fa-brands fa-figma" />
                    Figma
                  </div>
                  <div className="habilidad html">
                    <i className="fa-brands fa-html5" />
                    HTML
                  </div>
                  <div className="habilidad css">
                    <i className="fa-brands fa-css3-alt" />
                    CSS
                  </div>
                  <div className="habilidad js ">
                    <i className="fa-brands fa-js" />
                    JavaScript
                  </div>
                  <div className="habilidad github">
                    <i className="fa-brands fa-github" />
                    Github
                  </div>
                </div>
                <div className="section_proyectos__divEnlaces">
                  <a
                    target="_blank"
                    href="https://vfernandez24.github.io/Tienda-localStorage/"
                    className="section_proyectos__links"
                  >
                    Web
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/vfernandez24/Tienda-localStorage"
                    className="section_proyectos__links"
                  >
                    Codigo
                  </a>
                </div>
              </div>
            </div>
            <div className="section_proyectos__proyecto">
              <div className="section_proyectos__img">
                <div className="section_proyectos__pc">
                  <img src="img/Diseño_sin_título_(12)-transformed.png" />
                </div>
              </div>
              <div className="section_proyectos__div">
                <h3>Random Color</h3>
                <p>
                  A simple application that generates a random color with each
                  click. It displays the color code and changes the background
                  accordingly.
                </p>
                <div className="section_proyectos__tec">
                  <div className="habilidad html">
                    <i className="fa-brands fa-html5" />
                    HTML
                  </div>
                  <div className="habilidad css">
                    <i className="fa-brands fa-css3-alt" />
                    CSS
                  </div>
                  <div className="habilidad js ">
                    <i className="fa-brands fa-js" />
                    JavaScript
                  </div>
                  <div className="habilidad github">
                    <i className="fa-brands fa-github" />
                    Github
                  </div>
                </div>
                <div className="section_proyectos__divEnlaces">
                  <a
                    target="_blank"
                    href="https://vfernandez24.github.io/Color-Aleatorio/index.html"
                    className="section_proyectos__links"
                  >
                    Web
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/vfernandez24/Color-Aleatorio"
                    className="section_proyectos__links"
                  >
                    Codigo
                  </a>
                </div>
              </div>
            </div>
            <div className="section_proyectos__proyecto">
              <div className="section_proyectos__img">
                <div className="section_proyectos__pc">
                  <img src="img/Diseño_sin_título_(14)-transformed.png" />
                </div>
              </div>
              <div className="section_proyectos__div">
                <h3>To Do List</h3>
                <p>
                  Typical task list with an intuitive interface and data in
                  percentages. It also features a theme change (light/dark)
                </p>
                <div className="section_proyectos__tec">
                  <div className="habilidad figma">
                    <i className="fa-brands fa-figma" />
                    Figma
                  </div>
                  <div className="habilidad html">
                    <i className="fa-brands fa-html5" />
                    HTML
                  </div>
                  <div className="habilidad css">
                    <i className="fa-brands fa-css3-alt" />
                    CSS
                  </div>
                  <div className="habilidad js ">
                    <i className="fa-brands fa-js" />
                    JavaScript
                  </div>
                  <div className="habilidad github">
                    <i className="fa-brands fa-github" />
                    Github
                  </div>
                  <div className="habilidad responsive">
                    <i className="fa-solid fa-mobile-alt" />
                    Responsive Design
                  </div>
                </div>
                <div className="section_proyectos__divEnlaces">
                  <a
                    target="_blank"
                    href="https://vfernandez24.github.io/To-Do-List-1"
                    className="section_proyectos__links"
                  >
                    Web
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/vfernandez24/To-Do-List-1"
                    className="section_proyectos__links"
                  >
                    Codigo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            target="_blank"
            href="https://github.com/vfernandez24?tab=repositories"
            className="section_proyectos__btnVerMas"
          >
            More projects
          </a>
        </section>

        <section
          ref={section4Ref}
          className="section h-fit w-full pt-[70px] section_contacto"
        >
          <h2 className="section__titulo text-center text-[#e0e0e0] text-3xl tracking-[2px] relative after:content-[''] after:absolute after:-translate-x-2/4 after:w-[60px] after:h-[5px] after:bg-[#4caf50] after:rounded-[5px] after:left-2/4 after:top-[50px]">
            CONTACT
          </h2>
          <div className="section_contacto__container">
            <p className="section_contacto__texto">
              Do you have an idea for a project? Send me a message and I will be
              happy to hear it and surely participate in it
            </p>
            <div className="formulario">
              <h2 className="formulario__titulo" />
              <form action="" className="form">
                <label className="form__label form__label--1 form__label--1-1">
                  Nombre
                  <input className="form__input form__input--1" type="text" />
                </label>
                <label className="form__label form__label--1">
                  Email
                  <input className="form__input form__input--1" type="email" />
                </label>
                <label>
                  Mensaje
                  <textarea
                    id="textarea"
                    maxLength={200}
                    className="form__input form__input--2"
                    rows={10}
                    defaultValue={""}
                  />
                </label>
                <span id="textarea-leght">200</span>/200 caracteres restantes
                <input
                  type="submit"
                  defaultValue="Enviar"
                  className="form__input form__input--3"
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="img/v (3).png" alt="Logo" />
          </div>
          <div className="footer-social">
            <a href="https://github.com/vfernandez24" target="_blank">
              <i className="fa-brands fa-github" />
              Github
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin" />
              Linkedin
            </a>
            <a href="https://instagram.com/vf.ernandez_" target="_blank">
              <i className="fa-brands fa-instagram" />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
