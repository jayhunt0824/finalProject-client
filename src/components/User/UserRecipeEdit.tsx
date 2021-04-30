import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";


export interface UserRecipeEditProps {
    token: string;
    fetchRecipes: Function;
    updateOff: Function;
    recipeToUpdate: Function;
  
   
}
 
export interface UserRecipeEditState {
    editName: string;
    editIng: string;
    editDir: string;
    editCat: string;
    id: string;
    
    
}
 
class UserRecipeEdit extends React.Component<UserRecipeEditProps, UserRecipeEditState> {
    constructor(props: UserRecipeEditProps) {
        super(props);
        this.state = { editName: "", editIng: "", editDir: "", editCat: "" , id: "" };
    }

    
//   recipeUpdate = (event: any, recipe: string) => {
//     event.preventDefault();
//     fetch(`http://localhost:3000/recipe/update/${this.props.recipeToUpdate.id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         log: { Name:this.state.editName, ingredients: this.state.editIng, directions: this.state.editDir, categories: this.state.editCat},
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: this.props.token,
//       }),
//     }).then((res) => {
//       this.props.fetchRecipes();
//       this.props.updateOff();
//     });
//   };
    
    




    render() { 
        return ( 
            <Modal isOpen={true}>
      <ModalHeader>Log a Recipe</ModalHeader>
      <ModalBody>
        <Form >
          <FormGroup>
            <Label htmlFor="Name">Edit Name:</Label>
            <Input
              name="result"
              value={this.state.editName}
              onChange={(e) => this.setState({editName: e.target.value})}
            />
          </FormGroup>
          {/* <FormGroup>
            <Label htmlFor="description">Edit Description:</Label>
            <Input
              name="description"
              value={this.state.editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
          </FormGroup> */}
          <FormGroup>
            <Label htmlFor="categories">Edit Definition:</Label>
            <Input
              type="select"
              name="definition"
              value={this.state.editCat}
              onChange={(e) => this.setState({editCat: e.target.value})}
            >
                 <option value="Cocktail"> Cocktail </option>
              <option value="Ordinary Drink"> Ordinary Drink</option>
              <option value="Martini"> Martini </option>
              <option value="Shot"> Shot</option>
              <option value="Punch/Party Drink"> Punch/Party Drink</option>
            </Input>
          </FormGroup>
          <Button Type="submit">Update the Recipe!</Button>
        </Form>
      </ModalBody>
    </Modal>
         );
    }
}
 
export default UserRecipeEdit;