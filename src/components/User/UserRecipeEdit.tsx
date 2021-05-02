import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";


export interface UserRecipeEditProps {
    sessionToken: string;
    fetchRecipes: Function;
    // updateOff: Function;
    // recipeToUpdate: Function;
  
   
}
 
export interface UserRecipeEditState {
    editName: string;
    editIng: string;
    editDir: string;
    editCat: string;
    id: string;
    modal: boolean;
    
    
}
 
class UserRecipeEdit extends React.Component<UserRecipeEditProps, UserRecipeEditState> {
    constructor(props: UserRecipeEditProps) {
        super(props);
        this.state = { editName: "", editIng: "", editDir: "", editCat: "" , id: "", modal: true };
    }

    
  recipeUpdate = (id: number) => {
    let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem("token");

    // event.preventDefault();
    fetch(`http://localhost:3000/recipe/update/${id}`, {
      method: "PUT",
      // body: JSON.stringify({
      //  { Name: {this.state.editName}, ingredients: this.state.editIng, directions: this.state.editDir, categories: this.state.editCat},
      // }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    }).then((res) => {
      this.props.fetchRecipes();
      // this.props.updateOff();
    });
  };
    
    

toggle=()=>{
  this.setState({modal: !this.state.modal});
}


    render() { 
        return ( 
          <div>
             <Button  onClick={this.toggle}>Edit</Button>
      <Modal isOpen={!this.state.modal} toggle={this.toggle} >
        <ModalHeader className="myModalHeader2" toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody style={{height: "500px"}}>
        <Form >
            <FormGroup>
              <Label htmlFor="Name"> Edit Name:</Label>
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
              <Label htmlFor="categories">Edit Category:</Label>
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
            <FormGroup>
              <Label htmlFor="Ingredients">Edit Ingredients:</Label>
              <Input
                Ingredients="Ingredients"
                value={this.state.editIng}
                onChange={(e) => this.setState({editIng: e.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="Directions">Edit Directions:</Label>
              <Input
                Directions="Directions"
                value={this.state.editDir}
                onChange={(e) => this.setState({editDir: e.target.value})}
              />
            </FormGroup>
            {/* <FormGroup>
                    <Label htmlFor="photoURL">Upload image</Label> 
                    <Input type="file" onChange={uploadImage} />
                    <br/>
                    {loading ? <h6>Loading...</h6> : <img src={editPhotoURL} style={{width:   '150px'  }} style={{height:   '150px'  }} />} {' '}
                    <Button size= 'sm' color='outline-danger' disabled={loading} disabled={loading} onClick={deleteImg}>Delete image</Button>
                </FormGroup> */}
            
          </Form>
        </ModalBody>
        <ModalFooter>
        <Button Type="submit">Update the Recipe!</Button>
          {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>

          </div>
          )
        }
      }
      
      export default UserRecipeEdit;




