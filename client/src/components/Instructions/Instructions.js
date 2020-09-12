import React, {useState} from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import './style.css'

function Instructions() {

    const [ isClicked, setIsClicked ] = useState(false)

  return (
    <div className="col-12 w-100 mx-auto">
      <Accordion className="w-100" defaultActiveKey="0">
        <Card className="bg-dark text-light">
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Header>
            <Accordion.Toggle as={Button} className="m-0 p-0 accordionButton" onClick={() => setIsClicked(!isClicked)} variant="link" eventKey="0">
              {isClicked ? <img alt="" src="./down-arrow.png" /> : <img alt= "" src="./up-arrow.png" />}
            </Accordion.Toggle>
          </Card.Header>
        </Card>
      </Accordion>
    </div>
  );
}

export default Instructions;
