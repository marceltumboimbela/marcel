import React, { Component } from 'react';
import logo from './logo.svg';
import photo from './003cad1.jpg'
import './App.css';
import './styles.css';
import './plugins/font-awesome/css/font-awesome.css';
import $ from 'jquery'

class App extends Component {

  componentDidMount() {
    $('.level-bar-inner').css('width', '0');
    //$(window).on('load', function() {
    $(window).scroll(function(){
       var hT = $('.level-bar-inner').offset().top,
       hH = $('.level-bar-inner').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
       if (wS > (hT+hH-wH)){
          $(window).off('scroll')
          $('.level-bar-inner').each(function() {
          var itemWidth = $(this).data('level');
          $(this).animate({
              width: itemWidth
          }, 800);
          });
       }


    //});
    });
  }

  render() {
    let d = new Date()
    let year = d.getFullYear()

    return (
      <div className="body">

          <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={photo} alt="" />
                <h1 className="name">Jonathan Marcel</h1>
                <h3 className="tagline">Software Engineer</h3>
            </div>

            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto: jonathan.marcel.t@gmail.com">jonathan.marcel.t@gmail.com</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><span >081220388540</span></li>
                    {/*<li className="website"><i className="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li>*/}
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href="http://www.linkedin.com/in/jonathan-marcel-t-965aa175" target="_blank">Jonathan Marcel T</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href="http://www.github.com/marceltumboimbela" target="_blank">github.com/marceltumboimbela</a></li>
                    {/*<li className="twitter"><i className="fa fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>*/}
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">MBA in Industrial Management</h4>
                    <h5 className="meta">National Taiwan University of Science and Technology</h5>
                    <div className="time">2012 - 2014</div>
                </div>
                <div className="item">
                    <h4 className="degree">BSc in Computer Science</h4>
                    <h5 className="meta">Bandung Institute of Technology</h5>
                    <div className="time">2007 - 2011</div>
                </div>
            </div>

            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>Indonesian <span className="lang-desc">(Native)</span></li>
                    <li>English <span className="lang-desc">(Professional)</span></li>
                    <li>Mandarin <span className="lang-desc">(Basic)</span></li>
                </ul>
            </div>

            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Playing piano</li>
                    <li>Reading articles</li>
                    <li>Computer programming</li>
                </ul>
            </div>

        </div>

        <div className="main-wrapper">

            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>About Me</h2>
                <div className="summary">
                    <p>Currently I am working as a software engineer in a startup company. I have 2 years experience developing web application (front-end and back-end) and 1 year work experience as a supply chain analyst.</p>
                </div>
            </section>

            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Software Engineer</h3>
                            <div className="time">April 2016 - Present</div>
                        </div>
                        <div className="company">PT Sepulsa Teknologi Indonesia | <a href='www.sepulsa.com'>www.sepulsa.com</a> </div>
                    </div>
                    <div className="details">
                        <p>Responsible in developing mobile web application using React JS framework. Currently I am building desktop web application using React JS framework to replace current one.</p>
                        <p>Sepulsa is Indonesia leading technology company which provides a web application to purchase credit for mobile phone services, electricity, and national health insurance.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Supply Chain Analyst</h3>
                            <div className="time">February 2015 - February 2016</div>
                        </div>
                        <div className="company">Danone Aqua (PT Tirta Investama)</div>
                    </div>
                    <div className="details">
                        <li>Managing inbound and outbound plan of beverages product in Central Java, East Java, and outer islands.</li>
                        <li>Developing several automation tools using Excel Macro for water supply planning team.</li>
                        <li>Creating and maintaining internal database using Microsoft Access for beverage freshness data reporting.</li>
                        <br/><p>Danone Aqua is the largest bottled mineral water producer in Indonesia.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Software Engineer</h3>
                            <div className="time">December 2011 - August 2012</div>
                        </div>
                        <div className="company">PT Djarum</div>
                    </div>
                    <div className="details">
                        <p>Developing new features for company internal web application using VB and Java programming language.</p>
                    </div>
                </div>

            </section>

            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                {/*<div className="intro">
                    <p></p>
                </div>*/}
                <div className="item">
                    <span className="project-title"><a href = "http://m.sepulsa.com" target="_blank">Frigate</a></span> - <span className="project-tagline">Sepulsa single page mobile web application built with React JS Framework.</span>

                </div>
                <div className="item">
                    <span className="project-title">Phoenix</span> -
                    <span className="project-tagline"> Sepulsa desktop application built with React JS Framework (on-going project).</span>
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
            </section>

            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">
                    <div className="item">
                        <h3 className="level-title">VBA &amp; Microsoft Excel</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="95%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Javascript &amp; jQuery</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="90%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">React Javascript</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="80%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">HTML5 &amp; CSS</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="85%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">PHP &amp; MySQL</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="87%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Photoshop</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="60%">
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    </div>

    <footer className="footer">
        <div className="text-center">
            {/*<small className="copyright">Original design by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a></small><br/>*/}
            <small className="copyright">Modified {year} by Marcel Tumboimbela. Built with React-Bootstrap.</small>
        </div>
    </footer>

      </div>
    );
  }
}

export default App;
