import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";


const white = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default JavaView =>

  <center>
    <br /><br />
    <Card style={white}
      link="/Projects"
      className="cardi"
    >
      <h1>Java</h1>
      <Grid.Column>
        <Grid columns={4}
          align="center"
        >
          <div>
            <Button color="black">
              <a href="https://github.com/DMendez49/Connect4" target="_blank">
                <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/226/226777.png" height="150" width="140"></img>
              </a>
            </Button>
            <h3>Connect4</h3>
          </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div>
            <Button color="black">
              <a href="https://github.com/DMendez49/Final_Stimulator_Howw" target="_blank">
                <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/226/226777.png" 
                height="150" 
                width="141"
                >
                </img>
              </a>
            </Button>
            <h3>Final_Stimulator_Howw</h3>
          </div>
        </Grid>
      </Grid.Column>
    </Card>
    <br /><br />
  </center>