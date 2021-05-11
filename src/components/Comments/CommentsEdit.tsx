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
import APIURL from '../../helpers/environment';


export interface UserRecipeEditProps {
    sessionToken: string;
    fetchComments: Function;
    // updateOff: Function;
    editComment: any;
    id: number ;

   
}
 
export interface UserRecipeEditState {
    editId: number;
    editRecipeId: number;
    editComments: string;
    editPhotoURL: string;
    // recipe: this.props.recipeUpdate ? this.props.recipeUpdate.id: null
    modal: boolean;
 
    
}
 
class UserRecipeEdit extends React.Component<UserRecipeEditProps, UserRecipeEditState> {
    constructor(props: UserRecipeEditProps) {
        super(props);
        this.state = { editId: 0, editRecipeId: 0, editComments: "", editPhotoURL: ""  , modal: true };
    }

    
  commentUpdate = (event: any) => {
    let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem("token");
    console.log("commentUpdate", this.props.id)
    event.preventDefault();
    fetch(`${APIURL}/comments/update/${this.props.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.editId, recipeId: this.state.editRecipeId, comments: this.state.editComments, photoURL: this.state.editPhotoURL,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token ? token : "",
      }),
    }).then((res) => res.json()) 
    .then(()=> {
      this.props.fetchComments();
      
      // this.props.updateOff();
     
    });
  };
    
    

toggle=()=>{
  this.setState({modal: !this.state.modal});
}


    render() { 
        return ( 
          <div>
             <Button className="editpostbtn" onClick={this.toggle}>Edit</Button>
      <Modal isOpen={!this.state.modal} toggle={this.toggle} >
        <ModalHeader className="myModalHeader2" toggle={this.toggle}></ModalHeader>
        <ModalBody style={{height: "300px"}}>
        <Form onSubmit={(event)=>this.commentUpdate(event)} >
            <FormGroup>
              <Label htmlFor="Name"> Edit comment:</Label>
              <Input
               style={{height: "200px"}}
                name="result"
                value={this.state.editComments}
                onChange={(e) => this.setState({editComments: e.target.value})}
              />
            </FormGroup>
        
    
            
        <Button className="updatepostbtn" onClick={this.toggle} type="submit">Update!</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>

          </div>
          )
        }
      }
      
      export default UserRecipeEdit;




