import React from 'react';
import logo from './logo.svg';
import { Col, Row, FormControl } from 'react-bootstrap'
import './App.css';

import icon from './inbox.png'
import Card from './Card.js'
function App() {
  return (
    <div className="app">
      <div className="menu">
        <Col>
          <Row className="icon">
            <img src={icon} className = "top-icon"/>
          </Row>
          <Row >
            <Col>

            </Col>
            <Col>
              <p>Inbox</p>
            </Col>
          </Row>
          <Row >
            <Col>

            </Col>
            <Col>
              <p>Saved</p>
            </Col>
          </Row>
          <Row >
            <Col>

            </Col>
            <Col>
              <p>Draft</p>
            </Col>
          </Row>
          <Row >
            <Col>

            </Col>
            <Col>
              <p>Sent</p>
            </Col>
          </Row>
          <Row >
            <Col>

            </Col>
            <Col>
              <p>Trash</p>
            </Col>
          </Row>
        </Col>
      </div>
      <div className="chat">
        <Col>
          <Row>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />

            {/* icon */}
          </Row>

          <Row>
            <Card />
          </Row>


        </Col>
      </div>
      <div className="main">
        <Col>
          <Row className="main-top">
            <FormControl className="input"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />

          </Row>
        </Col>
      </div>
      <div className="side-bar">
        <Col>
          <Row>

          </Row>

          <Row>

          </Row>
        </Col>
      </div>
    </div>
  );
}

export default App;
