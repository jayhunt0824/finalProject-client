  
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

  // deleteRecipe = (recipe: any) => {
  //   fetch(`http://localhost:3000/recipe/delete/${recipe.id}`, {
  //     method: "DELETE",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: this.props.token,
  //     }),
  //   }).then(() => this.props.fetchRecipes());
  // };

  // recipeMapper = () => {
  //   return this.props.recipes.map(() => {
  //     return ()
        
  //   });
  // };

  render() {
    return (
      <div>
      
     
      <Card>
            <CardImg top width="200px" src={this.props.recipe.photoUrl} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{this.props.recipe.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.recipe.categories}</CardSubtitle>
                <CardText>{this.props.recipe.ingredients}</CardText>
                <Button onClick={()=>this.props.deleteRecipe(this.props.recipe.id)}>Delete</Button>
            </CardBody>
        </Card>
        </div>
        
    )
  }
}

export default UserRecipeCards;
