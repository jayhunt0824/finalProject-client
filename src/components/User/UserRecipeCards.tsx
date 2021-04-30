  
import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
// import UserRecipeIndex from "./UserRecipeIndex";



export interface UserRecipeCardsProps {

  // fetchRecipes: Function;
  // editUpdateRecipe: Function;
  // updateOn: Function;
  recipe: any;
  // token: string;
  // id: string;
  deleteRecipe: any;
  editUpdateRecipe: any;
}

export interface UserRecipeCardsState {}

class UserRecipeCards extends React.Component<
  UserRecipeCardsProps,
  UserRecipeCardsState
> {
  constructor(props: UserRecipeCardsProps) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div>
      
     
      <Card className="recipeCard">
            <CardImg top width="200px" src={this.props.recipe.photoUrl} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{this.props.recipe.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.recipe.categories}</CardSubtitle>
                <CardText>{this.props.recipe.ingredients}</CardText>
                <Button onClick={()=>this.props.editUpdateRecipe(this.props.recipe.id)}>Edit</Button>
                <Button onClick={()=>this.props.deleteRecipe(this.props.recipe.id)}>Delete</Button>
            </CardBody>
        </Card>
        </div>
        
    )
  }
}

export default UserRecipeCards;