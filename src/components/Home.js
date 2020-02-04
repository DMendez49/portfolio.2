import { Link, NavLink, } from 'react-router-dom';
import React from 'react';
import { Image, Card, Container, Button, } from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => (
  <>
    <head>
      <Link rel="styleSheet" href="App.css"></Link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <title>Portfolio</title>
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
    <br /><br />
    <br /><br />
    <section>
      <div class="scroll">
        <span>
          <center>
            <Card style={cardW}

            >
              <p>
                Hello my name is<p class="colorFont"> David Mendez and I am a Freelancer/Software Engineer.</p>
                I Learned the following technologies with my studies at DevPoint Labs.
            </p>
            </Card>
          </center>
        </span>
      </div>
    </section>
    <body>
      <center>
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
          <Card style={cardW}>
            <br />
            <p>
              I know there is alot more to learn about the following technologies.
          </p>
            <p> but I am proud of how far I came. Click "About" for more! </p>
          </Card>
        </center>
      </section>
      <br /><br />

      {/* <br /> */}
      {/* <main class="container">
        <div data-aos="fade-left">
          <section class="card">
            <img src="https://www.finsmes.com/wp-content/uploads/2019/07/laptop-coding.jpg"
              width="1045"
              className=".img"
              height="350">
              </img>
            <div>
              <p>
                hello world 1
             </p>
            </div>
          </section>
        </div>

        <section class="card" data-aos="fade-right">
          <img src="https://www.finsmes.com/wp-content/uploads/2019/07/laptop-coding.jpg"
            width="800"
            height="350"></img>
          <div>
            <p>
              hello world 2
             </p>
          </div>
        </section>

        <section class="card" data-aos="fade-left">
          <img src="https://www.finsmes.com/wp-content/uploads/2019/07/laptop-coding.jpg"
            width="800"
            height="350"></img>
          <div>
            <p>
              hello world 3
             </p>
          </div>
        </section>

        <section class="card" data-aos="fade-right">
          <img src="https://www.finsmes.com/wp-content/uploads/2019/07/laptop-coding.jpg"
            width="800"
            height="350"></img>
          <div>
            <p>
              hello world 4
             </p>
          </div>
        </section>

        <section class="card" data-aos="fade-left">
          <img src="https://www.finsmes.com/wp-content/uploads/2019/07/laptop-coding.jpg"
            width="800"
            height="350">
          </img>
          <div>
            <p>
              hello world 5
             </p>
          </div>
        </section>
      </main>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
    </script> */}
    </body>
    <br />
  </>
)

const cardW = {
  width: "1000px",
}


export default Home;


