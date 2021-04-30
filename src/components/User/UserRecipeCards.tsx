import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import UserRecipeIndex from "./UserRecipeIndex";



export interface UserRecipeCardsProps {

  // fetchRecipes: Function;
  // editUpdateRecipe: Function;
  // updateOn: Function;
  recipe: any;
  // token: string;
  // id: string;
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
      <div>hello</div>
      // this.props.recipes
     
      // <Card>
      //       <CardImg top width="200px" src={props.character.image} alt="Card image cap" />
      //       <CardBody>
      //           <CardTitle tag="h5">{props.character.name}</CardTitle>
      //           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
      //           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      //           <Button>Button</Button>
      //       </CardBody>
      //   </Card>
        
    )
  }
}

export default UserRecipeCards;
