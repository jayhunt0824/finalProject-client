import * as React from "react";
import { Component } from "react";
import { Drink } from "./RecipeCardsInterface";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

export interface RecipeCardsProps {
 
  drink: Drink;
}

export interface RecipeCardsState {
  drinkinformation: Drink[];
  modal: boolean;
}

class RecipeCards extends React.Component<RecipeCardsProps, RecipeCardsState> {
  constructor(props: RecipeCardsProps) {
    super(props);
    this.state = { drinkinformation: [], modal: false };
  }

  toggle=()=> {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <div>
        <Card className="card">
          <CardImg src={this.props.drink.strDrinkThumb} alt="Card image cap" />
          <CardBody style={{backgroundColor: "white", textAlign: "center"}}>
            <CardTitle tag="h5">{this.props.drink.strDrink}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.drink.strCategory}
            </CardSubtitle>
            {/* <CardText>{this.props.drink.strInstructions}</CardText> */}
            <Button onClick={this.toggle}>Button</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RecipeCards;
