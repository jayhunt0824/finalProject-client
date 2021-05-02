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
        <Card className="fetchCard" style={{backgroundColor: "black",}}>
          <CardImg src={this.props.drink.strDrinkThumb} alt="Card image cap" />
          <CardBody style={{backgroundColor: "white", textAlign: "center"}}>
            <CardTitle tag="h5">{this.props.drink.strDrink}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.drink.strCategory}
            </CardSubtitle>
            {/* <CardText>{this.props.drink.strInstructions}</CardText> */}
            <Button className="recipeBtn" onClick={this.toggle}>Button</Button>
            <Modal  className="drinkModal" isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader  className="myModalHeader" toggle={this.toggle}>{this.props.drink.strDrink}</ModalHeader>
          <ModalBody>
         
          {this.props.drink.strTags}
           {this.props.drink.strInstructions}
          

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
