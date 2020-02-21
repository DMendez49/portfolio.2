import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";


const white = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: "1px",
  width: "800px",
  height: "300px"
}

export default JavaScriptView =>

  <>
    <center>
      <br /><br />
      <Card style={white}
        className="cardi"
        link="/Projects"
      >
        <h1>JavaScript</h1>
        <Grid.Column>
          <Grid columns={4}
            align="center"
          >
            <div>
              <Button color="black">
                <a href="https://github.com/DMendez49/contextApp/tree/master/src/components" target="_blank">
                  <img alt="build diagram" src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png" 
                  height="150" 
                  width="141"
                  >
                  </img>
                </a>
              </Button>
              <h3>contextApp</h3>
            </div>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <Button color="black">
                <a href="https://github.com/DMendez49/Flash_Cards" target="_blank">
                  <img alt="build diagram" src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png"
                 height="150" 
                 width="141"
                   >
                   </img>
                </a>
              </Button>
              <h3>Flash_Cards</h3>
            </div>
          </Grid>
        </Grid.Column>
      </Card>
      <br /><br />
    </center>
  </>