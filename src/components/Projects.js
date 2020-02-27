import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { withRouter, } from 'react-router-dom';
import RailsView from './RailsView';
import ReactView from './ReactView';
import RubyView from './RubyView';
import JavaView from './JavaView';
import JavaScriptView from "./JavaScriptView"
import GroupProjectsView from "./GroupProjectsView"
import Footer from "../components/Footer"

const Projects = (props) => {
  const [selection, setSelection] = useState("");

  const handleChange = (e) => setSelection(e.target.value)

  const renderRailsView = () => {
    return (
      <div>
        <RailsView />
      </div>
    )
  }

  const renderReactView = () => {
    return (
      <div>
        <ReactView />
      </div>
    )
  }

  const renderRubyView = () => {
    return (
      <div>
        <RubyView />
      </div>
    )
  }

  const renderJavaView = () => {
    return (
      <div>
        <JavaView />
      </div>
    )
  }

  const renderJavaScriptView = () => {
    return (
      <div>
        <JavaScriptView />
      </div>
    )
  }

  const renderGroupProjects = () => {
    return (
      <div>
        <GroupProjectsView />
      </div>
    )
  }

  const renderView = () => {
    switch (selection) {
      case "rails":
        return renderRailsView()
        break;
      case "react":
        return renderReactView()
        break;
      case "ruby":
        return renderRubyView()
        break;
      case "javascript":
        return renderJavaScriptView()
        break;
      case "Java":
        return renderJavaView()
        break;
      case "GroupProjects":
        return renderGroupProjects()
        break;
    }
  }

  const renderProjects = () => {
    return (
      <div >
        <p>
          <select
            id="select"
            class="ui fluid search selection dropdown"
            fluid multiple selection options
            role="combobox"
            style={cardW}
            onChange={handleChange}
            value={selection}
            simple item
          >
            <option value="rails" >Rails</option>
            <option value="react">React</option>
            <option value="ruby">Ruby</option>
            <option value="Java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="GroupProjects"> Group-Projects</option>
          </select>
        </p>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    )
  }

  return (
    <>
      <div class='card2'>
        <Navbar />
        <br /><br /> <br /><br />
        <center>
        <br /><br /> <br /><br />

          <h1>
          Select a Project 
            </h1>
            <br /> <br />
          <div>
            {renderProjects()}
          </div>
        </center>
        <br /><br /><br />
        
        <center>
          <br /><br />
          <h1>
            Components will be rendered here.
            </h1>
          {renderView()}
        </center>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <Footer />
      </div>
    </>
  )
}

const cardW = {
  width: "1000px",
  backgroundColor: '#F2F5F7	',
}

export default withRouter(Projects);