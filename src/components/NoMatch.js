import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const NoMatch = () => (
  <center>
    <br />
    <Header as='h3' textAlign='center'>
      Im so sorry but your lost.
      Go back to <Link to='/'> Home </Link>
    </Header>
  </center>
)

export default NoMatch