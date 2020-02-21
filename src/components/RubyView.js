import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";


const white = {
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default RubyView =>

  <center>
    <br /><br />
    <Card style={white}
      className="cardi"
      link="/Projects"
    >
      <h1>Ruby</h1>
      <Grid.Column>
        <Grid columns={4}
          align="center"
        >
          <div>
            <Button
              color="black"
              className="customCardlook">
              <a href="https://github.com/DMendez49/rails_lms" target="_blank">
                <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                  height="150"
                  width="141"
                >
                </img>
              </a>
            </Button>
            <h3>rails_lms</h3>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </Grid>
      </Grid.Column>
    </Card>
    <br /><br />
  </center>
