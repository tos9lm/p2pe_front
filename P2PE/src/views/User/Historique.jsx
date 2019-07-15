import React, { Component } from "react";
import { Grid, Row, Col, Panel, PanelGroup } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
import NotificationSystem from "react-notification-system";
import ChartistGraph from "react-chartist";
import { style } from "variables/Variables.jsx";

const myStyle = {
  notifTrue: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    textAlign: 'center'
  },
  notifFalse: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    textAlign: 'center'
  },
  top: {
    borderBottom: '1px solid #808080',
    marginBottom: '20px'
  },
  title: {
    margin: '5px',
    fontWeight: 'bold',
    fontSize: '30px'
  },
  rang1: {
    padding: 0,
    marginLeft: '60px',
    listStyleType: 'none',
  },
  rang2: {
    marginLeft: '2px',
    float: 'left'
  },
  rang3: {
    display: 'block',
    float: 'left',
    width: '100px',
    color: '#000000',
    textDecoration: 'none',
    textAlign: 'center',
    marginBottom: '20px',
    padding: 0,
    border: 0
  }
}

export class HistoriqueCustomer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      services: [
        {
          accept: true,
          service_name: 'Informatique',
          price: 29,
          name_customer: 'Salvador Dali',
          description: 'Réparer l\'ordi',
          emplacement: 'rue de l\'informatique',
          options: 'Réinstaller windows',
          date: '2019-07-24'
        },
        {
          accept: false,
          service_name: 'Jardinage',
          price: 48,
          name_customer: 'Pablo Picasso',
          description: 'Arroser les plantes',
          emplacement: 'rue du clochet',
          options: 'Amener un arrosoir',
          date: '2019-06-19'
        },
        {
          accept: true,
          service_name: 'Bricolage',
          price: 35,
          name_customer: 'Lee Ufan',
          description: 'Réparer la douche',
          emplacement: 'rue de l\'hiver',
          date: '2019-05-02'
        }
      ],
      orderDate: 'asc',
      orderService: 'asc',
      orderPrice: 'asc'
    };
  }

  _acceptOrNot(accept) {
    if (accept === true) {
      return (
        <p style={myStyle.notifTrue}>Accepté</p>
      );
    } else {
      return (
        <p style={myStyle.notifFalse}>Refusé</p>
      );
    }
  }

  _cardHeader(item) {
    return (
      <div className="App-header" style={myStyle.top}>
        <Grid fluid>
          <Row>
            <Col md={2}>
              {this._acceptOrNot(item.accept)}
            </Col>
            <Col md={8}>
              <h2 style={myStyle.title}>{item.service_name}</h2>
            </Col>
            <Col md={2}>
              <h2 style={myStyle.title}>{item.price}€</h2>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  _cardContent(item) {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <p>{item.name_customer}</p>
              <p>{item.description}</p>
              <p>{item.emplacement}</p>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <p>{item.options}</p>
            </Col>
            <Col md={2}>
              <p>{item.date}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  _renderList() {
    return (
      this.state.services.map((item, i) =>
        <Grid fluid key={i}>
          <Row>
            <Col md={12}>
              <Card
                content={
                  <div style={{ flexDirection: "column" }}>
                    {this._cardHeader(item)}
                    {this._cardContent(item)}
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      )
    );
  }

  tri(type) {
      if (type == 'date' && this.state.orderDate == 'asc') {
          var myServices =  this.state.services.sort((a, b) => {
              if (a.date < b.date) return -1;
              else if (a.date == b.date) return 0;
              else return 1;
          });
          this.setState({
              services: myServices,
              orderDate: 'desc',
              orderService: 'asc',
              orderPrice: 'asc'
          });
      } else if (type == 'date' && this.state.orderDate == 'desc') {
          var myServices =  this.state.services.sort((a, b) => {
              if (a.date > b.date) return -1;
              else if (a.date == b.date) return 0;
              else return 1;
          });
          this.setState({
              services: myServices,
              orderDate: 'asc',
              orderService: 'asc',
              orderPrice: 'asc'
          });
      }

      if (type == 'service' && this.state.orderService == 'asc') {
          var myServices =  this.state.services.sort((a, b) => {
              if (a.service_name < b.service_name) return -1;
              else if (a.service_name == b.service_name) return 0;
              else return 1;
          });
          this.setState({
              services: myServices,
              orderDate: 'asc',
              orderService: 'desc',
              orderPrice: 'asc'
          });
      } else if (type == 'service' && this.state.orderService == 'desc') {
          var myServices =  this.state.services.sort((a, b) => {
              if (a.service_name > b.service_name) return -1;
              else if (a.service_name == b.service_name) return 0;
              else return 1;
          });
          this.setState({
              services: myServices,
              orderDate: 'asc',
              orderService: 'asc',
              orderPrice: 'asc'
          });
      }

      if (type == 'price' && this.state.orderPrice == 'asc') {
          var myServices =  this.state.services.sort((a, b) => {
              if (a.price < b.price) return -1;
              else if (a.price == b.price) return 0;
              else return 1;
          });
          this.setState({
              services: myServices,
              orderDate: 'asc',
              orderService: 'asc',
              orderPrice: 'desc'
          });
      } else if (type == 'price' && this.state.orderPrice == 'desc') {
          var myServices =  this.state.services.sort((a, b) => {
              if (a.price > b.price) return -1;
              else if (a.price == b.price) return 0;
              else return 1;
          });
          this.setState({
              services: myServices,
              orderDate: 'asc',
              orderService: 'asc',
              orderPrice: 'asc'
          });
      }
  }

  render() {
    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <ul style={myStyle.rang1}>
          <li style={myStyle.rang2}>
            Classer les services par
          </li>
          <li style={myStyle.rang2}>
            <Button onClick={ ( ) => this.tri('date') } style={Object.assign(myStyle.rang3)}>
              Date
            </Button>
          </li>
          <li style={myStyle.rang2}>
            <Button onClick={ ( ) => this.tri('service') } style={Object.assign(myStyle.rang3)}>
              Service
            </Button>
          </li>
          <li style={myStyle.rang2}>
            <Button onClick={ ( ) => this.tri('price') } style={Object.assign(myStyle.rang3)}>
              Prix
            </Button>
          </li>
        </ul>
        {this._renderList()}
      </div>
    );
  }
}

export default HistoriqueCustomer;