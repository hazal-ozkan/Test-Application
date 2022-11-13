import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export default class SorularSayfasi extends Component {
  state = {};

  render() {
    return (
      <Row xs="2">
        <div>
          <Card className="my-5" style={{ width: "50rem", height: "28.2rem" }}>
            <CardHeader>Soru {this.props.simdiki_soru_numara}</CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                <Row>
                  <Col sm="13" className="d-flex justify-content-center">
                    {this.props.simdiki_soru}
                  </Col>
                </Row>
              </CardTitle>
              <CardText className="my-5">
                <Row className="my-3 px-5 ">
                  <ListGroup>
                    <ListGroupItem>
                      A-{this.props.simdiki_cevap_1}
                    </ListGroupItem>
                    <ListGroupItem>
                      B-{this.props.simdiki_cevap_2}
                    </ListGroupItem>
                    <ListGroupItem>
                      C-{this.props.simdiki_cevap_3}
                    </ListGroupItem>
                    <ListGroupItem>
                      D-{this.props.simdiki_cevap_4}
                    </ListGroupItem>
                  </ListGroup>
                </Row>
              </CardText>
            </CardBody>
            <CardFooter>
              <Row>
                <Col sm="12" className="d-flex justify-content-center">
                  {this.props.Sorular.map((ques) => (
                    <Button
                      onClick={() => {
                        this.props.degistir_soru(ques);
                      }}
                    >
                      {ques.id}
                    </Button>
                  ))}
                </Col>
              </Row>
            </CardFooter>
          </Card>
          
        </div>
      </Row>
    );
  }
}
