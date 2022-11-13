import React, { Component } from "react";
import { Col, Container, Row ,ListGroup,ListGroupItem} from "reactstrap";

import SorularSayfasi from "./SorularSayfasi";
import VerilenCevaplar from "./VerilenCevaplar";

export default class App extends Component{
  state={
    Sorular:[],
    verilen_cevap:"",simdiki_cevap_1: "",
    simdiki_cevap_2: "",
    simdiki_cevap_3: "",
    simdiki_cevap_4: "",
    simdiki_soru: "Başlamak için 1.soruya tıklayın ",
    sorunumarası: " ",
    simdiki_soru_numara: "",
    Cevaplar:[],
  }
  degistir_soru = (ques) => {
    this.setState({ simdiki_soru: ques.soru });
    this.setState({ simdiki_soru_numara: ques.id });
    this.setState({ simdiki_cevap_1: ques.cevap_1 });
    this.setState({ simdiki_cevap_2: ques.cevap_2 });
    this.setState({ simdiki_cevap_3: ques.cevap_3 });
    this.setState({ simdiki_cevap_4: ques.cevap_4 });
  };
  componentDidMount(){
    this.getsorular();
  }
  getsorular =()=>{
    fetch("http://localhost:3000/sorular/")
    .then(response=>response.json())
    .then(data=>this.setState({Sorular:data}))
  }
 
  
  

  cevap = (text)=>{
      this.state.Cevaplar.push(text)
  }


  
  render(){
    return (
      <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <h1>Test Uygulaması</h1>
          </div>
        </Row>
        <Row>
          <Col>
            <div>
              <SorularSayfasi 
              Sorular = {this.state.Sorular}
              verilen_cevap = {this.state.verilen_cevap}
              cevap = {this.cevap}
              simdiki_soru = {this.state.simdiki_soru}
              simdiki_soru_numara = {this.state.simdiki_soru_numara}
              simdiki_cevap_1={this.state.simdiki_cevap_1}
              simdiki_cevap_4={this.state.simdiki_cevap_4}
              simdiki_cevap_3={this.state.simdiki_cevap_3}
              simdiki_cevap_2={this.state.simdiki_cevap_2}
              degistir_soru={this.degistir_soru}
              Cevaplar ={this.state.Cevaplar}/>
            </div>
          </Col>
          <Col>
            <div>
              <VerilenCevaplar 
              Sorular = {this.state.Sorular}
              verilen_cevap = {this.state.verilen_cevap}
              cevap = {this.cevap}
              simdiki_cevap_1={this.state.simdiki_cevap_1}
              simdiki_cevap_4={this.state.simdiki_cevap_4}
              simdiki_cevap_3={this.state.simdiki_cevap_3}
              simdiki_cevap_2={this.state.simdiki_cevap_2}
              degistir_soru={this.degistir_soru}
              simdiki_soru = {this.state.simdiki_soru}
              simdiki_soru_numara = {this.state.simdiki_soru_numara}
              Cevaplar ={this.state.Cevaplar}/>
            </div>
          </Col>
          <Col xs="1">
            <h4>Verilen Cevaplar:</h4>
          {this.state.Cevaplar.map((cevap) => (
            <ListGroup >
              <ListGroupItem className="w-2">{cevap}</ListGroupItem>
            </ListGroup>
          ))}</Col>
          
        </Row>
      </Container>
      
      
    </div>
      )
  }
}

