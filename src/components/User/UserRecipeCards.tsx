  
import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import UserRecipeEdit from "./UserRecipeEdit";
// import UserRecipeIndex from "./UserRecipeIndex";



export interface UserRecipeCardsProps {

  fetchRecipes: Function;
  // editUpdateRecipe: Function;
  // updateOn: Function;
  recipe: any;
 
  sessionToken: string;
  // id: string;
  deleteRecipe: any;
 

 
}

export interface UserRecipeCardsState {
  editRecipe: any | null;
}

class UserRecipeCards extends React.Component<
  UserRecipeCardsProps,
  UserRecipeCardsState
> {
  constructor(props: UserRecipeCardsProps) {
    super(props);
    this.state = { editRecipe: null};
  }



  render() {
    return (
      <div>
      
     
      <Card className="recipeCard">
            <CardImg className="myCardImg" style={{height: "290px", width: "290px"}}   src={this.props.recipe.photoURL} alt="Card image cap" />
            <CardBody className="userRecipeCardBody">
            <div className="cardWhiteDiv"></div>
            
                <CardTitle className="myCardTitle" tag="h5">{this.props.recipe.name}</CardTitle>
                <CardSubtitle id="myCardSubT" tag="h6" className="mb-2 text-muted">{this.props.recipe.categories}</CardSubtitle>
                <CardSubtitle id="myCardSubI" tag="h6" className="mb-2 text-muted">Ingredients:</CardSubtitle>
                <CardText className="myCardText">{this.props.recipe.ingredients}</CardText>
                <CardSubtitle id="myCardSubD" tag="h6" className="mb-2 text-muted">Directions:</CardSubtitle>
                <CardText className="myCardDir">{this.props.recipe.directions}</CardText>
                <UserRecipeEdit sessionToken={this.props.sessionToken} fetchRecipes={this.props.fetchRecipes} editRecipe={this.state.editRecipe} recipe={this.props.recipe}   />
                <Button className="mycarddbtn" onClick={()=>this.props.deleteRecipe(this.props.recipe.id)}>Delete</Button>
            </CardBody>
        </Card>
        </div>
        
    )
  }
}

export default UserRecipeCards;
