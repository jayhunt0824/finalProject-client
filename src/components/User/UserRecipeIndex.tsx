import * as React from "react";
import {Container, Row, Col, Button} from 'reactstrap';
import UserRecipeCreate from "./UserRecipeCreate";
import UserRecipeCards from "./UserRecipeCards"
import UserRecipeEdit from "./UserRecipeEdit";
import {IRecipe} from "./Interface";



export interface UserRecipeIndexProps {
    editUpdateRecipe: Function;
    token: string;
    id: string;
    fetchRecipes: Function;
    deleteRecipes: Function;
    
    
}
 


export interface UserRecipeIndexState {
    recipes: IRecipe[] ;
    recipeToUpdate: string
   
}
 
class UserRecipeIndex extends React.Component<UserRecipeIndexProps, UserRecipeIndexState> {
    constructor(props: UserRecipeIndexProps) {
        super(props);
        this.state = { recipes: [], recipeToUpdate: ""  };
    }
     
    
     

    componentDidMount() {
        this.fetchRecipes();
        
    }


     fetchRecipes = () => {
        let token = this.props.token ? this.props.token: localStorage.getItem("token");


        fetch("http://localhost:3000/recipe/get", {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token ? token : "", 
          }),
        })
          .then((res) => res.json())
          .then((logData: IRecipe[]) => {
              console.log(logData);
            this.setState({recipes: logData});
          });
      };

      deleteRecipe = ( id: number) => {
        let token = this.props.token ? this.props.token: localStorage.getItem("token");


        fetch(`http://localhost:3000/recipe/delete/${id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:  token ? token : "",
          }),
        }).then(() => this.fetchRecipes());
      };
    
     editUpdateRecipe = (recipe: any) => {
        this.setState({recipeToUpdate: recipe});
        console.log(recipe);
    }
 
      


    render() { 
        return (
            <Container>
      <Row>
        <Col md="3">
          <UserRecipeCreate fetchRecipes={this.fetchRecipes}  token={this.props.token} />
        </Col>
        <Col md="9">

            {this.state.recipes.length>0 ? (this.state.recipes.map((recipe: IRecipe, index: number)=>(<UserRecipeCards recipe={recipe} deleteRecipe={this.deleteRecipe} editUpdateRecipe={this.editUpdateRecipe}/>))): null}
        
        </Col>
       
     
      </Row>
    </Container>
          );
    }
}
 
export default UserRecipeIndex;