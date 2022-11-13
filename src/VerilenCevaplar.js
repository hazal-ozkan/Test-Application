
import React, { Component } from "react";
import { Col, ListGroup, ListGroupItem, Button } from "reactstrap";

export default class VerilenCevaplar extends Component {
  render() {
    return (
      <div>
        <Col xs="9">
          {this.props.Sorular.map((ques) => (
            
            <ListGroup>
              <ListGroupItem  className="w-1">
                {ques.id}.
                <Button
                  color="primary"
                  outline
                  onClick={() => this.props.cevap(this.props.simdiki_cevap_1)}
                  className="mx-2  "
                >
                  A
                </Button>

                <Button
                  color="primary"
                  outline
                  onClick={() => this.props.cevap(this.props.simdiki_cevap_2)}
                  className="mx-2 "
                >
                  B
                </Button>

                <Button
                  color="primary"
                  outline
                  onClick={() => this.props.cevap(this.props.simdiki_cevap_3)}
                  className="mx-2 "
                >
                  C
                </Button>

                <Button
                  color="primary"
                  outline
                  onClick={() => this.props.cevap(this.props.simdiki_cevap_4)}
                  className="mx-2 "
                >
                  D
                </Button>
              </ListGroupItem>
            </ListGroup>
          ))}
        </Col>
      </div>
    );
  }
}
