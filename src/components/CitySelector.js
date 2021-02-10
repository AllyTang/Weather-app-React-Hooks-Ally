import React, { useState, useEffect } from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState('sydney');
  useEffect(() => {
    return onSelectButtonClick('sydney');
  }, []);
  return (
    <>
      <Row>
        <Col>
          <h1>Please select your city!</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormControl
            placeholder='Enter city'
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            data-testid='button'
            onClick={() => onSelectButtonClick(city)}
          >
            Check weather
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
