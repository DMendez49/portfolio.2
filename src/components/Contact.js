import React, { useState, } from 'react';
import axios from "axios";
import { Form, Card, Button, } from "semantic-ui-react";
import Navbar2 from "../components/Navbar2"
import Footer2 from "../components/Footer2"

const Contact = () => {
  const [full_Name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.get(`/api/contact`)
    axios.get(`/api/contact?full_Name=${full_Name}&email=${email}&message=${message}`)
    .then(res => {
        console.log("Email Sent!")
      })
  };

  return (
    <>
      <Navbar2 />
      <div class="blackground">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <center>
          <Form.Group>
            <Form onSubmit={handleSubmit}>
              <Card className="widthscar">
                <div>
                  <h1>Full Name:</h1>
                  <Form.Input
                    size="big"
                    name="fullname"
                    value={full_Name}
                    placeholder="Enter Full Name... "
                    onChange={e => setFullName(e.target.value)}
                  >
                  </Form.Input>
                  <h1>Email:</h1>
                  <Form.Input
                    placeholder="Enter Email..."
                    size="big"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  >
                  </Form.Input>
                  <h1>Message:</h1>
                  <Form.Input
                    placeholder="Leave me a message..."
                    size="big"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  >
                  </Form.Input>
                </div>
              </Card>
              <br /> <br /><br /> <br />
          <Button
            color="blue inverted"
            size="massive"
            type="submit"
          >
            Send
          </Button>
            </Form>
          </Form.Group>
          <br /> <br /><br /> <br />
        </center>
        <br /><br /><br /><br /><br /><br /><br />
      </div>
      <Footer2 />
    </>
  )
}

export default Contact;

