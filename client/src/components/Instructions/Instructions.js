import React, {useState} from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './style.css'

function Instructions() {

    const [ isClicked, setIsClicked ] = useState(false)

  return (
      <Accordion className="w-100 text-center" defaultActiveKey="0">
        <Card className="bg-dark text-light">
          <Accordion.Collapse eventKey="0">
            <Card.Body className="w-100 p-0">Instructions on how to use this site go here!</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="bg-dark text-light accordionButton">
            <Accordion.Toggle as={Button} className="m-0 p-0" onClick={() => setIsClicked(!isClicked)} variant="link" eventKey="0">
              {isClicked ? <img className="arrowImg" alt="Down arrow" src="/down-arrow.png" /> : <img className="arrowImg" alt= "Up arrow" src="/up-arrow.png" />}
            </Accordion.Toggle>
        </Card>
      </Accordion>
  );
}

export default Instructions;
