import React, { useState, useEffect} from 'react';
import Navbar from "./Navbar";
import { Table, Card, Dropdown, Button, } from "semantic-ui-react";
import { render } from '@testing-library/react';
import RailsView from './RailsView';
import ReactView from './ReactView';


const Projects = (props) => {
  const [selection, setSelection] = useState('')

  const options = [
    { key: 1, text: 'Rails', value: 'rails' },
    { key: 2, text: 'React', value: 'react' },
    { key: 3, text: 'Ruby', value: 'ruby' },
    { key: 4, text: 'Javascript', value: 'javascript' }
  ]

  const handleChange = (e, { value, }, ) => setSelection(value)
  const userOptions = () => {
    switch (selection) {
      case "rails":
        setSelection('')
        break;

      case "react":
        
        setSelection('')
        break;
      case "ruby":
        // { this.renderRuby }
        setSelection('')
        break;
      case "javascript":
        // { this.renderJavaScript }
        setSelection('')
        break;
    }
  }

  const renderProjects = () => {
    return (
      <div >
        <p>
          <select
            className="projects"
            class="ui fluid search selection dropdown"
            fluid multiple selection options
            role="combobox"
            style={cardW}
            value={selection}
            onChange={handleChange}
            simple item
            //figure out on change confusion is between state and hooks 
            // onChange={(e) => {useState({selection: e.target.value})}}
          >
            <option>Rails</option>
            <option>React</option>
            <option>Ruby</option>
            <option>Javascript</option>
            <option>Java</option>
          </select>
        </p>
      </div>

    )
  }


  return (
    <>
      <Navbar />
      <center>
        <h1>Select a project</h1>
        <p>the selection renders's a project writtin in that language or technology</p>
      </center>
      {/* {selection != '' ? userOptions() : null} */}
      <br /><br /><br /><br />
      <center>
        <div>

          {/* <Dropdown
            style={cardW}
            text='projects'
            as="h3"
            fluid multiple selection options={options}
            onChange={handleChange}
            value={selection}
            simple item
          /> */}

          {renderProjects()}
        </div>
      </center>

      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <center>
        <Button color='blue' size="big">Render these projects</Button>

        <br /><br />
        <Card style={cardW}>
          <br /><br /><br /><br />  <br /><br />

          <h1>Componenets will be rendered inside this card</h1>
          {/* {render here} */}
          {/* <RailsView /> */}
        </Card>
      </center>
      <br /><br /><br /><br />
      <br /><br /><br /><br />

    </>
  )
}

const cardW = {
  width: "1000px",
  backgroundColor: '#F2F5F7	',
}

export default Projects;