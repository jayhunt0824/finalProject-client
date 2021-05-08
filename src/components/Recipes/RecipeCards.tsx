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
import { relative } from "node:path";

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
      <div className="fetchCardDiv">
        <Card className="fetchCard" style={{backgroundColor: "black",}}>
          <CardImg style={{height: "370px"}} src={this.props.drink.strDrinkThumb} alt="Card image cap" />
          <CardBody style={{backgroundColor: "white", textAlign: "center"}}>
           
            <CardTitle tag="h5">{this.props.drink.strDrink}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.drink.strCategory}
            </CardSubtitle>
            {/* <CardText>{this.props.drink.strInstructions}</CardText> */}
            <Button className="btn-grad" onClick={this.toggle}>View</Button>
            <Modal  className="drinkModal" isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader className="fetchModalHeader" toggle={this.toggle}></ModalHeader>
          <ModalBody style={{height: "520px"}}>
         <img style={{height: "200px", borderRadius: "8px"}}src={this.props.drink.strDrinkThumb} alt=""/>
         <h3 className="fetchName">{this.props.drink.strDrink}</h3>
         <h4 className="ingredientsH">Ingredients:</h4>
         <div className="ingredients">
          
         {this.props.drink.strMeasure1}
           {this.props.drink.strIngredient1}
           <br/>
           {this.props.drink.strMeasure2}
           {this.props.drink.strIngredient2}
           <br/>
           {this.props.drink.strMeasure3}
            {this.props.drink.strIngredient3} 
            <br/>
            {this.props.drink.strMeasure4}
           {this.props.drink.strIngredient4}
           <br/>
           {this.props.drink.strMeasure5}
           {this.props.drink.strIngredient5}
           <br/>
           {this.props.drink.strMeasure6}
           {this.props.drink.strIngredient6}
           
           
           </div>
           <div className="glassware" style={{position: "relative", bottom: "190px", left: "0px"}}>
          <h4>Glassware:</h4>
           {this.props.drink.strGlass}
           </div>
           <div className="directions" style={{position: "relative", bottom: "180px"}}>
          <h4>Directions:</h4>
           {this.props.drink.strInstructions}
           <br/>
        
           </div>

          </ModalBody>
          <ModalFooter className="myModalFooter">
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
