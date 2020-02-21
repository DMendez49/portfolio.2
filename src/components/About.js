import React from 'react';
import Navbar2 from "./Navbar2";
import { Table, Card, } from "semantic-ui-react";
import like3 from "../images/like3.JPG"
import Footer2 from "../components/Footer2"

const About = () => (
    <>
        <Navbar2 />
        <center
            className="card"
        >
            {/* <div >
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
        </div> */}
            <div class="me">
                <div class="content2">
                    <img
                        src={like3}
                        height="420px"
                        width="550px"
                    >
                    </img>
                </div>
                <div class="content3">
                    <h2>
                        hello world
                       </h2>
                    <br />
                    <div
                        class="text">
                        <p>
                            My Name is David Mendez and I live in beautiful Salt Lake City, Utah.
                            My concentration is to build individualized apps & websites.
                            <p>
                                Feel free to connect with me by clicking contact option above.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="card">
                <br /><br /><br /><br />
                <h1 class="text">Hobbies:</h1>
                <Card
                    className="cardi2"
                    link="/About"
                >
                    <br />
                    <p class="text">
                        I spend alot of my free time coding and doing freelance work to expand my skill set.
                        When Im not coding Im either spending time with my family or nature.
                    </p>
                    <br />
                </Card>
                <br /><br /><br /><br />

                <div class="section-topps">
                </div>
                <br /><br />
                <h1 class="text">Experience:</h1>
                <Card
                    className="cardi2"
                    link="/About">
                    <br />
                    <p class="text">I will build a freelance section here soon. I am currently working on some Freelance projects.</p>
                    <br />
                </Card>
                <br /><br /><br /><br />
                <div class="section-topps2">
                </div>
                <br /><br /><br /><br />
            </div>
        </center>
        <Footer2 />
    </>
)

export default About;