import React, { Component } from "react";
import photo from "./003cad1.jpg";
import "./plugins/font-awesome/css/font-awesome.css";
import Velocity from "velocity-animate";

class App extends Component {
  componentDidMount() {
    document.querySelectorAll(".level-bar-inner").forEach((elem) => {
      elem.style.width = "0";
    });

    document.addEventListener("scroll", function scroll() {
      let elem = document.querySelector(".level-bar-inner");
      let rect = elem.getBoundingClientRect();
      let hT = rect.top + document.documentElement.scrollTop,
        hH = elem.offsetHeight,
        wH = document.documentElement.clientHeight,
        wS = document.documentElement.scrollTop;
      if (wS > hT + hH - wH) {
        document.removeEventListener("scroll", scroll);
        document.querySelectorAll(".level-bar-inner").forEach((elem) => {
          let itemWidth = elem.dataset.level;
          Velocity(elem, { width: itemWidth }, { duration: 800 });
        });
      }
    });
  }

  render() {
    let d = new Date();
    let year = d.getFullYear();

    return (
      <>
        <div className="text-sm max-w-6xl my-0 mx-auto shadow-xl lg:mt-12">
          <div className="md:grid md:grid-cols-4">
            <div className="md:col-span-1 md:col-start-4 bg-red-700 text-white">
              <div className="p-7 bg-red-800 text-center text-white">
                <img
                  className="mx-auto mb-4 w-24 h-24 rounded-[50px]"
                  src={photo}
                  alt=""
                />
                <h1 className="text-3xl font-extrabold mt-0 mb-3">
                  Jonathan Marcel
                </h1>
                <h3 className="text-gray-400 text-base font-normal mt-0 mb-0">
                  Software Engineer
                </h3>
              </div>

              <div className="p-7">
                <ul className="mb-0">
                  <li className="mb-4">
                    <i className="fa fa-envelope mr-1"></i>
                    <a href="mailto: jonathan.marcel.t@gmail.com">
                      jonathan.marcel.t@gmail.com
                    </a>
                  </li>
                  {/* <li className="phone"><i className="fa fa-phone"></i><span >08152334255</span></li> */}
                  {/* <li className="website"><i className="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li> */}
                  <li className="mb-4">
                    <i className="fa fa-linkedin mr-1"></i>
                    <a
                      href="https://www.linkedin.com/in/marcel-tumboimbela-965aa175"
                      target="_blank"
                    >
                      Jonathan Marcel T
                    </a>
                  </li>
                  <li className="mb-0">
                    <i className="fa fa-github mr-1"></i>
                    <a
                      href="http://www.github.com/marceltumboimbela"
                      target="_blank"
                    >
                      github.com/marceltumboimbela
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-7">
                <h2 className="uppercase text-base font-bold mt-0 mb-4">
                  Education
                </h2>
                <div className="mb-4">
                  <h4 className="text-sm mt-0 mb-1 font-bold">
                    MBA in Industrial Management
                  </h4>
                  <h5 className="text-gray-400 font-normal">
                    National Taiwan University of Science and Technology
                  </h5>
                  <div className="text-gray-400 font-normal">2012 - 2014</div>
                </div>
                <div className="mb-0">
                  <h4 className="text-sm mt-0 mb-1 font-bold">
                    BSc in Computer Science
                  </h4>
                  <h5 className="text-gray-400 font-normal">
                    Bandung Institute of Technology
                  </h5>
                  <div className="text-gray-400 font-normal">2007 - 2011</div>
                </div>
              </div>

              <div className="p-7">
                <h2 className="uppercase text-base font-bold mt-0 mb-4">
                  Languages
                </h2>
                <ul className="mb-0">
                  <li className="mb-2">
                    Indonesian <span className="text-gray-400">(Native)</span>
                  </li>
                  <li className="mb-2">
                    English{" "}
                    <span className="text-gray-400">(Professional)</span>
                  </li>
                  <li className="mb-2">
                    Mandarin <span className="text-gray-400">(Basic)</span>
                  </li>
                  <li className="mb-0">
                    French <span className="text-gray-400">(Basic)</span>
                  </li>
                </ul>
              </div>

              <div className="p-7">
                <h2 className="uppercase text-base font-bold mt-0 mb-4">
                  Interests
                </h2>
                <ul className="mb-0">
                  <li className="mb-2">Classical piano</li>
                  <li className="mb-2">Foreign languages</li>
                  <li className="mb-0">Web Development</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-3 md:col-start-1 md:row-start-1 bg-neutral-50 md:p-14 p-7">
              <section className="mb-7">
                <div className="flex items-center mb-5">
                  <i className="flex fa fa-user justify-center items-center w-7 h-7 mr-2 text-white rounded-[50%] bg-red-600 text-base relative"></i>
                  <h2 className="uppercase text-xl font-medium text-red-500 relative">
                    About Me
                  </h2>
                </div>
                <div className="summary">
                  <p>{`Currently I am working as a software engineer in a over-the-top content platform company. I have ${
                    year - 2016
                  } years experience developing web application (front-end and back-end) and 1 year work experience as a supply chain analyst. I am focusing on front-end web development and my favorite programming language is javascript.`}</p>
                </div>
              </section>

              <section className="mb-7">
                <div className="flex items-center mb-5">
                  <i className="flex fa fa-briefcase justify-center items-center w-7 h-7 mr-2 text-white rounded-[50%] bg-red-600 text-base relative"></i>
                  <h2 className="uppercase text-xl font-medium text-red-500 relative">
                    Experiences
                  </h2>
                </div>

                <div className="mb-7">
                  <div>
                    <div className="sm:block md:flex justify-between items-center">
                      <h3 className="text-black text-base mt-0 mb-0 font-bold">
                        Software Engineer
                      </h3>
                      <div className="text-gray-400">June 2018 - Present</div>
                    </div>
                    <div className="b-3 text-gray-500">
                      <a href="https://www.kmkonline.co.id/" target="_blank">
                        KMK Online
                      </a>
                    </div>
                  </div>
                  <div className="details">
                    <li>
                      Developing BBM desktop web application using React JS
                      framework.
                    </li>
                    <li>
                      Developing Vidio desktop and mobile web application using
                      Ruby on Rails and Javascript.
                    </li>
                    <li>
                      Practicing pair programming and test driven development.
                    </li>
                    <br />
                    <p>
                      KMK Online is digital arm of EMTEK Group. It owns and
                      invests in several digital companies. Its main portfolio
                      are Vidio and Consumer BBM.
                    </p>
                  </div>
                </div>

                <div className="mb-7">
                  <div>
                    <div className="sm:block md:flex justify-between items-center">
                      <h3 className="text-black text-base mt-0 mb-0 font-bold">
                        Software Engineer
                      </h3>
                      <div className="text-gray-400">April 2016 - May 2018</div>
                    </div>
                    <div className="b-3 text-gray-500">
                      <a href="https:///www.sepulsa.com/" target="_blank">
                        www.sepulsa.com
                      </a>
                    </div>
                  </div>
                  <div className="details">
                    <li>
                      Developing desktop and mobile web application using React
                      JS framework.
                    </li>
                    <br />
                    <p>
                      Sepulsa is Indonesia leading technology company which
                      provides a web application to purchase credit for mobile
                      phone services, electricity, and Healthcare/Social
                      Security Agency.
                    </p>
                  </div>
                </div>

                <div className="mb-7">
                  <div>
                    <div className="sm:block md:flex justify-between items-center">
                      <h3 className="text-black text-base mt-0 mb-0 font-bold">
                        Supply Chain Analyst
                      </h3>
                      <div className="text-gray-400">
                        February 2015 - February 2016
                      </div>
                    </div>
                    <div className="b-3 text-gray-500">
                      Danone Aqua (PT Tirta Investama)
                    </div>
                  </div>
                  <div className="details">
                    <li>
                      Managing inbound and outbound plan of beverages product in
                      Central Java, East Java, and outer islands.
                    </li>
                    <li>
                      Developing several automation tools using Excel Macro for
                      water supply planning team.
                    </li>
                    <li>
                      Creating and maintaining internal database using Microsoft
                      Access for beverage freshness data reporting.
                    </li>
                    <br />
                    <p>
                      Danone Aqua is the largest bottled mineral water producer
                      in Indonesia.
                    </p>
                  </div>
                </div>

                <div className="mb-7">
                  <div>
                    <div className="sm:block md:flex justify-between items-center">
                      <h3 className="text-black text-base mt-0 mb-0 font-bold">
                        Software Engineer
                      </h3>
                      <div className="text-gray-400">
                        December 2011 - August 2012
                      </div>
                    </div>
                    <div className="b-3 text-gray-500">
                      <a href="https://www.djarum.com" target="_blank">
                        Djarum
                      </a>
                    </div>
                  </div>
                  <div className="details">
                    <p>
                      Developing new features for company internal web
                      application using VB, Java, and PHP programming language.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-7">
                <div className="flex items-center mb-5">
                  <i className="flex fa fa-rocket justify-center items-center w-7 h-7 mr-2 text-white rounded-[50%] bg-red-600 text-base relative"></i>
                  <h2 className="uppercase text-xl font-medium text-red-500 relative">
                    {`Skills & Proficiency`}
                  </h2>
                </div>
                <div className="skillset">
                  <div className="mb-4 overflow-hidden flex items-center">
                    <h3 className="text-sm basis-2/6">Javascript</h3>
                    <div className="h-3 bg-slate-200 grow shrink-0">
                      <div
                        className="h-3 bg-red-600 level-bar-inner"
                        data-level="85%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4 overflow-hidden flex items-center">
                    <h3 className="text-sm basis-2/6">React</h3>
                    <div className="h-3 bg-slate-200 grow shrink-0">
                      <div
                        className="h-3 bg-red-600 level-bar-inner"
                        data-level="75%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4 overflow-hidden flex items-center">
                    <h3 className="text-sm basis-2/6">{`HTML & CSS`}</h3>
                    <div className="h-3 bg-slate-200 grow shrink-0">
                      <div
                        className="h-3 bg-red-600 level-bar-inner"
                        data-level="80%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4 overflow-hidden flex items-center">
                    <h3 className="text-sm basis-2/6">Ruby On Rails</h3>
                    <div className="h-3 bg-slate-200 grow shrink-0">
                      <div
                        className="h-3 bg-red-600 level-bar-inner"
                        data-level="55%"
                      ></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <section className="section projects-section">
    <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
    <div className="intro">
        <p></p>
    </div>
    <div className="item">
        <span className="project-title"><a href = "http://m.sepulsa.com" target="_blank">Frigate</a></span> - <span className="project-tagline">Sepulsa single page mobile web application built with React JS Framework.</span>

    </div>
    <div className="item">
        <span className="project-title">Phoenix</span> -
        <span className="project-tagline"> Sepulsa desktop application built with React JS Framework.</span>
    </div>
    <div className="item">
        <span className="project-title">VMI</span> - <span className="project-tagline">Redesigned business process and inventory management of Danone Water Supply Planner Team.</span>
    </div>
    <div className="item">
        <span className="project-title">Academic IS</span> - <span className="project-tagline">Courses timetable management of Diponegoro University built with PHP Codeigniter Framework.</span>
    </div>
    <div className="item">
        <span className="project-title">DSS</span> - <span className="project-tagline">Decision Support System to help PT Krakatau Steel top management built with PHP Yii Framework.</span>
    </div>
</section> */}
            </div>
          </div>
        </div>

        <footer className="p-7 pt-14">
          <div className="text-center">
            {/* <small className="copyright">Original design by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a></small><br/> */}
            <small className="text-gray-500 text-sm">
              {`Created ${year} by Marcel Tumboimbela. Built with React & Tailwind.`}
            </small>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
