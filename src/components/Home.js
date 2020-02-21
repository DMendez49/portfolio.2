import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { Table, Card, } from "semantic-ui-react";
import favicon from "../images/favicon.png"
import 'aos/dist/aos.css';
import Footer from "../components/Footer"

const Home = () => (

  <>
    <head>
      <title>Portfolio</title>
      <Link rel="styleSheet" href="App.css"></Link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="shortcut icon" type="image/png" href={favicon}></link>
    </head>
    <div class="section-top">
      <div class="content">
        <br />
        <h1>David Mendez</h1>
        <br />
        <NavLink to="/About">
          <a href="#"> About </a>
        </NavLink>
      </div>
    </div>
    <div class="card2">
      <body class='card2'>
        <br /><br />
        <br /><br />
        <section>
          <div class="scroll">
            <span>
              <center>
                <br />
                <Card
                  link="/"
                  className="cardi"
                // style={cardW}
                >
                  <br />
                  <p style={black}>
                    Hello my name is<p style={red}> David Mendez and I am a Freelancer/Software Engineer.</p>
                    These are the languages & technologies I currently study.
                </p>
                  <br />

                </Card>
              </center>
            </span>
          </div>
        </section>
        <center
        // class='card22'
        >
          <p>
            <div className='sidebyside'>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"
                      width="40"
                      height="40"
                    >
                    </img>
                    HTML
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png"
                      width="40"
                      height="40">
                    </img>
                    CSS
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                      width="40"
                      height="40">
                    </img>
                    Ruby
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png"
                      width="40"
                      height="40">
                    </img>
                    Rails
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://image.flaticon.com/icons/png/512/226/226777.png"
                      width="40"
                      height="40">
                    </img>
                    Java
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
                      width="40"
                      height="40">
                    </img>
                    JavaScript
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                      width="40"
                      height="40">
                    </img>
                    React
              </div>
                </span>
              </section>
              <section>
                <span>
                  <div class="scroll"
                  // data-aos="fade-up"
                  // data-aos-delay="50"
                  // data-aos-duration="1000"
                  >
                    <img alt="build diagram"
                      src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                      width="40"
                      height="40">
                    </img>
                    Git
              </div>
                </span>
              </section>
              <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
              <script>
                AOS.init();
            </script>
            </div>
          </p>
        </center>
        <section>
          <center>
            <Card
              className="cardi"
              link="/"
            >
              <br /><br />
              <p style={black}>
                My interest for computer science grew with my time at Instructure.
                I am a self taught programmer, I expanded my skills by completing
                the following courses at Salt Lake Comunity College.
            </p>
              <br /><br />
            </Card>
          </center>
        </section>
        <center>
          <p>
            <br /><br /><br />
           
            <Table
              className="cardi2"
              basic
              className="cardi"
              link="/"
              >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Class Id:</Table.HeaderCell>
                  <Table.HeaderCell>Class Name:</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>1400</Table.Cell>
                  <Table.Cell> Fundamentals Of Computer Science</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>1410</Table.Cell>
                  <Table.Cell>Object Oriented programming</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2420</Table.Cell>
                  <Table.Cell>Data Structures & Algorithms</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            <br /><br />
            <Card
              className="cardi"
              link="/"
            >
              <br />
              <p style={black}>
                In addition to my studies I attended a Coding Boot-Camp with the University Of Utah
                at Dev Point Labs. I will continue this journey by challenging myself daily.
            </p>
              <p style={red}>
                Click "About" for more information listed above.
            </p>
            </Card>
            <br /><br /> <br />
          </p>

          <h3>Schools I attended:</h3>
          <br /><br />
          <div class="editForPhone">
            <div class="sidebyside">
              <img alt="build diagram" src="https://umc.utah.edu/wp-content/uploads/sites/15/2015/01/BlockU_400px.png" width="180" height="100"></img>
              <img alt="build diagram" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2475/s300/beaker-white-256.png" width="100" height="90"></img>
              <img alt="build diagram" src="https://i.slcc.edu/institutionalmarketing/images/logo/SLCClogo-BrandColors2015.png" width="175" height="90" ></img>
            </div>
          </div>
          <br /> <br /> <br /> <br />
        </center>
        <br />
      </body>
    </div>
    <Footer />
  </>
)

const red = {
  color: "Darkred",
}

const black = {
  color: "black",
}


export default Home;


