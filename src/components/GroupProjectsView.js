import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";


const white = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default GroupProjectsView =>
  <>
    <center>
      <br /><br />
      <Card
        style={white}
        className="cardi"
        link="/Projects"
      >
        <h1>Rails & React</h1>
        <Grid.Column>
          <Grid
            columns={4}
            align="center"
          >
            <div>
              <Button
                color="black">
                <a
                  href="https://github.com/DMendez49/Rails_HackTrips" target="_blank">
                  <img
                    alt="build diagram"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png"
                    height="150" 
                    width="141"
                    >
                  </img>
                </a>
              </Button>
              <h3>Rails_HackTrips</h3>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <Button
                color="black">
                <a
                  href="https://github.com/DMendez49/rails_react_Utoob" target="_blank">
                  <img
                    alt="build diagram"
                    src="https://www.codemy.net/imaging/size/512x512/3_20180926131748_3c41b4169236ebb636038dd2_167843341e6d9be8377a9e335dc4b0a54948cccb_001_20180927131748_0011_dnld/codemy-studio-production/collections/learn-react-on-rails/react-on-rails-icon.jpg"
                    height="150" 
                    width="141"
                    >
                  </img>
                </a>
              </Button>
              <h3>rails_react_Utoob</h3>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <Button
                color="black">
                <a href="https://github.com/DMendez49/DevPointLabs_Store" target="_blank">
                  <img
                    alt="build diagram"
                    src="https://www.codemy.net/imaging/size/512x512/3_20180926131748_3c41b4169236ebb636038dd2_167843341e6d9be8377a9e335dc4b0a54948cccb_001_20180927131748_0011_dnld/codemy-studio-production/collections/learn-react-on-rails/react-on-rails-icon.jpg"
                    height="150"
                    width="141"
                  >
                  </img>
                </a>
              </Button>
              <h3>DevPointLabs_Store</h3>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Grid>
        </Grid.Column>
      </Card>
      <br /><br />
    </center>
  </>