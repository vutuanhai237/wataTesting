import React, { Component } from 'react';

import { Col, Row, FormControl } from 'react-bootstrap'
import './App.css';
import card from './card.png'
class Card extends Component {
    render() {
        return (
            <div className="card">
                <Col>
                    <Row>
                        <h3>dâdadada</h3>
                        <p>1.8k</p>
                    </Row>
                    <Row> <p>dâdadada</p></Row>
                    <Row>
                        <img className="img" src={card} alt="Italian Trulli" />
                    </Row>
                </Col>
            </div>
        )
    }
}
export default Card;